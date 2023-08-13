import { GET_VIDEOGAMES, GET_VIDEOGAME_BY_ID, GET_GENRES, GET_PLATFORMS } from "./helpers"

const initialState = {
    allVideogames: [],
    videogame:{},
    genres: [],
    platforms:[]
}

const rootReducer = (state = initialState, {type, payload})=>{
switch(type){
case GET_VIDEOGAMES:
    return {...state, allVideogames:payload,}

    case GET_VIDEOGAME_BY_ID:
    return {...state, videogame:payload,}
case GET_GENRES:
    return {...state, genres:payload}
    case GET_PLATFORMS:
    return {...state, platforms:payload}

    default:
        return {...state}
}
}

export default rootReducer