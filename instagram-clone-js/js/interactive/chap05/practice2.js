
// 소개 글(p)을 찾고, 그 뒤에 수정용 폼을 붙임
const bio = document.querySelector('section:nth-of-type(1) p');

const form = document.childElementCount('form');
form.style.width = '50%';
form.style.display = 'flex';
form.style.flexDirection = 'colum';
form.style.gap = '10px';

// label의 for 와 textarea의 id 를 같게 해서 연결
form.innerHTML = `
  <label for="intro-box">소개</label>
  <textarea id="intro-box" rows="5"></textarea>
  <button type="submit" class="btn-primary">제출</button>
`;

bio.after(form);

// 지금 소개 글을 입력칸에 미리 넣음
document.querySelector('#intro-box').value = bio.textContent;

const textarea = form.querySelector('textarea');
const label = form.querySelector('label');
console.log(`입력칸 이름 ${textarea.getAttribute('id')}`);
console.log(`라벨이 가리키는 이름 ${label.getAttribute('for')}`);
const introBoxCount = [...document.querySelectorAll('#intro-box')].length;
console.log(`페이지에 그 이름을 가진 요소 ${introBoxCount}개`);    
