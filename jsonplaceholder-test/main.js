import { JSONPlaceholderAPI } from "./jsonpalceholder-api.js";

const jsonplaceholderInstance = new JSONPlaceholderAPI();

const POST_COUNT = 100;
const postsWrapperEl = document.querySelector(".js-posts");
const loadMoreBtnEl = document.querySelector(".js-load-more");

jsonplaceholderInstance
  .fetchPosts()
  .then((data) => {
    postsWrapperEl.innerHTML = createPostsCards(data);
    loadMoreBtnEl.classList.remove("is-hidden");
  })
  .catch(console.warn);

function createPostsCards(data) {
  const postEl = data
    .map(
      ({ title, body, id }) => `<li class="posts_item">
    <h2 class="posts_title">${title}</h2>
    <p class="posts_text">${body}</p>
    <p class="posts_id">id: ${id}</p>
</li>`
    )
    .join("");

  return postEl;
}

const handleLoadMoreBtnClick = () => {
  jsonplaceholderInstance.page += 1;

  const { limit, page } = jsonplaceholderInstance;

  if (POST_COUNT <= limit * page) {
    loadMoreBtnEl.classList.add("is-hidden");
  }

  jsonplaceholderInstance
    .fetchPosts()
    .then((data) => {
      postsWrapperEl.insertAdjacentHTML("beforeend", createPostsCards(data));
    })
    .catch(console.warn);
};

loadMoreBtnEl.addEventListener("click", handleLoadMoreBtnClick);
