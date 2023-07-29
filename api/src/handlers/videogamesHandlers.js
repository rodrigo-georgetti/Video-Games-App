const { searchVideogamesByName, getAllVideogames} = require("../controllers/videogameController");  
  const getVideogamesHandler = async (req, res) => {
    const {name} = req.query
try {
  const typeSearch = name ? await searchVideogamesByName(name) : await getAllVideogames ()
  res.status(200).json(typeSearch)
} catch (error) {
  res.status(400).json({error:error.message})
}
  }
  module.exports = {getVideogamesHandler}