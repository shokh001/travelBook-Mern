const router = require("express").Router();

const {
    login,
    register
} = require("../controllers/userControllers");


//REGISTER
router.post("/register", register);

//LOGIN
router.post("/login", login);

module.exports = router;
