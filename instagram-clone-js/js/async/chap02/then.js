// instagram-clone-js/js/then.js

// 400ms 뒤 42로 성공하는 약속
const likePromise = new Promise((resolve) => {
  setTimeout(() => resolve(42), 400);  
});

// then을 붙여도 지금은 안 돌고, resolve되면 그때 실행
console.log('좋아요를 세는 중이에요');

likePromise.then((count) => {
  console.log(`좋아요 ${count}개를 받았어요`);
});
