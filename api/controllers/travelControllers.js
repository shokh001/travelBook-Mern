const TravelModel = require("../models/Travel.model");

//Method : GET
// get All travel book
const getAllTravels = async (req, res) => {
  try {
    const travels = await TravelModel.find();

    res.status(200).json({
      message: "success",
      travels: travels.reverse()
    });
  } catch (error) {
    res.send(error);
  }
};

//Method : GET
// get one travel book
const getTravelById = async (req, res) => {
  try {
    const travel = await TravelModel.findById(req.params.id);

    if (!travel) {
      return res.status(404).json({
        message: "Not found",
      })
    }

    return res.status(200).json({
      message: "success",
      travel,
    });
  } catch (error) {
    res.send(error);
  }
};

//Method : POST
// add travel book
const addTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;

    const newTravel = await TravelModel.create({
      title,
      image,
      descr,
    });

    res.status(201).json({
      message: "success",
      newTravel,
    });
  } catch (error) {
    res.send(error);
  }
};

//Method : PUT
// edit travel book by its ID
const updateTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;

    const updatedTravel = await TravelModel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr
    });

    res.status(200).json({
      message: "success",
      updatedTravel,
    });
  } catch (error) {
    res.send(error);
  }
};

//Method : DELETE
// REMOVING travel book by its ID
const removeTravelBook = async (req, res) => {
  try {
    await TravelModel.findByIdAndRemove(req.params.id)

    res.status(200).json({
      message: "success"
    });
  } catch (error) {
    res.send(error);
  }
};




module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook
};
