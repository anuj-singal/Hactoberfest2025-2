// Get references to HTML elements
const postList = document.getElementById('post-list');
const loadPostsButton = document.getElementById('load-posts');

// Function to fetch posts from the API
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        // Clear any previous posts before rendering new ones
        postList.innerHTML = '';

        // Loop through the posts and display them
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            
            const title = document.createElement('h3');
            title.textContent = post.title;
            
            const body = document.createElement('p');
            body.textContent = post.body;

            postElement.appendChild(title);
            postElement.appendChild(body);
            
            postList.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Add event listener to the button
loadPostsButton.addEventListener('click', fetchPosts);
