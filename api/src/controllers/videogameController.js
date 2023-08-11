const {Videogame, Genres, Platforms} = require('../db')
const axios = require('axios')
const URL = "https://api.rawg.io/api/games"
const {API_KEY} = process.env
const cleanVideogames = require('../helpers/formatVideogameByIdHelpersaaaaaaaaaaaa')
const {Op} = require('sequelize')

    const searchVideogamesByName = async (name) =>{
      name.toLowerCase()
      const dataBaseVideogame = await Videogame.findAll({where: {name: {[Op.iLike]:name}},
        include:[{model : Genres,
          attributes:["name"],
          through: { attributes: []}},
          {model : Platforms,
            attributes:["name"],
            through: { attributes: []}}]
      }  )

    const apiVideogameRaw = (await axios.get(`${URL}?search=${name}&key=${API_KEY}&page_size=15`)).data.results;
 const apiVideogame = cleanVideogames(apiVideogameRaw)
return [...dataBaseVideogame, ...apiVideogame]

    }

    const getAllVideogames = async () =>{
      const dataBaseVideogameRaw = await Videogame.findAll({
        include:[{model : Genres,
          attributes:["name"],
          through: { attributes: []}},
          {model : Platforms,
            attributes:["name"],
            through: { attributes: []}}]
        ,attributes: {
          exclude: ["description"]
        }})
 const apiVideogameRaw = (await axios.get(`${URL}?key=${API_KEY}`)).data.results;
 const apiVideogame = cleanVideogames(apiVideogameRaw)
return [...dataBaseVideogameRaw, ...apiVideogame]
    }


 module.exports = {searchVideogamesByName, getAllVideogames}