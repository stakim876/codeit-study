
const pair = ['월', 120];

// 작은따옴표라서 ${}가 그대로 출력됨. 백틱(`)을 써야 값이 들어감
console.log(`${pair[0]}요일 좋아요${pair[1]}개`);

// const day = pair[0];
// const count = pair[1];

const [day, count] = pair; // pair[0] → day, pair[1] → count

console.log('${day}요일 좋아요${count}개');