const post = {
  username: 'yuna',
  caption: '새벽 러닝 🌙',
  likes: 2100,  
};

// 객체는 만든 뒤에도 값을 바꿀 수 있음
post.likes *= 2;          // 2100 * 2 → 4200
post.username = 'mina';   // 'yuna'를 'mina'로 덮어씀
post.commentCount = 12;   // 없던 키를 새로 추가

// caption은 안 건드렸으므로 그대로 '새벽 러닝 🌙'
console.log(post);