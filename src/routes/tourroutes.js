import express from "express";
import VerifyToken from "../middlewares/verifytoken";
// import VerifyAccess from "../middlewares/verifyaccesss"
import TourController from "../controllers/tourcontroller";
import Validator from "../middlewares/validator";

const tourRouter= express.Router();
tourRouter.post("/createTour",VerifyToken, 
Validator.createTourRules(),
Validator.validateInput,
TourController.createTour);
tourRouter.get("/all", TourController.getAllTours);
tourRouter.get("/:id", TourController.getOneTour);
tourRouter.delete("/:id", TourController.deleteOneTour);




export default tourRouter;