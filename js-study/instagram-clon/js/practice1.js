
// 프로필 페이지에서 이름을 두 길로 찾음
const simpleH1 = document.querySelector('h1');
const compleH1 = document.querySelector('body main h1');
// 둘 다 <h1>seungtae</h1>  → simpleH1 === compleH1 은 true  같은 태그

const simpleImg = document.querySelector('section img');
const complexImag = document.querySelector('body main section img');
// 둘 다 프로필 사진  → simpleImg === complexImag 도 true

console.log('이름을 두 방법으로 찾았을 때 같은 것인가',
  (simpleH1 === compleH1));
  
console.log(
    '사진을 두 방법으로 찾았을 때 같은 것인가',
    simpleImg === complexImag,
);
