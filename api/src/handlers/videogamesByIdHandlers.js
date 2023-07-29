const { getVideogamesById} = require("../controllers/videogameByIdController");
const getVideogamesByIdHandler = async (req, res) => {

    const {id} = req.params;
  const searchSource = isNaN(id) ? "db" : "api";
try {
  const videogame = await getVideogamesById(id, searchSource)
  res.status(200).json(videogame)
} catch (error) {
  res.status(400).json({error:error.message})
}
  }
  module.exports = {getVideogamesByIdHandler}