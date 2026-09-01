// instagram-clone-js/js/feed.js
const posts = [
  {
    id: 1,
    username: "yuna",
    caption: "새벽 러닝 🌙",
    likes: 2100,
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600&h=600",
    alt: "새벽 한강 산책로 사진",
    location: { name: "여의도한강공원", city: "서울" },
    hashtags: ["새벽러닝", "한강", "러닝스타그램"],
  },
  {
    id: 2,
    username: "dahye",
    caption: "밤 산책",
    likes: 88,
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&h=600",
    alt: "가로등이 켜진 밤길 사진",
    hashtags: ["밤산책"],
  },
  {
    id: 3,
    username: "jaehoon",
    caption: "오늘 한강 노을 실화냐 🌇",
    likes: 1240,
    image: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&w=600&h=600",
    alt: "한강에서 찍은 노을 사진",
    hashtags: ["한강", "노을", "서울", "실화냐"],
  },
  {
    id: 4,
    username: "minji",
    caption: "새로 생긴 카페 ☕",
    likes: 0,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&h=600",
    alt: "카페에서 마신 커피 사진",
    hashtags: [],
  },
  {
    id: 5,
    username: "seungwoo",
    caption: "3년 만에 다시 뛰었다",
    likes: 320,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=600&h=600",
    alt: "운동장 트랙 사진",
    location: { name: "부산아시아드주경기장", city: "부산" },
    hashtags: ["러닝", "복귀"],
  },
  {
    id: 6,
    username: "yuna",
    caption: "오늘도 5km",
    likes: 940,
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=600&h=600",
    alt: "러닝 기록이 찍힌 화면 사진",
    location: { name: "여의도한강공원", city: "서울" },
    hashtags: ["새벽러닝", "러닝"],
  },
  {
    id: 7,
    username: "jaehoon",
    caption: "퇴근길 하늘",
    likes: 640,
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=600&h=600",
    alt: "퇴근길에 올려다본 하늘 사진",
    hashtags: ["노을"],
  },
  {
    id: 8,
    username: "yuna",
    caption: "러닝화 새로 샀다",
    likes: 1580,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=600",
    alt: "새로 산 러닝화 사진",
    location: { name: "성수동", city: "서울" },
    hashtags: ["러닝", "러닝스타그램"],
  },
];

// 제일 좋아요가 많은 게시물 뽑기
// 좋아요가 많은 순으로 내림차 정렬
const ranked = [...posts].sort((a, b) => b.likes - a.likes);

// picsum이 안 열리면 회색 칸으로 바꿔서 빈 이미지 방지
const fallbackImage = (seed, size) =>
  `https://placehold.co/${size}x${size}/efefef/262626?text=${encodeURIComponent(seed)}`;

const useImageFallback = (img, seed, size) => {
  img.addEventListener(
    "error",
    () => {
      img.src = fallbackImage(seed, size);
    },
    { once: true },
  );
};
// console.log(ranked);