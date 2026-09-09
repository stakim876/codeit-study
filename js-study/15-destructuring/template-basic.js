const name = 'yuna';
const postCount = 3;
const likeSum = 4620;

console.log(name + ' 게시물 ' + postCount + '개, 좋아요 ' + likeSum + '개');
console.log(`${name} 게시물 ${postCount}개, 좋아요 ${likeSum}개`); // 백틱 + ${}로 값 넣기

console.log(`안녕하세요.
반갑습니다.`); // 백틱은 줄바꿈도 그대로 유지

console.log('<ul>\n\t<li>\n\t\t<a href="#">바로가기</a>\n\t</li >\n</ul>'); // \n이 줄바꿈
console.log(`
<ul>
  <li>
    <a href="#">메롱</a>
  </li>
</ul>
`); 