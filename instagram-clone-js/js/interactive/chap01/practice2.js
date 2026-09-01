
// 화면에서 li 태그를 전부 찾음
const allLiTages = [...document.querySelectorAll('li')];
console.log('화면 전체 LI 태그 개수: ', allLiTages.length);
// 7  →  위 메뉴 4개 + 프로필 통계 3개

// section이 2개라서 앞에건 프로필 칸, 뒤에건 게시물 칸
const [firstSection, secondSection]
  = [...document.querySelectorAll('section')];

console.log('2번째 section안의 LI 태그 개수:',
  secondSection.querySelectorAll('li').length);
// 0  →  게시물 칸 안만 세면, 아직 사진 li가 없음

  const postGrid = document.querySelector('.post-grid');
  console.log('postGrid: ', postGrid);
// 게시물 칸의 ul 태그 1개 (querySelector는 첫 번째만 줌)

const postGridList = document.querySelectorAll('.post-grid');
console.log('postGridList: ', postGridList.length);
// 1  →  All은 전부 모아서 개수를 셈. 같은 클래스가 하나뿐
