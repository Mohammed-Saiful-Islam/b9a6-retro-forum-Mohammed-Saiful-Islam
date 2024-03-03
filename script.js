const allPost = document.querySelectorAll('.post-before-mark');
const markAsRead = document.getElementById('markCount');

allPost.forEach((post) => {
    post.addEventListener('click', function () {
        let count = 0;
        count = count + 1;
        const totalPost=parseInt(markAsRead.innerText)+count;
        markAsRead.innerText=totalPost;
    })
})