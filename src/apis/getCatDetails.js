import axios from "axios";

export const getCatDetails = (queryParams) => {
    return axios.get(`https://api.thecatapi.com/v1/breeds?${queryParams}`);
}

export const getAllBreeds = () => {
    return axios.get('https://api.thecatapi.com/v1/breeds');
}

export const getBreedById = (id) => {
    return axios.get(`https://api.thecatapi.com/v1/breeds/${id}`);

}

export const getImageById = (id) => {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=8`)
}