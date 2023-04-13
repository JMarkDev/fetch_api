const postsList = document.querySelector('.posts');
const id = localStorage.getItem("id");

async function onSearchChange(event) {
    const id = event.target.value;
    renderPost(id)
}

async function renderPost(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    postsList.innerHTML = postsData.map((post) => postsHTML(post)).join("");
}

function postsHTML(post) {
    return `<div class="posts">
                <h3>POST TITLE: ${post.title}</h3>
                <p>Post Body: ${post.body}</p>
            </div>`
}

renderPost(id)