const allPost = document.querySelectorAll('.post-before-mark');
const markAsRead = document.getElementById('markCount');

let count = 0;
allPost.forEach((post) => {
    post.addEventListener('click', function () {
        count = count + 1;
        const markCount = parseInt(markAsRead.innerText) + count;
        console.log(markCount);
    })
})