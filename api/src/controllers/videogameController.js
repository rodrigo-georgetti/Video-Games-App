const {Videogame, Genres, Platforms} = require('../db')
const axios = require('axios')
const formatVideogames = require('../helpers/formatVideogamesHelpers')
const URL_VIDEOGAMES = "https://api.rawg.io/api/games"
const {API_KEY} = process.env

    const getAllVideogames = async () =>{
      const dataBaseVideogame = await Videogame.findAll({
        include:[{model : Genres,
          attributes:["name"],
          through: { attributes: []}},
          {model : Platforms,
            attributes:["name"],
            through: { attributes: []}}]
        ,attributes: {
          exclude: ["description"]
        }})

        
        const apiVideogameRaw = [];
        const totalPages = 4;
        const pageSize = 25;
        const apiRequests = [];
    
        for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
          apiRequests.push(axios.get(`${URL_VIDEOGAMES}?key=${API_KEY}&page=${pageNumber}&page_size=${pageSize}`));
        }
    
        try {
          const responses = await Promise.all(apiRequests);
          responses.forEach((response) => {
            const gamesOnPage = response.data.results;
            apiVideogameRaw.push(...gamesOnPage);
          });
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }

 const apiVideogame = formatVideogames(apiVideogameRaw)
return [...dataBaseVideogame, ...apiVideogame]
    }

 module.exports = {getAllVideogames}