import axios from "axios";



export const getCatDetails = (queryParams) => {
    return axios.get(`https://api.thecatapi.com/v1/breeds?${queryParams}`);
}