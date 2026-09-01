
// '11'은 li 태그가 아니라서 못 찾음 -> allLiTags.length 는 0
const allLiTags = [...document.querySelectorAll('li')];
console.log('화면 전체 LI 태그 개수: ', allLiTags.length);

// section 2개 -> [프로필 칸, 게시물 칸]
const [firstSection, secondSection]
  = [...document.querySelectorAll('section')];

// 게시물 칸 안에서도 '11'이라서 -> 0  
console.log('2번째 section안의 LI 태그 개수:',
  secondSection.querySelectorAll('li'),length);
  
  //. post-grid가 HTML에 없음 -> postGrid 는 null
  const postGrid = document.querySelector('.post-grid');
  console.log('postGrid: ', postGrid);

  // 전부 찾아도 없을 -> lengh 는 0
  const postGdridList = document.querySelectorAll('.post-grid');
  console.log('postGridList: ', postGdridList.length);  
