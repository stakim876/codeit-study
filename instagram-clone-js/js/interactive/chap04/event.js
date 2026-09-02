// 화면에 있는 아이콘 버튼 전부
const buttons = document.querySelectorAll('.icon-btn');
// console.log(buttons);

// 클릭한 요소(target) vs 리스너를 붙인 요소(currentTarget)
// buttons.forEach(btn => {
//   btn.addEventListener('click', (event) => {
//     const pushed = event.target.textContent;
//     const attached = event.currentTarget.textCount;

//     console.log(
//     '놀린 것: ${pushed}  . 리스너를 붙인 것: ${attached} . 둘이 같은가$ {event.target === event.currentTarget}',
//    );
//  });
// });

// 하트(♡)만 골라서 클릭 리스너를 붙임
const hearts = [...document.querySelectorAll('.icon-btn')].filter(
  (icon) => icon.textContent === '♡'  
);

hearts.forEach(likeIcon => {
  likeIcon.addEventListener('click', (event) => {
    // console.log('좋아요가 클릭됨!', event);
    // 빈 하트 ↔ 채운 하트, is-liked 클래스도 같이 켜고 끔
    event.target.textContent = event.target.textContent === '♡' ? '♥' : '♡';
    event.target.classList.toggle('is-liked');
  });  
});

// document.body.innerHTML = '<a href="https://www.naver.com"">네이버링크</a>';

const link = document.querySelector('a');
link.addEventListener('click', event => {
  const isOK = confirm('정말로 이동하시겠습니까?');
  console.log(isOk);
  if (!isOK) {
    // 취소하면 브라우저 기본 동작(페이지 이동)을 막음
    event.preventDefault();
  }  
});
