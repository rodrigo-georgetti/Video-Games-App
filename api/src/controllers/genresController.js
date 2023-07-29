const {Genres} = require('../db')
const axios = require("axios");
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/genres"
const genresAuxArray = []

const getAllGenres = async () => {
    
    const genresQuery = await Genres.findAll()
    if (genresQuery.length === 0) {
      const apiGenres = await axios(`${URL}?key=${API_KEY}`)
      apiGenres.data.results.forEach((element) => {
         return genresAuxArray.push({ name: element.name })})
      await Genres.bulkCreate(genresAuxArray)
      return Genres.findAll()
    } 
    return genresQuery

};

module.exports = {getAllGenres}