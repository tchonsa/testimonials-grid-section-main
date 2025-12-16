const comments = document.querySelectorAll('.comment');

function resetComments() {
  comments.forEach(c => {
    c.classList.remove('active');
    c.classList.remove('blurred');
  });
}

comments.forEach(comment => {
  comment.addEventListener('click', (e) => {
    e.stopPropagation(); // VERY important, don’t remove this

    // if this comment is already active → reset everything
    if (comment.classList.contains('active')) {
      resetComments();
      return;
    }

    // otherwise → activate it
    comments.forEach(c => {
      c.classList.remove('active');
      c.classList.add('blurred');
    });

    comment.classList.remove('blurred');
    comment.classList.add('active');
  });
});

// click anywhere else on the page → reset
document.addEventListener('click', () => {
  resetComments();
});
