

 // ~/js-study/scope.js
 function makeReport() {
  const totalPots = 21;
  console.log('게시물 ' + totalPots + '개');
  return totalPots;
 }

 const total = makeReport();
 console.log('요약: 게시물 ' + total + '개');