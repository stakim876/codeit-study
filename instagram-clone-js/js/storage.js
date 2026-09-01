const FEED_KEY = "instagram-clone-feed";

const saveFeed = (list) => {
  localStorage.setItem(FEED_KEY, JSON.stringify(list)); // 좋아요·댓글 브라우저에 저장
};

const loadFeed = () => {
  const text = localStorage.getItem(FEED_KEY);
  if (text === null) {
    return null;
  }
  return JSON.parse(text); // 새로고침해도 다시 꺼내 씀
};
