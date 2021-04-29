import debounce from 'lodash.debounce';
import Gallery from './gallery';


const galleryByQuery = new Gallery({
selector: '.gallery',
button: '.btn-primary'
})

const inputRef = document.querySelector('input[name="query"]');
const loadMoreBtnRef = document.querySelector('.btn-primary')

inputRef.addEventListener('input', debounce(searchHeandler, 500));
loadMoreBtnRef.addEventListener('click', moreBtnHeandler)

function searchHeandler(event) {
    galleryByQuery.renderGalleryMarkup(event.target.value)
}

function moreBtnHeandler(){
    galleryByQuery.onMoreBtnClick()
}










// let page = 1;
// let query ='';

// function fetchGallery(){
//     apiService(query, page)
//     .then(data => {
//         galleryRef.insertAdjacentHTML('beforeend', galleryTpl(data.hits));
//         loadMoreBtnRef.classList.remove('is-hidden');
//     })
// }

// function renderGalleryMarkup (query, page){
//     clearMarkup()
//     query = inputRef.value;
//     fetchGallery(query, page)

// }

// function onMoreBtnClick(query, page){
//     page += 1;
//     fetchGallery(query, page)
// }
// function clearMarkup(){
//     galleryRef.innerHTML = '';
//     loadMoreBtnRef.classList.add('is-hidden')
// }