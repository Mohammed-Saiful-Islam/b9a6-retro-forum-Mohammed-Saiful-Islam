const allMarkBtn = document.querySelectorAll('.mark-btn');
const markAsRead = document.getElementById('markCount');

const postTitle1 = document.getElementsByClassName('.post-title1');
const postViewer1 = document.getElementsByClassName('.post-viewer1');

const postTitle2 = document.getElementsByClassName('.post-title2');
const postViewer2 = document.getElementsByClassName('.post-viewer2');

const markedPostContaier = document.getElementById('#markedPostContainer');

allMarkBtn.forEach((post) => {
    post.addEventListener('click', function () {
        let count = 0;
        count = count + 1;
        const totalPost = parseInt(markAsRead.innerText) + count;
        markAsRead.innerText = totalPost;

        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = postTitle1;
        const img = document.createElement('img')
        const p2 = document.createElement('p');
        p2.innerText = postViewer1;
        li.appendChild(p1);
        li.appendChild(img);
        li.appendChild(p2);
        console.log(li);
        markedPostContaier.appendChild(li);
    })
})