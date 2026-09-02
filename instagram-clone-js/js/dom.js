// HTML에 이미 있는 첫 번째 게시글 카드
const card = document.querySelector('article');

// p를 메모리에만 만듦. after로 붙여야 화면에 보임
const line = document.createElement('p');
line.classList.add('post-location');
line.textContent = '여의도 한강공원';

const header = card.querySelector('.post-header');

const headerTitle = header.querySelector('p');

headerTitle.after(line);

for (const child of header.children) {
  console.log(`${child.tagName}, ${child.className || '(클래스 없음)'}`);
}

const box = document.querySelector('.hashtags');
const first = box.querySelector('.hashtag-chip');

const mark = (text) => {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
};

// prepend=박스 맨 앞, append=맨 뒤, before/after=첫 칩 앞/뒤
// box.prepend(mark("[prepend]"));
// box.append(mark("[append]"));
// first.before(mark("[before]"));
// first.after(mark("[after]"));

// 이미 있는 칩 칸에 데이터를 넣고, 남는 칸은 지움
const quiet = posts[1];
const chips = card.querySelectorAll('.hashtag-chip');

chips.forEach((chip, index) => {
  if (index < quiet.hashtags.length) {
    chip.textContent = '#${quiet.hashtags[index]}';
  } else {
    chip.remove();
  }
});

// 칩을 전부 지운 뒤, 배열 길이만큼 span을 새로 만들어 붙임
const fillTags = (article, hashtags) => {
  const box = article.querySelector('.hashtags');

  for (const old of box.querySelectorAll('.hashtag-chip')) {
    old.remove();
  }

  for (const tag of hashtags) {
    const chip = document.createElement('span');
    chip.classList.add('hashtag-chip');
    chip.textContent = '#${tag}';
    box.append(chip);
  }
};

fillTags(card, posts[4].hashtags);

const show = (post) => {
  fillTags(card, post.hashtags);
  const chips = [...card.querySelectorAll('.hashtag-chip')];
  const shown =
    chips.length === 0
      ? '(없음)'
      : chips.map((chip) => chip.textContent).join(' ');
   console.log(
    `${post.username} 태그${post.hashtags.length}개 → 칩${chips.length}칸${shown}`,
  );
};

show(posts[2]);

// a 태그를 만들고 href를 단 뒤 해시태그 박스에 붙임
const makeLink = (url, text) => {
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.textContent = text;
  box.append(link);
};

makeLink('https://www.google.com', '구글로 이동');
makeLink('https://www.github.com', '깃허브로 고고고~');

// 카드 뼈대. 내용은 비워 두고 fillPost가 채움
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
    <button type="button" class="icon-btn">♡</button>
    <button type="button" class="icon-btn">💬</button>
    <button type="button" class="icon-btn">↗</button>
  </div>

  <p class="like-count"></p>

  <div class="hashtags"></div>
`;

// 위치가 있으면 유저명 뒤에 p.post-location 을 넣음
const fillLocation = (article, location) => {
  const place = location?.name;

  if (place) {
    const line = document.createElement('p');
    line.classList.add('post-location');
    line.textContent = place;
    article.querySelector('.post-header p').after(line);
  }
};

// 한 장의 post 데이터 → 유저명, 사진, 캡션, 좋아요, 위치, 태그에 넣음
const fillPost = (article, post) => {
  article.querySelector('.post-header p').textContent = post.username;

  const avatar = article.querySelector('.post-header img');
  avatar.setAttribute(
    'src',
    'https://picsum.photos/seed/${post.username}/40/40',
  );
  avatar.setAttribute('alt', '${post.username} 프로필사진');

  const photo = article.querySelector('figure img');
  photo.setAttribute('src', post.image);
  photo.setAttribute('alt', post.alt);

  article.querySelector('figcaption').textContent = post.caption;
  article.querySelector('.like-count').textContent = '좋아요 ${post.like}개';
  const likeBtn = article.querySelector('.icon-btn');
  if (post.liked) {
    likeBtn.textContent = '♥';
    likeBtn.classList.add('is-liked');
  } else {
    likeBtn.textContent = '♡';
    likeBtn.classList.remove('is-liked');
  }


  fillLocation(article, post.location);
  fillTags(article, post.hashtags);
};

// 원본 posts를 복사하고, 좋아요는 전부 꺼진 상태로 시작
let feedPosts = posts.map(post => ({ ...post, liked: false }));

// 해당 id만 liked/likes를 바꾼 뒤, 화면을 다시 그림
const toggleLike = id => {
  feedPosts = feedPosts.map(post =>
    post.id === id
      ? {
       ...post,
       liked: !post.liked,
       likes: post.likes + (post.liked ? -1 : 1) 
      }
      : post,
    );  
    render(feedPosts);
  };

  // article 생성 → 뼈대 넣고 → 내용 채우고 → 하트 클릭 시 toggleLike
  const createCard = (post) => {
    const article = document.createElement('article');
    article.innerHTML = cardShell;

    fillPost(article, post);

    article.querySelector('.icon-btn').addEventListener('click', event => {
      toggleLike(post.id);
    });

    return article;
  };

  // main을 비우고 posts를 전부 새로 그려 넣음
  const render = (posts) => {
    const feedMain = document.querySelector('main');
    feedMain.innerHTML = '';

    for (const post of posts) {
      feedMain.append(createCard(post));
    }
  };

  render(feedPosts);
