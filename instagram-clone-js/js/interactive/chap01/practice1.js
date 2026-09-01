
// 프로필 페이지에서 같은 태그를 짧은 길 / 긴 길로 찾음
const simpleH1 = document.querySelector('h1'); // 첫 번째 h1 = jaehoon
const compleH1 = document.querySelector('body main h1'); // main 안 h1 = 같은 jaehoon

const simpleImg = document.querySelector('section img'); // 첫 section 안 사진
const compleImg = document.querySelector('body main section img'); // 같은 프로필 사진

console.log('이름을 두 방법으로 찾았을 때 같은 것인가',
   (simpleH1 === compleH1)); // true (같은 이름 태그)

   console.log(
      '사진을 두 방법으로 찾았을 때 같은 것인가',
      simpleImg === compleImg,
   ); // true (같은 프로필 사진)
