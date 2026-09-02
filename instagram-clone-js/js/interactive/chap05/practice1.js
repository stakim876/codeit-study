
const feedGridContainer = document.querySelector('.feed-grid-container');

console.log('사진 ${feedGridContainer.chlidren.length}장을 리스너 1개로 받아요.');

// 각 li에 몇 번째인지 적어 둠
[...feedGridContainer.children].forEach((liTag, idx) => {

    liTag.dataset.seat = idx + 1;
});

// 부모에 리스너 1개. 클릭한 곳이 li 안이면 몇 번째 사진인지 출력
feedGridContainer.addEventListener('click', event => {
   const liTag = event.target.closest('li');
   if (!liTag) return;
   
   console.log(`${liTag.getAttribute('data-seat')}번째 사진 · ${liTag.querySelector('img').alt}`);
});
