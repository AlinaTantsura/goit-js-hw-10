// import axios from "axios";
import {fetchBreeds} from "./cat-api.js";

// axios.defaults.headers.common["x-api-key"] = 'live_wGzZUVgEEhQ7o6tbb8g0mGcimVRwBSiqWtl9oI3YdeomRh2q6YRNThds6BXOieSr';
const selectCat = document.querySelector('.breed-select');  

// fetch('https://api.thecatapi.com/v1/breeds')
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error();
//         }
//         return resp.json();
// })
    fetchBreeds().then(arr => {
        const markup = arr.map(({ id, name } = {}) => `<option value="${id}">${name}</option>`).join('');
        selectCat.insertAdjacentHTML('afterbegin', markup);})
    .catch(err => console.log(err));
    
