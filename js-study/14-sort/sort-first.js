// ~/js-study/sort-first.js
const usernames = ['yuna', 'dahye', 'jehoon', 'minji', 'sungwoo'];
const likeCounts = [2100, 88, 1240, 0, 320];

const sortedNames = usernames.sort(); // 문자열 → 알파벳 순
console.log(sortedNames);

const sortedLikes = likeCounts.sort(); // 비교함수 없으면 문자열로 정렬
console.log(sortedLikes);              // 0, 1240, 2100, 320, 88 (숫자 크기순 아님)