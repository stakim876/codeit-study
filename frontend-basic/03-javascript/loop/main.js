for (let i = 1; i <= 5; i++) {
  console.log(i);
}
/* 1부터 5까지 숫자를 출력함. */

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("짝수:", i);
  }
}

/* 1부터 10까지 숫자 중 짝수만 출력함 . */

let total = 0;

for (let i = 1; i <= 10; i++) {
  total = total + i;
}

console.log("총합:", total);
/* 합을 계산 함 */

const subjects = ["HTML", "CSS", "JavaScript", "React"];
/* 여러 과목을  배열에 저장함. */

for (const subject of subjects) {
  console.log(subject);
}

const users = ["김승태", "김민수", "이영희"];

for (const user of users) {
  console.log("사용자:", user);
}


const numbers = [10, 20, 30, 40, 50];


for (const number of numbers) {
  if (number >= 30) {
    console.log("30 이상:", number);
  }
}

let number = 1;

while (number <= 5) {
  console.log("while:", number);

  number++;
}

let score = 50;

while (score < 100) {
  score += 10;

  console.log("현재 점수:", score);
}

let count = 1;

while (count <= 10) {

  if (count === 6) {
    break;
  }

  console.log("count:", count);

  count++;
}

const prices = [10000, 25000, 30000, 45000, 50000];

let expensiveCount = 0;

for (const price of prices) {
  if (price >= 30000) {
    expensiveCount++;
  }
}
/* 가격이30000원 이상인 상품의 개수를 계산 함 */


console.log("30000원 이상 상품:", expensiveCount);