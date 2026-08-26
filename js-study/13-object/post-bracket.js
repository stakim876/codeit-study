// ~js=study/post-bracket.js
const post = {
  usernames: 'yuna',
  caption: '새벽 러닝 🌙',
  likes: 2100,  
};

// for ~ of : 배열의 순회
// for ~ in : 객체의 순회 -> key를 순회함
for (const x in post) {
  // x는 키가 담긴 변수 ('usernames', 'caption', 'likes')
  // post.x 는 "x"라는 이름의 키를 찾는 것 → 없음
  // post[x] 는 변수 x에 든 문자열로 키를 찾음 → 값 yuna, 새벽 러닝, 2100
  console.log( x, post[x]);  
}