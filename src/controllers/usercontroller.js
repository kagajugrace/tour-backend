import UserInfos from "../models/user";
import bcrypt from "bcrypt"
import TokenAuth from "../helpers/tokenauth"

class UserController{

    //Create user in db

    static async createUser(req,res){
        req.body.password= bcrypt.hashSync(req.body.password,10);
        const user= await UserInfos.create(req.body);

        if (!user){
            return res.status(404).json({error:"User not registered"})
        }

        return res.status(200).json({message:"User created successfully", data: user});
    }

    //get all users

    static async getAllUsers(req,res){
        const users= await UserInfos.find();

        if (!users){
            return res.status(404).json({error:"Users not retrieved"})
        }

        return res.status(200).json({message:"Get users successfully", data: users});
    }

// delete one specified user
     static async getOneUser(req,res){
        const user= await UserInfos.findById(req.params.id);

        if (!user){
            return res.status(404).json({error:"User not found"})
        }

        return res.status(200).json({message:"Get User successfully", data: user});
    }


    static async deleteOneUser(req,res){
        const user= await UserInfos.findByIdAndDelete(req.params.id);

        if (!user){
            return res.status(404).json({error:"User not deleted"})
        }

        return res.status(200).json({message:"User deleted successfully", data: user});
    }


    static async userLogin(req,res){
        const user= await UserInfos.findOne({email: req.body.email});
        if(!user){
            return res.status(404).json({error:"User not found kindly register first"});
        }
        if (bcrypt.compareSync(req.body.password, user.password)){
            user.password=null;
            // console.log(user)
            const token = TokenAuth.tokenGenerator({user:user});

            return res.status(200).json({message:"Successfully logged in", token: token});
        }

        return res.status(400).json({error:"Password is wrong"})
    }


}

export default UserController;
