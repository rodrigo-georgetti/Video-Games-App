const {Videogame, Genres, Platforms} = require('../db');
const { getAllGenres } = require('./genresController');
const { getAllPlatforms } = require('./platformsController');

const createVideogame = async (name, description, background_image, released, rating, genres, platforms ) =>{ 
 const newVideogame = await Videogame.create({name, description, background_image, released, rating});

await getAllGenres()
const allGenres = await Genres.findAll({
    where : {name:genres}
})
await newVideogame.setGenres(allGenres)
await getAllPlatforms()
const allPlatforms = await Platforms.findAll({
    where : {name:platforms}
})
await newVideogame.setPlatforms(allPlatforms)
await newVideogame.reload({
    include: [{
        model: Platforms,
        attributes: ['name'],
        through: { attributes: [] }
    },{
                 model: Genres,
                 attributes: ['name'],
                 through: { attributes: [] }
             }
]
});

return newVideogame

}
 module.exports = {createVideogame}

 //ver imagen random o seleccion de imagen
