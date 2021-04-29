import apiService from './apiService';
import galleryTpl from '../templates/imageCard.hbs';

export default class Gallery{
    constructor({selector, button}){
    this.galleryRef = document.querySelector(selector);
    this.loadMoreBtnRef = document.querySelector(button);
    this.query = '';
    this.page = 1;
    }

    fetchGallery(query, page){
        apiService(query, page)
        .then(data => {
            this.galleryRef.insertAdjacentHTML('beforeend', galleryTpl(data.hits));
            // innerHTML = galleryTpl(data.hits);
            this.loadMoreBtnRef.classList.remove('is-hidden');
        })
    }

   renderGalleryMarkup(query) {
    
    this.page = 1;
    this.query = query;

    if(this.query === ''){
        this.clearMarkup();
    } else{
    this.fetchGallery(this.query, this.page);
    }
  }

    clearMarkup(){
        this.galleryRef.innerHTML = '';
        this.loadMoreBtnRef.classList.add('is-hidden')
    }

    onMoreBtnClick(){
        this.page +=1
        this.fetchGallery(this.query, this.page)
        onScrollTo()
    }

}

function onScrollTo() {
    let value = document.body.scrollHeight;
    
     setTimeout(() => {
      window.scrollTo({
        top: value,
        behavior: 'smooth',
      });
    }, 400);
}