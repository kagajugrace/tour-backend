import mongoose from "mongoose";

const tourSchema= new mongoose.Schema({
    tourName:String,
    dateScheduled:String,
    dueDate:String,
    location:{
        type:String,
        enum:["Gisenyi","Musanze","Nyanza","Nyungwe","Kayonza"],
    },
    price:Number,
    seats:Number,
    images:[
        {
            type:String,
        }
    ]

}
);

const tour = mongoose.model('Tour',tourSchema);

export default tour;