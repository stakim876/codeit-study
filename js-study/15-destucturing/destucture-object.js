const post = {
  username: 'jaehoon',
  caption: '오늘 한강 노을 실화냐 🌇',
  likes: 1240,
};

console.log(`${post.username} · 좋아요${post.likes}개`);
console.log(`${post.caption}`);

// 객체에서 같은 이름 변수로 꺼냄. username만 uname으로 이름 바꿈
const { username: uname, caption, likes } = post;

// 작은따옴표라서 ${}가 그대로 출력됨. 백틱(`)을 써야 값이 들어감
console.log(`${uname} · 좋아요${likes}개`);
console.log(`${caption}`);