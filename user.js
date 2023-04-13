const postsList = document.querySelector('.posts');

async function main() {
    const id = localStorage.getItem("id");
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    console.log(postsData)
    
    postsList.innerHTML = postsData.map((post) => postsHTML(post)).join("");
}

main()


function postsHTML(post) {
    return `<div class="posts">
                <h3>POST TITLE: ${post.title}</h3>
                <p>Post Body: ${post.body}</p>
            </div>`
}