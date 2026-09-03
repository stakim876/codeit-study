// instagram-clone-js/js/queue.js

// 동기 코드는 콜스택에서 바로 실행
console.log('1. 지금 바로');

// 0ms여도 타이머(매크로태스크) 큐로 감. 마이크로태스크보다 나중
setTimeout(() => console.log('5. 타이머 줄에서'), 0);

// Promise then은 마이크로태스크 큐. 콜스택이 비면 타이머보다 먼저 비움
Promise.resolve().then(() => console.log('3. 약속 줄에서'));

setTimeout(() => console.log('6. 타이머 줄에서'), 0);

Promise.resolve().then(() => console.log('4. 약속 줄에서'));

console.log('2. 지금 바로');

// 출력 순서: 1 → 2 → 3 → 4 → 5 → 6
