import { posts } from './data.js';
import { commentIcon, likeIcon, messageIcon } from './icons.js';

const postContainer = document.getElementById("post-container");

function renderPosts() {
    let postContent = ""
    for (let i = 0; i === posts.length; i++) {
        postContent += `
        <section class="post">
        <header class="post-header container">
          <img src="${posts[i].avatar}" alt="${posts[i].name} smiling at the camera." class="post-avatar">
          <h2 class="post-username">${posts[i].name}</h2>
          <h3 class="post-location">${posts[i].location}</h3>
        </header>
        <div class="post-body">
          <img src="${posts[i].post}" alt="${posts[i].name}'s self-portrait" class="post-image">
        </div>
        <footer class="post-footer container">
          <div class="post-buttons" id="post-buttons">
            <button type="button" class="like-btn btn" aria-label="Like" title="Like">${likeIcon}</button>
            <button type="button" class="comment-btn btn" aria-label="Comment" title="Comment">${commentIcon}</button>
            <button type="button" class="dm-btn btn" aria-label="Share" title="Share">${messageIcon}</button>
          </div>
          <div class="post-likes">
            <p>${posts[i].likes} likes</p>
          </div>
          <div class="post-comment">
            <p><span class="comment-username">${posts[i].username}</span> ${posts[i].comment}</p>
          </div>
        </footer>
      </section>
        `
    }
    postContainer.innerHTML = postContent;
}

document.addEventListener("DOMContentLoaded", renderPosts);