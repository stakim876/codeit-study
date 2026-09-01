
// 프로필 페이지. section 2개 → 앞은 프로필 칸, 뒤는 게시물 칸
const [firstSect, secondSect]
  = [...document.querySelectorAll('section')];

const likeListItem = document.createElement('li');
likeListItem.textContent = '좋아요 4,120';
// 통계에 없던 "좋아요" 한 줄을 새로 만듦

const statisticsUl = firstSect.querySelector('ul');
statisticsUl.append(likeListItem);
// 프로필 칸 ul 맨 아래에 붙임 → 원래 3줄에서 4줄

const [postLi, followerLi, followingLi, likeLi]
  = [...statisticsUl.children];
// 4줄을 각각 변수에 담음 (게시물, 팔로워, 팔로잉, 좋아요)

console.log(
  `통계 ${statisticsUl.children.length}줄: ` +
    [...statisticsUl.children].map((li) => li.textContent).join(' · '),
);
// 예: 통계 4줄: 게시물 0 · 팔로워 1,240 · 팔로잉 180 · 좋아요 4,120

const imageSectionUI = secondSect.querySelector('ul');
// 게시물 칸의 ul.post-grid

const beforePostCount = imageSectionUI.children.length;

imageSectionUI.children[0].remove();
// 첫 번째 사진 li만 지움

const afterPostCount = imageSectionUI.children.length;

console.log('게시를 ${beforePostCount}장 -> ${afterPostCount}장');
// 의도: 장 수가 1 줄어듦 (작은따옴표라 숫자는 콘솔에 안 넣고 글자 그대로 나옴)
