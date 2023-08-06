import { GET_VIDEOGAMES, GET_VIDEOGAME_BY_ID } from "./helpers"

const initialState = {
    allVideogames: [],
    videogame:{},
}

const rootReducer = (state = initialState, {type, payload})=>{
switch(type){
case GET_VIDEOGAMES:
    return {...state, allVideogames:payload,}

    case GET_VIDEOGAME_BY_ID:
    return {...state, videogame:payload,}

    default:
        return {...state}
}
}

export default rootReducer