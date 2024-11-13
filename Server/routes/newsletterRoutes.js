const express = require("express");
const router = express.router();
const {getNewsletter, createNewsletter} = reqiure("../controllers/newsletterController");
const {jwtAuthMiddleware} = reqiure("../middleware/jwtAuthMiddleware")

router.get("/",getNewsletter);

router.post("/",jwtAuthMiddleware,createNewsletter);