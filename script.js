const allMarkBtn = document.querySelectorAll('.mark-btn');
const markAsRead = document.getElementById('markCount');

const postTitle = document.getElementById('post-title');
const postView = document.getElementById('post-view');
const viewEye = document.getElementById('eye');

const markedPostContaier = document.getElementById('markedPostContainer');
const postBeforeMarkContainer = document.getElementById('post-before-mark-container');
const latestPostsContainer = document.getElementById('latest-posts-container');

const loadPosts = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const allPosts = data.posts;
    // console.log(allPosts);

    allPosts.forEach((post) => {
        console.log(post);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex">
                                <div class="">
                                    <div class="w-[50%] lg:w-[40%]">
                                        <div class="max-w-3 min-h-3 lg:max-w-6 lg:min-h-6 rounded-full bg-green-600">
                                        </div>
                                        <img class="w-full" src="./images/joinforum.png" alt="">
                                    </div>
                                </div>
                                <div class="divide-y-2 divide-dashed space-y-3">
                                    <div>
                                        <div class="">
                                            <p class="space-x-3 inter-font text-base font-medium">
                                                <span># Music</span><span>Author:</span> <span>Awlad Hossain</span>
                                            </p>
                                        </div>
                                        <div>
                                            <h3 id="post-title" class=" mulish font text-xl font-bold">10 Kids Unaware
                                                of Their
                                                Halloween
                                                Constume
                                            </h3>
                                            <p class="inter-font text-base font-normal ">
                                                It's one things to subject yourself to the Halloween costume mushap
                                                because hey
                                                that's
                                                your prerogative
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex justify-between">
                                        <div class="flex gap-2 mt-2">
                                            <div class="flex flex-col md:flex-row lg:flex-row gap-2">
                                                <div>
                                                    <img src="./images/message-2.png" alt="">
                                                </div>
                                                <div>
                                                    <p class="inter-font text-base font-normal">560</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col md:flex-row lg:flex-row gap-2">
                                                <div>
                                                    <img id="eye" src="./images/eye.png" alt="">
                                                </div>
                                                <div>
                                                    <p id="post-view" class=" inter-font text-base font-normal">1568</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col md:flex-row lg:flex-row gap-2">
                                                <div>
                                                    <img src="./images/time.png" alt="">
                                                </div>
                                                <div>
                                                    <p class="inter-font text-base font-normal"><span>5</span>
                                                        <span>min</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2">
                                            <button class="mark-btn rounded-full btn-xm
                                     p-0 py-0 px-0">
                                                <div class="rounded-full"><img class="w-full rounded-full"
                                                        src="./images/email .png" alt=""></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
        `
        postBeforeMarkContainer.appendChild(div);
    })
}
loadPosts();



allMarkBtn.forEach((post) => {
    post.addEventListener('click', function () {
        let count = 0;
        count = count + 1;
        const totalPost = parseInt(markAsRead.innerText) + count;
        markAsRead.innerText = totalPost;

        const postTitleText = postTitle.innerText;
        const postViewNum = postView.innerText;

        const div = document.createElement('div');
        const p1 = document.createElement('p');
        p1.innerText = postTitleText;
        let img = document.createElement('img');
        img.src = './images/eye.png'
        const p2 = document.createElement('p');
        p2.innerText = postViewNum;
        div.appendChild(p1);
        div.appendChild(img);
        div.appendChild(p2);
        div.classList.add('flex');
        div.classList.add('justify-between');
        div.classList.add('items-center');
        div.classList.add('bg-white');
        div.classList.add('text-black');
        div.classList.add('p-2');
        div.classList.add('rounded-xl');
        markedPostContaier.appendChild(div);
    })
})

const latestPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const allLatestPosts = data;

    allLatestPosts.forEach(latestPost => {
        console.log(latestPost);
        const div=document.createElement('div');
        div.innerHTML=`
                        <div class="w-full rounded-full">
                            <img class="w-full rounded-xl" src="${latestPost.cover_image}" alt="">
                        </div>
                        <div>
                            <div class="flex items-center">
                                <div class="rounded-full p-2"><img src="./images/calender.png" alt=""></div>
                                <div>
                                    <p class="mulish-font text-base font-normal">${latestPost.author.posted_date?latestPost.author.posted_date:'no publish date'}</p>
                                </div>
                            </div>
                            <div>
                                <h2 class="mulish-font text-xl font-extrabold">${latestPost.title}</h2>
                                <p class="mulish-font text-base font-normal">${latestPost.description}</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-[100px] rounded-full p-2"><img class="w-full rounded-full" src="${latestPost.profile_image}" alt=""></div>
                            <div class="">
                                <h3 class="mulish-font text-base font-bold">${latestPost.author.name}</h3>
                                <p class="mulish-font text-sm font-normal">${latestPost.author.designation?latestPost.author.designation:'Unknown'}</p>
                            </div>
                        </div>
        `
        div.classList.add('w-[325px]')
        latestPostsContainer.appendChild(div)
    })
}
// const div =document.createElement('div');
// div.innerHTML=`

// `
// }
// const div=document.createElement('div');


// div.innerHTML=`
// <div class="lg:w-[30%]">
//                     <div class="w-full">
//                         <img class="w-full" src="./images/joinforum.png" alt="">
//                     </div>
//                     <div>
//                         <div class="flex items-center">
//                             <div class="rounded-full p-2"><img src="./images/calender.png" alt=""></div>
//                             <div>
//                                 <p class="mulish-font text-base font-normal">24 janurary 2024</p>
//                             </div>
//                         </div>
//                         <div>
//                             <h2 class="mulish-font text-xl font-extrabold">What will a mars habitat force that
//                                 impact in our daily life</h2>
//                             <p class="mulish-font text-base font-normal">Yes, you can run unit tests and view the
//                                 results directly within the app</p>
//                         </div>
//                     </div>
//                     <div class="flex items-center">
//                         <div><img src="./images/author.png" alt=""></div>
//                         <div class="">
//                             <h3 class="mulish-font text-base font-bold">Dianne Russell</h3>
//                             <p class="mulish-font text-sm font-normal">ROR Devoloper</p>
//                         </div>
//                     </div>
//                 </div>
// `
// latestPostsContainer.appendChild(div);


latestPosts();