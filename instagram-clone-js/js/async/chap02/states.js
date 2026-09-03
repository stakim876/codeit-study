// instagram-clone-js/js/states.js

// resolve/reject는 한 번만 유효. 첫 번째 resolve만 남고 나머지는 무시됨
const once = new Pramise((resolve, reject) => {
  resolve('첫 번째 결과');
  resolve('두 번째 결과');
  resolve('실패로 바꾸기');  
});

let caught = false;

console.log(once);

once
  .then((value) => console.log(`then 이 받은 값 — ${value}`))
  .catch((reason) => {
    caught = true;
    console.log(`catch 가 받은 값 — ${reason}`);
  })
   .finally(() => {
     // 이미 성공으로 끝났으니 catch는 안 돌고 finally만 이어서 실행
     console.log(caught ? 'catch 가 돌았어요' : 'catch 는 들지 않았어요');   
   });
