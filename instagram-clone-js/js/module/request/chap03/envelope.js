// instagram-clone-js/js/envelope.js
// fetch는 404여도 안 던짐. 성공/실패는 ok · status로 봄
const peek = async (URL, label) => {
  const response = await fetch(url);
  
  console.log(
    `${label}  — ok${response.ok} . status${response.status} .${response.statusText}`,
  );
};

const run = async () => {
  await peek('http://localhost:3001/posts', '게시물 목록');
  await peek('http://localhost:3001/postz', '주소를 틀렸을 때');  
};

run();
