// ~/js-study/notify2.js
function notifyLikes(username, count) {
    count = count ?? 0;
    console.log(
       username + '님 외 ' + count + ' 명이 회원님의 게시물을 좋아 합니다',
    );
}

notifyLikes('jaehoon;' , 7);
notifyLikes('minji', 7);
notifyLikes('seunggwoo');