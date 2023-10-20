// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = 'live_wGzZUVgEEhQ7o6tbb8g0mGcimVRwBSiqWtl9oI3YdeomRh2q6YRNThds6BXOieSr';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'x-api-key=live_wGzZUVgEEhQ7o6tbb8g0mGcimVRwBSiqWtl9oI3YdeomRh2q6YRNThds6BXOieSr';


function fetchBreeds() {
        return fetch(`${BASE_URL}/breeds?${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error();
            }
            return resp.json();
        })
   
};

function fetchCatByBreed(breedId){
    return fetch(`${BASE_URL}/images/search?${API_KEY}&breed_ids=${breedId}`)
    .then(resp => {
        if (!resp.ok) {
            throw new Error();
        }
        return resp.json();
    }
)
}
     

export { fetchBreeds,  fetchCatByBreed};