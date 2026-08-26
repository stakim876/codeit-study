// ~/js-study/print-all.js

// 아래 세 개는 정의만 되어 있고 호출되지 않음 → 실행해도 출력에 안 나옴
const dailyLIskes = (day) => {
  let sum = 0;

  for (let post = 1; post <= 3; post++) {
    sum += day * 12 * post * 5;
  }

  return sum;
};

const likesLine = (day) => day + '일차 좋아요' +  dailyLikes(day) +'개';

const printAll = (list, makeLine) => {
  for (const item of list) {
    console.log(makeLine(item));
  }
};


function foo(param) {
  // 괄호 없음 → 함수를 실행하지 않고, 함수 자체([Function (anonymous)])가 출력됨
  console.log(param);
  // 괄호로 호출 → 넘겨받은 함수가 실행됨 (여기서는 "zizizi")
  param();
  // 함수의 타입은 "function"
  console.log(typeof param);
}

// bar도 정의만 되어 있고 호출되지 않음
function bar() {
  console.log('하하호호');
  return 10;
}

// foo에 이름 없는 함수를 값으로 넘김
// foo 안에서 그 함수가 param이 됨
foo(() => { console.log("zizizi") });

