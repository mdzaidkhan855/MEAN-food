import { sample_users } from '../data';
import {Router} from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import bcrypt from 'bcryptjs';

const router = Router();

// the below api for seeding data into db
router.get('/seed',asyncHandler(
    async (req,res)=>{
        const userCount = await UserModel.countDocuments();
        if(userCount >0){
            res.send("Seed for User is already done");
            return;
        }        
        await UserModel.create(sample_users);
        res.send("Seed for User is done");
    }    
)
)

router.post('/login', asyncHandler(
    async(req,res)=>{
        const{email,password} = req.body;
        const user = await UserModel.findOne({email})
        
        if(user && (await bcrypt.compare(password,user.password))){
            console.log("user is there:",user);
            
            res.send(generateTokenResponse(user));
        }else{
            
            res.status(HTTP_BAD_REQUEST).send("User name or password not valid")
        }
    }
))

router.post('/register', asyncHandler(
    async(req,res)=>{
        const{name, email,password, address} = req.body;
        const user = await UserModel.findOne({email})
        
        if(user){
            res.status(HTTP_BAD_REQUEST).send('User already exists');
            return;
        }

        const encryptedPassword = await bcrypt.hash(password,10);

        const newUser:User = {
            id:'',
            name:name,
            email:email.toLowerCase(),
            password:encryptedPassword,
            address,
            isAdmin:false
        }

        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
    }
))

// router.post('/login', (req,res)=>{
//     const{email,password} = req.body;
//     const user = sample_users.find(user=>user.email === email
//                             && user.password === password
//     )
//     if(user){
//         res.send(generateTokenResponse(user));
//     }else{
//         res.status(400).send("User name or password not valid")
//     }
// })

const generateTokenResponse = (user : User)=>{
    const token = jwt.sign({
        id: user.id,email:user.email, isAdmin:user.isAdmin
    },process.env.JWT_SECRET!, {expiresIn:"30d"})
    // user.token = token;
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
      };
    
}

export default router;