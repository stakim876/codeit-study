const post = {
  username: 'jaehoon',
  caption: '오늘 한강 노을 실화냐 🌇',
  likes: 1240,  
};

let { username, likes } = post; // 값만 복사. post를 바꿔도 이 변수는 그대로
post.username = "말똥이";

console.log(post);


// 매개변수에서 바로 구조분해. postLine(post) → username, likes만 꺼냄
const postLine = ({ username, likes }) =>
  `${username}, 좋아요 ${likes}개`;

console.log(postLine(post));


