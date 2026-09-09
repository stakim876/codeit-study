const post = {
  username: 'yuna',
  caption: '새벽 러닝 🌙',
  likes: 2100,
  hashtags: ['새벽러닝', '한강', '러닝스타그램'],
  hasMoney: true,
  Images: {
    src: '/images/running.jpg',
    alt: '달리는 사진',
    size: '3MB'
  },
  delete: () => console.log('사진이 삭제됩니다.')  
};

// push의 반환값 = 새 길이 → 4
console.log(post.hashtags.push('빨리달리기'));

console.log(post);

// 함수 실행 후 return이 없어서 undefined
console.log(post.delete());

// 글자 수 2인 태그만 → ['한강']
console.log(post.hashtags.filter(tag => tag.length === 2))