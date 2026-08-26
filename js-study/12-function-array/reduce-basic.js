const weekLikes = [66, 102, 138, 174, 210, 246, 282];

let total = 0;

// 배열을 하나씩 돌면서 total에 더함 → 진짜 합계 (1218)
for (const likes of weekLikes) {
  total += likes;  
}

// console.log('반복문으로 ' + total + '개');

// reduce: 배열을 하나씩 돌면서 값을 "누적"하는 함수
// 1번째 인자 acc  = 지금까지 쌓인 값 (accumulator)
// 2번째 인자 curr = 지금 보고 있는 배열 요소 (current)
// 마지막 0        = acc의 시작값
//
// 그런데 여기서는 acc를 안 쓰고 curr만 반환함
//   시작 acc=0
//   66  → 66
//   102 → 102
//   138 → 138
//   ...
//   282 → 282  (마지막 값만 남음)
//
// 합계를 내려면 (acc, curr) => acc + curr 이어야 함
const sum = weekLikes.reduce((acc, curr) => curr, 0);

console.log('reduce 로 ' + sum + '개');