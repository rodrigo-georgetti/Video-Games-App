import {  BASE_URL, GET_VIDEOGAMES } from './helpers';
import axios from 'axios'

export const getVideogames = () => {

    const endpoint = `${BASE_URL}/videogames`;
    return async (dispatch) => {
        const videogames = (await axios.get(endpoint)).data
        return dispatch({ type: GET_VIDEOGAMES, payload: videogames });
    };
};