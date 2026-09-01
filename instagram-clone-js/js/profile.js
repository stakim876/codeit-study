// profile.html 이 이 파일을 불러 줌. posts 는 먼저 로드된 feed.js 것
const grid = document.querySelector(".post-grid");
const count = document.querySelector(".post-count");
const avatar = document.querySelector(".profile-info img");

count.textContent = posts.length;
useImageFallback(avatar, "jaehoon", 120);

count.textContent = posts.length;

for (const post of posts) {
  const item = document.createElement("li");
  const photo = document.createElement("img");
  photo.setAttribute("src", post.image);
  photo.setAttribute("alt", post.alt);
  useImageFallback(photo, post.username, 300);
  item.append(photo);
  grid.append(item); // .post-grid 안에 사진 한 장씩 붙임
}
