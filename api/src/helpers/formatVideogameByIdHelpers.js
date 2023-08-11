const formatVideogameId = (object) =>{
    const apiVideogame = {
        id: object.id,
        name: object.name,
        description: object.description,
	background_image: object.background_image,
	released: object.released,
	rating: object.rating,
	created: false,
genres: object.genres.map((element) => ({ name: element.name })),
platforms: object.platforms.map((element) => ({ name: element.platform.name }))
      };
      return apiVideogame
}


 module.exports = formatVideogameId