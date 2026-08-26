

function simpleFor(arr, callback) {
  for (const item of arr) {
    callback(item);
  }
}

const foodList = ['스시', '짬뽕', '떡볶이', '족발', '파스타'];

simpleFor(foodList, (food) => {
  console.log(food + ' 마니 먹을 거에요~');
   console.log('메롱~');
});


console.log('===============');
// 이 배열에서 짝수만 들어있는 새 배열을 가지고 싶어 (원본 훼손 금지)
function fillterEvenArray(numbers) {
  const newArry = [];
  for (const n of numbers) {
    if (n % 2 === 0) {
        newArry.push(n);
    }
  }
  return newArry;
}

// 이 배열에서 짝수만 들어있는 새 배열을 가지고 싶어 (원본 훼손 금지)
function filterEvenOroddArray(numbers, flag= 'odd') {
 const newArray = [];
 if (flag === 'even') {
      for (const n of numbers) {
        if (n % 2 === 0 ) {
        newArray.push(n);
      }
    }
 } else {
    for (const n of numbers) {
        if (n % 2 === 1) {
          newArray.push(n);
        }
    }
}
return newArray;
}
 