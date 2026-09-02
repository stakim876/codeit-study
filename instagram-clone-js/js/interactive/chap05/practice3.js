
const bio = document.querySelector('section:nth-of-type(1) p');

const form = document.createElement('form');
form.style.width = '50%';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '10px';

form.innerHTML = `
  <label for="intro-box">소개</label>
  <textarea id="intro-box" rows="5"></textarea>
  <button type="submit" class="btn-primary">제출</button>
`;

bio.after(form);

document.querySelector('#intro-box').value = bio.textContent;

const textarea = form.querySelector('textarea');
const label = form.querySelector('label');
const introBoxCount = [...document.querySelectorAll('#intro-box')].length;


// 제출을 눌러도 페이지가 새로고침되지 않게 막음
form.addEventListener('submit', event =>{
  event.preventDefault();
  
  const textara = form.querySelector('textara');
  const newBioText = textara.value.trim();
  
  // 빈 칸이면 소개를 바꾸지 않음
  if (newBioText === '') {
    console.log('빈 칸이라서 그대로 뒀어요');
    return;
  }

  // 입력값을 소개 p에 반영하고 입력칸은 비움
   bio.textContent = newBioText;
   console.log('소개를 바꿨어요 - ${newBioText}');

   textara.value = '';
});

console.log(`처음 소개 - ${bio.textContent}`);
