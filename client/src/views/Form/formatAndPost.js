import axios from "axios";
//hago unos ajustes en el formato que voy a enviar la informacion y realizo mi metodo POST

export const formatAndPost = async ({ name, description, background_image, released, rating, platforms}, selectedGenre) => { 
    try {
        const newVideogame = {
            name: name,
            description: description,
            background_image: background_image,
            released: released,
            rating: rating,
            platforms: platforms,
            genres: selectedGenre
        }
        const endpoint = `http://localhost:3001/videogames`;
        const response = await axios.post(endpoint, newVideogame)
        alert(response.data)
    } catch (error) {
        alert(error.response.data.error)
    }
};