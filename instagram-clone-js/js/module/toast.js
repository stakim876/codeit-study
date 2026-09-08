// 댓글 폼 아래 에러
export const showCommentError = (form, message) => {
  for (const old of form.querySelectorAll('.comment-error')) {
    old.remove();
  }  

  const line = document.createElement('p');
  line.classList.add('comment-error');
  line.textContent = message;
  form.append(line);
};

// 잠깐 뜨는 알림
export const showToast = (message) => {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    document.body.append(toast);
    setTimeout(() => toast.remove(), 3000);
};