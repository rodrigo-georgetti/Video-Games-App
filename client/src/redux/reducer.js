import { GET_VIDEOGAMES } from "./helpers"

const initialState = {
    allVideogames: [],
}

const rootReducer = (state = initialState, {type, payload})=>{
switch(type){
case GET_VIDEOGAMES:
    return {...state, allVideogames:payload,}

    default:
        return {...state}
}
}

export default rootReducer