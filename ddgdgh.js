import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import svg from '../images/sprite.svg';
<<<<<<< Updated upstream
=======
import { save, load, remove } from './localStorageJSON';
import { ModalRecipe } from './create-modal';

>>>>>>> Stashed changes
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';

export async function searchOnCategory(searchQuery, page) {
  const apiUrl = `${BASE_URL}?category=${searchQuery}&page=${page}&${resizePage()}`;

  const response = await axios.get(apiUrl);
  return response.data;
}

// =========================== апішка==========
const elements = {
  dishesList: document.querySelector('.dishes-list-wrap'),
  //   seeRecipeBtn: document.querySelector('.see-recipe-btn'),
  //   heartIcon: document.querySelector('button[data-heart="heart"]'),
};

// elements.renderMarkup.addEventListener('click', renderOnClickCategory);
// elements.heartIcon.addEventListener('click', addToFavourite);
// elements.heartIcon.addEventListener('click', () => {
//   console.log('Button was clicked');
// });

export async function renderOnClickCategory(category, page) {
  try {
    const response = await searchOnCategory(category, page);
    console.log(response);
    onRenderMarkup(response);
    //   додавання по рисічу в обране та модалка
    elements.dishesList.addEventListener('click', onListClick);

    const heartIcon = document.querySelector('.js-favourite');
    console.log(heartIcon);
    heartIcon.addEventListener('click', addToFavourite);
  } catch (error) {
    Notify.failure(error.message);
  }
}

export function onListClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('see-recipe-btn')) {
    const { id } = event.target.closest('.dishes-list-item').dataset;
    console.log(id);
<<<<<<< Updated upstream
=======
    ModalRecipe(id);
    //   сюди вставити код модалки (з кнопки отримується айдішнік)
  }
  if (event.target.classList.contains('js-favourite')) {
    const { id } = event.target.closest('.dishes-list-item').dataset;
    console.log(id);
    // localStorage.clear();
    if (favouriteArrLocalStor.includes(id)) {
      return;
    }
    favouriteArrLocalStor.push(id);
    save(KEY_FAVOURITE, favouriteArrLocalStor);
    // const heartBtn = event.target.closest('.js-favourite');
    // console.log(heartBtn);
    // heartBtn.classList.add('is-active-heart');
    const hearts = document.querySelectorAll('.dishes-list-heart-icon');
    console.log(hearts);
    hearts.forEach(heart => {
      console.log(heart);
      if (heart.classList.contains('is-active-heart')) {
        heart.classList.remove('is-active-heart');
      } else {
        heart.classList.add('is-active-heart');
      }
    });

    // const inStorage = favouriteArrLocalStor.some({id} => id);
    // localStorage.setItem(KEY_FAVOURITE, JSON.stringify(favouriteArrLocalStor));
>>>>>>> Stashed changes
  }
}

export function findCard(id) {
  return response.result;
}

export function onRenderMarkup(searchValue) {
  const markup = searchValue.results
    .map(({ _id, title, category, description, preview, rating }) => {
      return `<li class="dishes-list-item" data-id="${_id}" data-category="${category}" style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url(${preview}); background-position: center;
                      background-size: cover;">
        <button type="button" aria-label="Favorite Button" class="heart-btn js-favourite" data-heart="heart">
        <svg class="dishes-list-heart-icon">
        <use href="${svg}#icon-heart">
        </use>
    </svg>
</button>
            
            <div class="dishes-list-item-wrapper">
                <h3 class="dishes-list-item-title">${title}</h3>
                <p class="dishes-list-item-text">${description}</p>
                <div class="dishes-list-item-wrapper-rating">
                    <div class="dishes-list-item-wrapper-rating-star">
                        <p class="dishes-list-item-wrapper-rating-text">${rating}</p>
                        <div class="dishes-list-item-wrapper-rating-star-5">
                            <svg class="dishes-list-star-icon is-active-star">
                                <use href="${svg}#icon-star">
                                </use>
                            </svg>
                            <svg class="dishes-list-star-icon is-active-star">
                                <use href="${svg}#icon-star">
                                </use>
                            </svg>
                            <svg class="dishes-list-star-icon is-active-star">
                                <use href="${svg}#icon-star">
                                </use>
                            </svg>
                            <svg class="dishes-list-star-icon is-active-star">
                                <use href="${svg}#icon-star">
                                </use>
                            </svg>
                            <svg class="dishes-list-star-icon">
                                <use href="${svg}#icon-star">
                                </use>
                            </svg>
                        </div>
                    </div>
<<<<<<< Updated upstream
                    <button type="button" data-id="${_id}" data-recipe-btn="click" class="see-recipe-btn">See recipe</button>
=======
                    <button type="button" data-id="${_id}" data-recipe-btn="click" data-modal-recipe-open class="see-recipe-btn js-see-recipe">See recipe</button>
>>>>>>> Stashed changes
                </div>
            </div>
        </li>`;
    })
    .join('');

  elements.dishesList.insertAdjacentHTML('beforeend', markup);
}

export function clearRecipeCardsContent() {
  elements.dishesList.innerHTML = '';
}

export function resizePage() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1280) {
    return 'per_page=9&limit=9';
  }

  if (screenWidth >= 768 && screenWidth < 1280) {
    return 'per_page=8&limit=8';
  }

  if (screenWidth < 768) {
    return 'per_page=6&limit=6';
  }
}

function addToFavourite() {
  console.log('click on heart');
}
// export { onRenderMarkup, renderOnClickCategory };

// ==============серця======
import { save, load, remove } from './localStorageJSON';

export function heartsFillStorage() {
  const cardFavouritesBtns = document.querySelectorAll('.card_favourites_btn');

  let storedData = load('cardData');
  if (storedData) {
    const identArray = storedData.map(item => item.ident);

    cardFavouritesBtns.forEach(button => {
      const cardId = button.parentNode.querySelector('.card_btn').id;
      const hertWaihte = button.parentNode.querySelector('.card_heart');

      if (identArray.includes(cardId)) {
        button.classList.add('heart-filled');
        hertWaihte.classList.add('heart-filled');
      } else {
        button.classList.remove('heart-filled');
        hertWaihte.classList.remove('heart-filled');
      }
    });
  } else {
    cardFavouritesBtns.forEach(button => {
      const hertWaihte = button.parentNode.querySelector('.card_heart');
      button.classList.remove('heart-filled');
      hertWaihte.classList.remove('heart-filled');
    });
  }
}
