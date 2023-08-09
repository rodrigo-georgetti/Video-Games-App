const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require('./videogamesRouter')
const genresRouter = require('./genresRouter')
const platformsRouter = require('./platformsRouter')
const {VIDEOGAMES, GENRES, PLATFORMS} = require('../helpers/routesHelpers')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(VIDEOGAMES, videogamesRouter);
router.use(GENRES, genresRouter)
router.use(PLATFORMS, platformsRouter)

module.exports = router;
