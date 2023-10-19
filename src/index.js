import axios from "axios";
import {fetchBreeds,  fetchCatByBreed} from "./cat-api.js";

axios.defaults.headers.common["x-api-key"] = 'live_wGzZUVgEEhQ7o6tbb8g0mGcimVRwBSiqWtl9oI3YdeomRh2q6YRNThds6BXOieSr';
const selectCat = document.querySelector('.breed-select');  
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

loader.classList.add('hidden-part');
error.classList.add('hidden-part');
// selectCat.classList.add('hidden-part');
fetchBreeds().then(arr => {
        const markup = arr.map(({ id, name } = {}) => `<option value="${id}">${name}</option>`).join('');
        selectCat.insertAdjacentHTML('afterbegin', markup);
        selectCat.addEventListener('change', handleSelect);
        function handleSelect(){
            const needBreed = arr.find(item => item.id === selectCat.value);
            console.log(needBreed);
            fetchCatByBreed(selectCat.value)
                .then(resp => {
                     catInfo.innerHTML = `<img src="${resp[0].url}" alt="cat" width="500">
                     <h2>${needBreed.name}</h2>
                     <h3>${needBreed.description}</h3>
                     <h3>Temperament: ${needBreed.temperament}</h3>`
                    console.log(resp[0])})
                .catch(err => console.log(err));}    })
    .catch(err => console.log(err));
    
      


    

        // selectCat.addEventListener('change', handleSelect);


        // fetchBreeds().then(arr => {
        //         arr.forEach(item => arrOfCats.push(item));
        //         const markup = arr.map(({ id, name } = {}) => `<option value="${id}">${name}</option>`).join('');
        //         selectCat.insertAdjacentHTML('afterbegin', markup);
        //         console.log(arrOfCats);        })
        //     .catch(err => console.log(err));
            
            
        // function handleSelect(){
        //     fetchCatByBreed(selectCat.value)
        //         .then(resp => {
        //              catInfo.innerHTML = `<img src="${resp[0].url}" alt="cat" width="500">
        //              <h2></h2><h3></h3><h3></h3>`
        //             console.log(resp[0])})
        //         .catch(err => console.log(err));}