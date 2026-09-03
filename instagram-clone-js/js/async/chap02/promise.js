const uploadPromise = new Promise((resolve) => {
  // 3초 뒤에야 성공. 그전까지는 pending
  setTimeout(() => {
    const resultMessage = '업로드에 성공했어요!';
    resolve(resultMessage);
  }, 3000);  
});

// Promise 객체는 바로 생김. 결과는 아직 없음
console.log('약속을 받았어요');
console.log('이게 무엇인가 - ${typeof uploadPromise}');
console.log('결과가 들어 있나1 ?', uploadPromise);
setTimeout(() => {
  // 4초 뒤엔 이미 resolve된 뒤라, then이 바로 결과를 받음
  uploadPromise.then(result => {
    console.log('결과가 들어 있나2 ?' , result);
  });  
}, 4000);
