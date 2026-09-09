// 객체들의 배열
const posts = [
  { username: 'yuna', caption: '새벽 러닝 🌙', likes: 2100 },
  { username: 'dahye', caption: '밤 산책', likes: 88 },
  { username: 'jaehoon', caption: '오늘 한강 노을 실화냐 🌇', likes: 1240 },
];

console.log(posts.length);        // 3
console.log(posts[0]);            // 첫 번째 객체
console.log(posts[0].username);   // yuna
console.log(posts[0]['username']); // 점도 대괄호도 같음

for (const post of posts) {
  console.log(post.username + ' · 좋아요 ' + post.likes + '개');
}