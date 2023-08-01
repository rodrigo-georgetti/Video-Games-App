import axios from 'axios'

export const GET_VIDEOGAMES = "GET_VIDEOGAMES"

export const getVideogames = () =>{
    return async function (dispatch){
        const apiData = await axios.get('https://jsonplaceholder.typicode.com/users')
    
const videogames = apiData.data
dispatch({type:GET_VIDEOGAMES, payload:videogames})
    }
}

export const getVideogamesById = (id) =>{
    return async function (dispatch){
        const apiData = await axios.get(`https://jsonplaceholder.typicode.com/users${id}`)
    
const videogame = apiData.data
dispatch({type:"GET_VIDEOGAME", payload:videogame})
    }
}