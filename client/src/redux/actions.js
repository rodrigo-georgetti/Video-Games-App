import {  BASE_URL, GET_VIDEOGAMES, GET_VIDEOGAME_BY_ID, GET_GENRES, GET_PLATFORMS } from './helpers';
import axios from 'axios'

export const getVideogames = () => {

    const endpoint = `${BASE_URL}/videogames`;
    return async (dispatch) => {
        const videogames = (await axios.get(endpoint)).data
        return dispatch({ type: GET_VIDEOGAMES, payload: videogames });
    };
};

export const getVideogameById = (id) => {

    const endpoint = `${BASE_URL}/videogames/${id}`;
    return async (dispatch) => {
        const videogameById = (await axios.get(endpoint)).data
        return dispatch({ type: GET_VIDEOGAME_BY_ID, payload: videogameById });
    };
};
export const getGenres = () => {
        const endpoint = `${BASE_URL}/genres`
        return async (dispatch) => {
            const genres = (await axios.get(endpoint)).data
            return dispatch({ type: GET_GENRES, payload: genres })
        };
    };

    export const getPlatforms = () => {
        const endpoint = `${BASE_URL}/platforms`
        return async (dispatch) => {
            const platforms = (await axios.get(endpoint)).data
            return dispatch({ type: GET_PLATFORMS, payload: platforms })
        };
    };
