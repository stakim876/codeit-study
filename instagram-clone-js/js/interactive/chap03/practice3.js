// 사진 6장을 담을 데이터
const postGridImages = [
  { image: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&w=300&h=300', alt: '한강 노을' },
  { image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&h=300', alt: '카페 커피' },
  { image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&h=300', alt: '등산' },
  { image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=300&h=300', alt: '새벽 러닝' },
  { image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=300&h=300', alt: '운동장 트랙' },
  { image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&h=300', alt: '러닝화' },  
];

// 둘째 section(게시물 칸) 안의 ul
const imageSectionUl = document
   .querySelectorAll('section')[1]
   .querySelector('ul');
   
   
// 지우기 전 장 수
const imageListItems = [...imageSectionUI.children];
console.log('지우기 전 ${imageListItems.length)장');
// 지금 그리드에 있는 사진 개수 (작은따옴표라 숫자 대신 글자가 그대로 나옴)

// 안에 있는 li를 한 장씩 지움
for (const listItems of imageListItems) {
  listItem.remove();  
}
console.log('지운 뒤 ${imageSectionUI.children.length}장');
// 의도: 0장

// li + img 한 장을 만드는 함수
const createImageCard = ({ image, alt }) => {
  const imageListItem = document.createElement('li');
  
  const imageTag = document.createElement('img');
  imageTag.setAttribute('src', image);
  imageTag.setAttribute('alt', alt);
  imageTag.addEventListener(
    'error',
    () => {
      imageTag.src = `https://placehold.co/300x300/efefef/262626?text=${encodeURIComponent(alt)}`;
    },
    { once: true },
  );

  imageListItem.append(imageTag);
  
  return imageListItem;
};

// 배열 6장을 화면에 붙임
for (const image of postGridImages) {
   imageSectionUl.append(createImageCard(image)); 
}

console.log('다시 그린 뒤 ${imageSectionUI.children.length}장');
// 의도: 6장

console.log(
  [...imageSectionUl.children]
  .map((li) => li.querySelector('img').getAttribute('alt'))
  .join(' / ')  
);
// 첫번째 이미지 / 두번째 이미지 / ... / 여섯번째 이미지
