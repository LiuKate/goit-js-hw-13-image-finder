import Gallery from './gallery';


const galleryByQuery = new Gallery({
selector: '.gallery',
button: '.btn-primary'
})

const searchRef = document.querySelector('.search-form');
const loadMoreBtnRef = document.querySelector('.btn-primary')

searchRef.addEventListener('submit', searchHeandler);
loadMoreBtnRef.addEventListener('click', moreBtnHeandler)

function searchHeandler(event) {
    event.preventDefault()
    const query = event.currentTarget.elements.query.value;

    if(query !== ''){
    galleryByQuery.renderGalleryMarkup(query)
    }
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