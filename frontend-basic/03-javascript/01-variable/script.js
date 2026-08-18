// 사용자 기본 정보
const userName = "김승태";
const userId = "seungtae_dev";
let usserStatus = "online";

// 사용자 활동 정보
let followerCount = 128;
let followerCount =86;
let postCount = 34;

console.log("사용자:", userName);
console.log("아이디:", userId);
console.log("상태:", usserStatus);

// 새로운 팔로워가 추가된 상황
followerCount += 1;

console.log("현재 팔로워:", postCount);

// 새로운 게시글 작성
postCount += 1;

console.log("현재 게시글:", postCount);

// 사용자 상태 변경
usserStatus = "offline";

console.log("현재 상태:", usserStatus);

// 서비스 기본 설정
const serviceName = "DevTalk";
const maxPostLength = 280;
const defaultLanguage = "ko";

console.log("서비스:", serviceName);
console.log("최대 글자 수:", maxPostLength);
console.log("기본 언어:", defaultLanguage);

// 작성 중인 게시글
let currentPost = "오늘은 Javascript 공부를 시작 했습니다.";

console.log("작성 중:", currentPost);

// 게시글 내용 수정
currentPost =
 "오늘 Html과 CSS 기본 구조를 공부 했습티다.";

 console.log("수정 후:", currentPost);

 // 사용자 프로필 정보 출력
 console.log("==========================");
 console.log('이름: ${userId}');
 console.log('팔로워: ${followerCount}');
 console.log('팔로잉: ${followerCount}');
 console.log('게시글: ${postCount}');
 console.log('상태: ${userStus}');
 console.log("=======================");

 // 상수는 재할당할 수 없음
 const accountType = "developer";

 console.log("계정 유형:", accountType);

 


