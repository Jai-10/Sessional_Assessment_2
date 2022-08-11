// Step 1: Create XHR object
const xhr = new XMLHttpRequest();

// 2. Open portal of communication between client and server
const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;
xhr.open('GET', url, false);

// 3. Perform a function when readyState is in transition
xhr.onreadystatechange = () => {
    if (xhr.status===200 && xhr.readyState===4) {
        const response = JSON.parse(xhr.responseText)
        // console.log(response);

        let template = '';
        for (let i=0; i<response.length; i++) {
            template += 
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">${response[i].title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Article ${response[i].id}, By User-${response[i].userId}</h6>
                    <p class="card-text">${response[i].body}</p>
                </div>
            </div>`;
        }

        document.querySelector(".blog-container").innerHTML = template;
    }
};

// 4. Send request
xhr.send();






// rotate new post icon from '+' to 'x' (on click it)
const newPostBtn = document.querySelector("#newPostIcon");
const newPostTemplate = document.querySelector("#newPostTemplate");
let clickTemplate = 0;
newPostBtn.addEventListener('click', () => {
    if (clickTemplate === 0) {
        newPostBtn.style.transform = "rotate(-45deg)";
        clickTemplate = 1;

        // open new post template on clicking the new post icon
        newPostTemplate.style.right = "25px";
    }
    else if (clickTemplate === 1) {
        newPostBtn.style.transform = "rotate(0deg)";
        clickTemplate = 0;
        
        // close new post template on clicking the new post icon
        newPostTemplate.style.right = "-100%";
    }
});




// publish new article (in blog container)
const blogContainer = document.querySelector(".blog-container");
const publishArticle = document.querySelector("#post-article");
publishArticle.addEventListener('click', (e) => {
    e.preventDefault();
    const newPostTitle = document.querySelector("#new-title").value;
    const newPostBody = document.querySelector("#new-body").value;
    
    document.querySelector(".blog-container").innerHTML += 
    `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${newPostTitle}</h5>
            <p class="card-text">${newPostBody}</p>
        </div>
    </div>`;

    window.scrollTo(0,document.body.scrollHeight);
});
{/* <h6 class="card-subtitle mb-2 text-muted">Article ${response[i].id}, By User-${response[i].userId}</h6> */}