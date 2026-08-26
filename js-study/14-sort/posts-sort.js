// ~/js-study/posts-sort.js
const comments = [
  { username: 'dahye', text: '우와 새벽에 대단해요', likes: 12 },
  { username: 'minji', text: '사진 미쳤다', likes: 41 },
  { username: 'jeahoon', text: '저도 같이 뛰어요', likes: 3 },  
];

// slice()로 복사 후 정렬 → 원본 comments는 그대로
// b.likes - a.likes → 좋아요 많은 순 (내림차순)
const ranked = comments.slice().sort((a, b) => b.likes - a.likes);
console.log(ranked);



for (const comment of ranked) {
   console.log(
    comment.username + ': ' + comment.text + ' (좋아요 ' + comment.likes + ')',
   );  
}

// 정렬 후 첫 번째 = 좋아요 최댓값 → minji
console.log('가장 많은 공감을 받은 댓글: ' + ranked[0]. username);