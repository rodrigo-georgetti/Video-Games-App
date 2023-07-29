const {Platforms} = require('../db')
const axios = require("axios");
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/platforms"
const platformsAuxArray = []

const getAllPlatforms = async () => {
    
    const platformsQuery = await Platforms.findAll()
    if (platformsQuery.length === 0) {
      const apiPlatforms = await axios(`${URL}?key=${API_KEY}`)
      apiPlatforms.data.results.forEach((element) => {
         return platformsAuxArray.push({ name: element.name })})
      await Platforms.bulkCreate(platformsAuxArray)
      return Platforms.findAll()
    } 
    return platformsQuery

};

module.exports = {getAllPlatforms}