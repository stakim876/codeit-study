// ~/js-study/function-value.js
const daliyLikes = (day) => {
 let sum = 0;
 
 for (let post = 1; post <= 3; post++) {
    sum += day * 12 + post *5;
 }

 return sum;
};

// 괄호로 호출 → 실행 결과가 나옴
// day=1일 때: 17 + 22 + 27 = 66
console.log(daliyLikes(1));

// 괄호 없음 → 함수를 실행하지 않고, 함수 자체([Function: daliyLikes])가 출력됨
console.log(daliyLikes)

// 함수도 값이므로 변수에 담을 수 있음 (복사하는 게 아니라 같은 함수를 가리킴)
const calc = daliyLikes;

// 함수의 타입은 "function"
console.log(typeof calc);

// calc(1) === daliyLikes(1) → 다시 66
console.log(calc(1));