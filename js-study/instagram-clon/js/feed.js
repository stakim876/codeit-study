// 피드 페이지가 열리면 이 배열이 메모리에 만들어짐
// posts.length → 8  글 8개가 준비된 상태
// 아직 화면에 그리는 코드는 없어서, 보이는 건 HTML에 박힌 게시물 1개뿐
const posts = [
  {
    id: 1,
    username: "yuna", // posts[0].username → "yuna"  첫 글 작성자
    caption: "새벽 러닝 🌙",
    likes: 2100, // posts[0].likes → 2100  좋아요 숫자
    image: "https://picsum.photos/seed/post4/600/600",
    alt: "새벽 한강 산책로 사진",
    location: { name: "여의도한강공원", city: "서울" }, // posts[0].location.city → "서울"
    hashtags: ["새벽러닝", "한강", "러닝스타그램"],
  },
  {
    id: 2,
    username: "dahye",
    caption: "밤 산책",
    likes: 88,
    image: "https://picsum.photos/seed/post5/600/600",
    alt: "가로등이 켜진 밤길 사진",
    hashtags: ["밤산책"], // location 없음 → posts[1].location 은 undefined
  },
  {
    id: 3,
    username: "jaehoon",
    caption: "오늘 한강 노을 실화냐 🌇",
    likes: 1240, // 1000 이상이라 인기글
    image: "https://picsum.photos/seed/post1/600/600",
    alt: "한강에서 찍은 노을 사진",
    hashtags: ["한강", "노을", "서울"],
  },
  {
    id: 4,
    username: "minji",
    caption: "새로 생긴 카페 ☕",
    likes: 0, // 좋아요 없음
    image: "https://picsum.photos/seed/post2/600/600",
    alt: "카페에서 마신 커피 사진",
    hashtags: [], // 빈 배열 → 태그 없음
  },
  {
    id: 5,
    username: "seungwoo",
    caption: "3년 만에 다시 뛰었다",
    likes: 320,
    image: "https://picsum.photos/seed/post6/600/600",
    alt: "운동장 트랙 사진",
    location: { name: "부산아시아드주경기장", city: "부산" },
    hashtags: ["러닝", "복귀"],
  },
  {
    id: 6,
    username: "yuna", // yuna 글이 여기까지 2개
    caption: "오늘도 5km",
    likes: 940,
    image: "https://picsum.photos/seed/post7/600/600",
    alt: "러닝 기록이 찍힌 화면 사진",
    location: { name: "여의도한강공원", city: "서울" },
    hashtags: ["새벽러닝", "러닝"],
  },
  {
    id: 7,
    username: "jaehoon",
    caption: "퇴근길 하늘",
    likes: 640,
    image: "https://picsum.photos/seed/post8/600/600",
    alt: "퇴근길에 올려다본 하늘 사진",
    hashtags: ["노을"],
  },
  {
    id: 8,
    username: "yuna", // yuna 글 3개째. 필터하면 yuna만 3장이 나옴
    caption: "러닝화 새로 샀다",
    likes: 1580,
    image: "https://picsum.photos/seed/post9/600/600",
    alt: "새로 산 러닝화 사진",
    location: { name: "성수동", city: "서울" },
    hashtags: ["러닝", "러닝스타그램"],
  },
];
