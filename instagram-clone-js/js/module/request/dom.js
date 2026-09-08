// instagram-clone-js/js/dom.js
import { showCommentError, showToast } from './module/toast.js';
import { saveFeed, loadFeed } from './interactive/chap06/storage.js';

// 게시물 카드 뼈대
const cardShell = `
  <header class="post-header">
    <img alt="" />
    <p></p>
    <button type="button" class="more-btn">⋯</button>
  </header>

  <figure>
    <img alt="" />
    <figcaption></figcaption>
  </figure>

  <div class="post-actions">
    <button type="button" class="icon-btn like-btn">♡</button>
    <button type="button" class="icon-btn comment-btn">💬</button>
    <button type="button" class="icon-btn share-btn">↗</button>
  </div>

  <p class="like-count"></p>

  <div class="hashtags"></div>

  <ul class="comment-list"></ul>

  <footer>
    <form class="comment-form" action="#" method="post">
      <label class="sr-only">댓글 달기</label>
      <textarea name="comment" rows="2" placeholder="댓글 달기..."></textarea>
      <button type="submit" class="btn-primary">게시</button>
    </form>
  </footer>
`;

const fillLocation = (article, location) => {
  const place = location?.name;

  if (place) {
    const line = document.createElement('p');
    line.classList.add('post-location');
    line.textContent = place;
    article.querySelector('.post-header p').after(line);
  }
};

const fillTags = (article, hashtags) => {
  const box = article.querySelector('.hashtags');

  for (const old of box.querySelectorAll('.hashtag-chip')) {
    old.remove();
  }

  for (const tag of hashtags) {
    const chip = document.createElement('span');
    chip.classList.add('hashtag-chip');
    chip.textContent = `#${tag}`;
    box.append(chip);
  }
};

const fillComments = (article, comments) => {
  const list = article.querySelector('.comment-list');

  for (const old of list.querySelectorAll('li')) {
    old.remove();
  }

  for (const text of comments) {
    const line = document.createElement('li');
    line.textContent = text;
    list.append(line);
  }
};

// 한 장 데이터 넣기
const fillPost = (article, post) => {
  article.setAttribute('data-id', post.id);
  article.setAttribute('id', `post-${post.id}`);
  article.querySelector('.post-header p').textContent = post.username;

  const avatar = article.querySelector('.post-header img');
  avatar.setAttribute(
    'src',
    `https://picsum.photos/seed/${post.username}/40/40`,
  );
  avatar.setAttribute('alt', `${post.username} 프로필 사진`);

  const photo = article.querySelector('figure img');
  photo.setAttribute('src', post.image);
  photo.setAttribute('alt', post.alt);

  article.querySelector('figcaption').textContent = post.caption;
  article.querySelector('.like-count').textContent = `좋아요 ${post.likes}개`;
  article.querySelector('.like-btn').textContent = post.liked ? '♥' : '♡';

  const box = article.querySelector('.comment-form textarea');
  box.setAttribute('id', `comment-${post.id}`);
  article
    .querySelector('.comment-form label')
    .setAttribute('for', `comment-${post.id}`);

  fillLocation(article, post.location);
  fillTags(article, post.hashtags);
  fillComments(article, post.comments);
};

// 카드 만들기
const createCard = (post) => {
  const article = document.createElement('article');
  article.innerHTML = cardShell;
  fillPost(article, post);
  return article;
};

const feedMain = document.querySelector('main');

// 헤더 높이를 CSS에 맞춤
const siteHeader = document.querySelector('.site-header');

const syncHeaderHeight = () => {
  document.documentElement.style.setProperty(
    '--header-height',
    `${siteHeader.offsetHeight}px`,
  );
};

new ResizeObserver(syncHeaderHeight).observe(siteHeader);

const sentinel = document.createElement('div');
sentinel.classList.add('scroll-sentinel');
feedMain.append(sentinel);

// 화면 다시 그리기
const render = (list) => {
  for (const old of feedMain.querySelectorAll('article')) {
    old.remove();
  }

  for (const post of list) {
    feedMain.insertBefore(createCard(post), sentinel);
  }
};

const describeStatus = (status) => {
  if (status === 404) {
    return '그런 건 없대요';
  }

  if (status >= 500) {
    return '서버가 아픈가 봐요. 잠시 뒤에 다시 해주세요';
  }

  return `서버가 ${status} 로 답했어요`;
};

// 서버에서 게시물 가져오기
const loadPosts = async (page) => {
  const response = await fetch(
    `http://localhost:3001/posts?_page=${page}&_per_page=3`,
    {
      signal: AbortSignal.timeout(2000),
    },
  );

  if (!response.ok) {
    throw new Error(
      `게시물을 못 받았어요 — ${describeStatus(response.status)}`,
    );
  }

  const envelope = await response.json();

  return {
    posts: envelope.data.map((post) => ({ ...post, id: Number(post.id) })),
    next: envelope.next,
  };
};

