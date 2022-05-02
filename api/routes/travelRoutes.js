const router = require("express").Router();

const {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook
} = require("../controllers/travelControllers");

router.get("/", getAllTravels);
router.get("/:id", getTravelById);
router.post("/add", addTravelBook);
router.put("/:id", updateTravelBook);
router.delete("/:id", removeTravelBook);

module.exports = router;
