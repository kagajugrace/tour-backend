import TourInfos from "../models/tour";

class TourController{

    //Create user in db

    static async createTour(req,res){
        const tour= await TourInfos.create(req.body);
        console.log(tour);

        if (!tour){
            return res.status(404).json({error:"Tour not registered"})
        }

        return res.status(200).json({message:"Tour created successfully", data: tour});
    }

    //get all users

    static async getAllTours(req,res){
        const tours= await TourInfos.find();

        if (!tours){
            return res.status(404).json({error:"Tours not retrieved"})
        }

        return res.status(200).json({message:"Get tours successfully", data: tours});
    }


    //Delete one specified tour

    static async getOneTour(req,res){
        const tour= await TourInfos.findById(req.params.id);

        if (!tour){
            return res.status(404).json({error:"Tour not found"})
        }

        return res.status(200).json({message:"Get tour successfully", data: tour});
    }


    static async deleteOneTour(req,res){
        const tour= await TourInfos.findByIdAndDelete(req.params.id);

        if (!tour){
            return res.status(404).json({error:"Tour not deleted"})
        }

        return res.status(200).json({message:"Tour deleted successfully", data: tour});
    }





}

export default TourController;
