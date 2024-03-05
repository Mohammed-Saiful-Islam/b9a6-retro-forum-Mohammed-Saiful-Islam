const allMarkBtn = document.querySelectorAll('.mark-btn');
const markAsRead = document.getElementById('markCount');

const postTitle = document.getElementById('post-title');
const postView = document.getElementById('post-view');
const viewEye=document.getElementById('eye');

const markedPostContaier = document.getElementById('markedPostContainer');

allMarkBtn.forEach((post) => {
    post.addEventListener('click', function () {
        let count = 0;
        count = count + 1;
        const totalPost = parseInt(markAsRead.innerText) + count;
        markAsRead.innerText = totalPost;

        const postTitleText=postTitle.innerText;
        const postViewNum=postView.innerText;

        const div=document.createElement('div');
        const p1=document.createElement('p');
        p1.innerText=postTitleText;
        const p2=document.createElement('p');
        p2.innerText=postViewNum;
        div.appendChild(p1);
        div.appendChild(p2);
        markedPostContaier.appendChild(div);
    })
})