import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selectCat = document.querySelector('.breed-select');  
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');


selectCat.classList.add('hidden-part');
// new SlimSelect({
//             select: "#breed-select",
// });
catInfo.classList.add('hidden-part');
loader.style.display = 'inline-block';

fetchBreeds().then(arr => {
        const markup = arr.map(({ id, name } = {}) => `<option value="${id}">${name}</option>`).join('');
    selectCat.insertAdjacentHTML('afterbegin', markup);
    loader.style.display = 'none';
    selectCat.classList.remove('hidden-part');
        new SlimSelect({
            select: "#breed-select",
        });

        selectCat.addEventListener('change', handleSelect);
    
            function handleSelect() {
                catInfo.innerHTML = '';
                const needBreed = arr.find(item => item.id === selectCat.value);
                catInfo.classList.add('hidden-part');
                loader.style.display = 'inline-block';
            fetchCatByBreed(selectCat.value)
                .then(resp => {
                     catInfo.innerHTML = `<div class="img-box"><img src="${resp[0].url}" alt="cat" class="cat-img"></div>
                     <div>
                     <h2>${needBreed.name}</h2>
                     <p>${needBreed.description}</p>
                     <p><span class="accent-temp">Temperament:</span> ${needBreed.temperament}</p>
                     </div>`;
                    loader.style.display = 'none';
                    catInfo.classList.remove('hidden-part');
                })
                .catch(() => {
                    Notify.failure('Oops! Something went wrong! Try reloading the page!');
                            loader.style.display = 'none';});}    })
    .catch(() => {Notify.failure('Oops! Something went wrong! Try reloading the page!');
        loader.style.display = 'none';
    }
    );