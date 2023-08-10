const {Platforms} = require('../db')
const axios = require("axios");
const { API_KEY } = process.env;
const {URL_VIDEOGAMES} = require('../helpers/urlHelpers')
const platformsAuxArray = []

const getAllPlatforms = async () => {
    
if (await Platforms.count()===0){
  
   const allGames = [];
  // const [response1, response2] = await Promise.all([
  //   
  // ]);

  for (let pageNumber = 1; pageNumber <= 10; pageNumber++) {
    try {
      const response = await axios.get(`${URL_VIDEOGAMES}?key=${API_KEY}&page=${pageNumber}&page_size=40`);
      const gamesOnPage = response.data.results;
      allGames.push(...gamesOnPage);
    } catch (error) {
      console.error(`Error fetching data from page ${pageNumber}:`, error.message);
    }
  }
  
  allGames.forEach((element) => {
element.platforms.forEach((object)=>{
  platformsAuxArray.push({name:object.platform.name})
})
  })
  
  const allPlatforms = [...new Set(platformsAuxArray.map(element => JSON.stringify(element)))].map(object => JSON.parse(object))
  await Platforms.bulkCreate(allPlatforms)
      return Platforms.findAll({model : Platforms,
        attributes:["name"]})

} else {
  const platformsQuery = await Platforms.findAll({model :Platforms,
    attributes:["name"]})
  return platformsQuery
}
};

module.exports = {getAllPlatforms}