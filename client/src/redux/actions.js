import axios from "axios";
import { BASE_URL, GET_VIDEOGAMES , GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAME_BY_ID, GET_GENRES} from "./helpers";


export const getVideogames = () => {

    const endpoint = `${BASE_URL}/videogames`;
    return async (dispatch) => {
try {
    const videogames = (await axios.get(endpoint)).data
        return dispatch({ type: GET_VIDEOGAMES, payload: videogames });
} catch (error) {
    console.log(error.message)
}
    };
};

export const getVideogameById = (id) => {
    const endpoint = `${BASE_URL}/videogames/${id}`
    return async function (dispatch){
        try {
             const videogame = (await axios.get(endpoint)).data
             return dispatch({ type: GET_VIDEOGAME_BY_ID, payload: videogame });
            }
         catch (error) {
            alert(`${error.response.data.error}`)
        }
     }
}

export const getVideogamesByName = (name) => {
    const endpoint = `${BASE_URL}/videogames/?name=${name}`;
    return async function (dispatch){
        try {
             const videogamesByName = (await axios.get(endpoint)).data
             return dispatch({ type: GET_VIDEOGAMES_BY_NAME, payload: videogamesByName });
            }
         catch (error) {
            alert(`${error.response.data.error}`)
        }
     }
};

export const getGenres = () => {
    const endpoint = `${BASE_URL}/genres`
    return async (dispatch) => {
        const genres = (await axios.get(endpoint)).data
        return dispatch({ type: GET_GENRES, payload: genres })
    };
};

// export const clean_detail = () => {
//     return ({ type: "CLEAN_DETAIL", payload: {} })
// };






// export const filter_origin = (origin) => {
//     return (dispatch) => {
//         return dispatch({ type: "FILTER_ORIGIN", payload: origin })
//     }
// };

// export const filter_genre=(genre)=>{
//     return (dispatch)=>{
//         return dispatch({type: "FILTER_GENRE" ,payload: genre})
//     }
// };

// export const order_videogames = (order) => {
//     return (dispatch) => {
//         return dispatch({ type: "ORDER_VIDEOGAMES", payload: order })
//     }
// }