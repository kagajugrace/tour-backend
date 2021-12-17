import {ENOTEMPTY} from "constants";
import {check, validationResult} from "express-validator";

class Validator{
    static validateInput=(req,res,next)=>{

        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage=errors.errors.map((err)=>err.msg);
            return res.status(400).json({message:errorMessage});
        }
        return next();
    };
    static newAccountRules=()=>{
        return[
            check("email","email is invalid").isEmail(),
            check("password","password is not strong").isStrongPassword(),
            check("lastName","last name should be valid"),
            check("gender","gender should be valid among male, female, other, not say")
            .trim()
            .isIn(["male","female","other","not say"]),
        ];
    }

    static validateInput=(req,res,next)=>{
        const errors=validationResult(req);
         if(!errors.isEmpty()){
            const errorMessage=errors.errors.map((err)=>err.msg);
            return res.status(400).json({message:errorMessage});
        }
        return next();
        };
    static createTourRules=()=>{
        return[
            check("tourName","tourname is invalid").trim().isAlpha(),
            check("location","location is invalid").trim().isAlpha(),
            check("dueDate","date is not valid").trim().isDate(),
            check("dateScheduled","date is not valid").trim().isDate(),
            check("price","price is invalid").trim().isAlphanumeric(),
        ];

    }
    }

    export default Validator;
