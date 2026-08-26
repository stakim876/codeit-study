// ~/js-study/post-author-typo.js
const post = {
  caption: '새벽 러닝 🌙',
  likes: 2100,
  // author는 객체 안에 또 객체가 들어 있는 중첩 구조
  author: {
    username: 'yuna',
    followers: 1240,
  },
};

// post.author → 작성자 객체 전체 { username: 'yuna', followers: 1240 }
console.log(post.author);

// post.author.username → 그 안의 username만 → 'yuna'
console.log(post.author.username);

// 주의: post.athor 처럼 오타내면 undefined
// undefined.username 을 읽으려 해서 TypeError가 남