// 서버에서 프로필 가져오기
const loadProfile = async () => {
  const response = await fetch('http://localhost:3001/users/1');

  if (!response.ok) {
    throw new Error(`계정을 못 받았어요 — ${describeStatus(response.status)}`);
  }

  return response.json();
};

// 댓글 서버에 보내기
const createComment = async (postId, text) => {
  const response = await fetch('http://localhost:3001/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postId, username: 'jaehoon', text }),
  });

  if (!response.ok) {
    throw new Error(`댓글을 못 보냈어요 — ${describeStatus(response.status)}`);
  }

  return response.json();
};

// 서버에서 댓글 가져오기
const loadComments = async () => {
  const response = await fetch('http://localhost:3001/comments');

  if (!response.ok) {
    throw new Error(`댓글을 못 받았어요 — ${describeStatus(response.status)}`);
  }

  return response.json();
};

let feedPosts = [];

// 화면에 댓글 추가
const addComment = (id, text) => {
  feedPosts = feedPosts.map((post) =>
    post.id === id ? { ...post, comments: [...post.comments, text] } : post,
  );
  render(feedPosts);
};

// 좋아요 켜고 끔 + 로컬에 저장
const toggleLike = (id) => {
  feedPosts = feedPosts.map((post) =>
    post.id === id
      ? {
          ...post,
          liked: !post.liked,
          likes: post.likes + (post.liked ? -1 : 1),
        }
      : post,
  );
  saveFeed(feedPosts);
  render(feedPosts);
};

// 좋아요 / 댓글칸 포커스 / 공유
feedMain.addEventListener('click', (event) => {
  const button = event.target.closest('.icon-btn');

  if (!button) {
    return;
  }

  const id = Number(button.closest('article').getAttribute('data-id'));

  if (button.classList.contains('like-btn')) {
    toggleLike(id);
  } else if (button.classList.contains('comment-btn')) {
    document.querySelector(`#comment-${id}`).focus();
  } else if (button.classList.contains('share-btn')) {
    window.location.hash = `post-${id}`;
  }
});

let sending = false;

// 댓글 제출
feedMain.addEventListener('submit', async (event) => {
  event.preventDefault();

  const box = event.target.querySelector('textarea');
  const text = box.value.trim();

  if (text === '' || sending) {
    return;
  }

  sending = true;

  const button = event.target.querySelector('button');

  button.disabled = true;
  button.textContent = '게시 중...';

  const id = Number(event.target.closest('article').getAttribute('data-id'));

  try {
    const saved = await createComment(id, text);

    addComment(id, saved.text);
    box.value = '';
  } catch (reason) {
    showCommentError(event.target, reason.message);
  } finally {
    sending = false;
    button.disabled = false;
    button.textContent = '게시';
  }
});



const showProfile = (profile) => {
  const line = document.createElement('p');
  line.classList.add('my-profile');
  line.textContent = `${profile.username} 님 · 팔로워 ${profile.followers}명`;
  document.querySelector('.site-header nav').append(line);
};

let myComments = [];
let currentPage = 1;

// 저장된 좋아요 + 내 댓글 합치기
const grow = (posts) => {
  const saved = loadFeed() ?? [];

  return posts.map((post) => {
    const mine = saved.find((item) => item.id === post.id);
    const mySlice = myComments.filter((comment) => comment.postId === post.id);

    return {
      ...post,
      liked: mine?.liked ?? false,
      comments: mySlice.map((c) => c.text),
    };
  });
};

let loading = false;
let hasMore = true;

// 다음 페이지 붙이기
const loadPage = async () => {
  if (loading || !hasMore) {
    return;
  }

  loading = true;

  try {
    console.log(`${currentPage}페이지를 달라고 했어요`);

    const { posts, next } = await loadPosts(currentPage);

    feedPosts = [...feedPosts, ...grow(posts)];
    render(feedPosts);

    console.log(`화면에 ${feedPosts.length}장 · 다음 ${next}`);

    hasMore = next !== null;
    currentPage += 1;
  } catch (reason) {
    showToast(reason.message);
  } finally {
    loading = false;
  }
};

// 맨 아래 보이면 다음 페이지
const watchSentinel = () => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadPage();
    }
  });

  observer.observe(sentinel);
};

// 시작: 프로필·댓글 받고 첫 페이지
const start = async () => {
  render([]);

  const [profile, comments] = await Promise.allSettled([
    loadProfile(),
    loadComments(),
  ]);

  if (profile.status === 'fulfilled') {
    showProfile(profile.value);
  } else {
    showToast(profile.reason.message);
  }

  if (comments.status === 'fulfilled') {
    myComments = comments.value;
  } else {
    showToast(comments.reason.message);
  }

  await loadPage();
  watchSentinel();
};

start();