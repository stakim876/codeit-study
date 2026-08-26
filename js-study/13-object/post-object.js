// ~/js-study/post-object.js
const username = 'yuna';
const caption = '새벽 러닝 🌙';
const likes = 2100;

console.log(username);
console.log(caption);
console.log(likes);

// 관련 값을 객체 하나로 묶음
const post = {
 username: 'yuna',
 caption: '새벽 러닝 🌙',
 like: 2100,   
};

console.log(post);

console.log(post.username); // 'yuna'
console.log(post.likes);    // 키는 like 인데 likes를 찾음 → undefined
console.log(post.username + ' 좋아요 ' + post.likes + '개');