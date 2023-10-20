import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selectCat = document.querySelector('.breed-select');  
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

catInfo.classList.add('hidden-part');
loader.classList.remove('hidden-part');

fetchBreeds().then(arr => {
        const markup = arr.map(({ id, name } = {}) => `<option value="${id}">${name}</option>`).join('');
    selectCat.insertAdjacentHTML('afterbegin', markup);
    loader.classList.add('hidden-part');
    new SlimSelect({
        select: "#breed-select",
    });
    // selectCat.classList.remove('hidden-part');
        
    selectCat.addEventListener('change', handleSelect);
    
    function handleSelect() {
        catInfo.innerHTML = '';
        const needBreed = arr.find(item => item.id === selectCat.value);
        catInfo.classList.add('hidden-part');
        loader.classList.remove('hidden-part');
        
        fetchCatByBreed(selectCat.value)
            .then(resp => {
                catInfo.innerHTML = `<div class="img-box"><img src="${resp[0].url}" alt="cat" class="cat-img"></div>
                <div>
                <h2>${needBreed.name}</h2>
                <p>${needBreed.description}</p>
                <p><span class="accent-temp">Temperament:</span> ${needBreed.temperament}</p>
                </div>`;
                loader.classList.add('hidden-part');
                catInfo.classList.remove('hidden-part');
                })
            .catch(() => {
                Notify.failure('Oops! Something went wrong! Try reloading the page!');
                loader.classList.add('hidden-part');;});
            }    
}).catch(() => {Notify.failure('Oops! Something went wrong! Try reloading the page!');
    loader.classList.add('hidden-part');;
    });