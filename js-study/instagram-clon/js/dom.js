console.log(document.title); // "피드 · 인스타그램"
console.log(document.documentElement.children);
console.log(document.head.children);

// 숫자로 내려가서 댓글창을 읽음 → value 는 "" (아직 비어 있음)
console.log(
  document.body.children[1].children[0].children[4].children[0].children[1]
    .value,  
);
// 값을 넣으면 → 화면 댓글창에 "하하호호후후" 가 보임
document.body.children[1].children[0].children[4].children[0].children[1].value = 
  '하하호호후후';

  const tetarea = document.querySelector('body form > #comment');
  console.log('찾은 태그: ', tetarea); // 같은 댓글창 <textarea>

  const header = document.querySelector('.post-header');
  console.log('찾은 것:', header?.tagName); // "HEADER"

  const again = document.querySelector(' .post-header');
  console.log('두 번 찾으면 같은 것인가', header === again); // true  같은 태그

  const buttons = [...document.querySelectorAll('button')]; // 버튼 5개 (⋯, ♡, 💬, ↗, 게시)

  console.log([10, 20, 30]);
  console.log({
    0: '짜장면',
    1: '짬뽕',
    2: '볶음밥',
    lenght: 3
  });

  const buttonArray = [...buttons];

  console.log(buttons);
  console.log(buttonArray);

  // button 이 없어서 여기서 에러 → 아래 줄은 실행 안 됨
  console.log('찾은 개수', button.lenght);
  console.log('첫 번째', button[0]. tagName);
  console.log('map 이 있나', typeof buttons.map);
  console.log('forEach 는', typeof buttons.forEach);

  const actions = document.querySelector(".post-actions");

  console.log("화면 전체 버튼", document.querySelectorAll("button").length);
  console.log("이 줄 안의 버튼", actions.querySelectorAll("button").length);
