const {Videogame, Genres, Platforms} = require('../db')
const URL = "https://api.rawg.io/api/games/"
const axios = require('axios')
const cleanVideogameId = require('../utils/cleanIdUtils')
const {API_KEY} = process.env

const getVideogamesById= async (id, searchSource)=>{
  if (searchSource === "db"){
    const dbVideogame = await Videogame.findByPk(id, {
      include:[{model : Genres,
      attributes:["name"],
      through: { attributes: []}},
      {model : Platforms,
        attributes:["name"],
        through: { attributes: []}}]
      })
      return dbVideogame
  }  else {
    const apiVideogameRaw = (await axios.get(`${URL}${id}?key=${API_KEY}`)).data;
    const apiVideogame = cleanVideogameId(apiVideogameRaw)
  
    return apiVideogame
  }
  
  
  
    }
    module.exports = {getVideogamesById}