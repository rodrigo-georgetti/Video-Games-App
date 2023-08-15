const { Router } = require("express");

const { getPlatformsHandler } = require("../handlers/platformsHandlers");
const platformsRouter = Router();

platformsRouter.get("/", getPlatformsHandler);

module.exports = platformsRouter;
