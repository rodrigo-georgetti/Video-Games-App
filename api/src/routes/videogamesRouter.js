const { Router } = require('express');

const {getVideogamesHandler} = require('../handlers/videogamesHandlers');
const {getVideogamesByIdHandler} = require('../handlers/videogamesByIdHandlers')
const {createVideogamesHandler} = require('../handlers/createVideogamesHandlers')
const validatePostVideogame = require('../middlewares/validatePostVideogame');
const videogamesRouter = Router()


videogamesRouter.get("/:id", getVideogamesByIdHandler)
videogamesRouter.get("/", getVideogamesHandler)
videogamesRouter.post("/", validatePostVideogame,createVideogamesHandler)

  module.exports = videogamesRouter