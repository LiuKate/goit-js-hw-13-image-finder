const API_KEY = '19366770-ca18693f598aea950bc0ba083';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default function apiService(query='', page){
 return fetch(`${BASE_URL}&q=${query}&page=${page}&per_page=12&key=${API_KEY}`)
    .then(response => response.json())
}