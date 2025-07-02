
import validator from 'validator'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models/index.js';
const {User}=db;

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'7d'})
}

export const signUp=async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        const exists=await User.findOne({ where: {email}});
        if(exists){
            return res.status(409).json({success:false,message:'User already exists'})
        }
        //validating email and strong password
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false,message:'Invalid Email.'})
        }
        if(password.length<8){
            return res.status(400).json({success:false,message:'Please Enter a strong password'})
        }
        //Hashing password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const user=await User.create({
            name,
            email,
            password:hashedPassword
        });

        const token = createToken(user.id);

        res.status(201).json({success:true,token})
    }catch(e){
        console.log(e);
        res.status(500).json({success:false,message:e.message});  
    }
}

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await User.findOne({where:{email}});
        if(!user){
            return res.status(401).json({success:false,message:'User does not exist'});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(isMatch){
            const token=createToken(user.id);
            res.status(200).json({success:true,token})
        }
        else{
            res.json({success:false,message:'Invalid credentials'})
        }

    }catch(e){
        console.log(e);
        res.status(500).json({success:false,message:e.message});
    }
}

export const adminLogin=(req,res)=>{
    try{
        const {email,password}=req.body;
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign({role:'admin'},process.env.JWT_SECRET,{expiresIn:'7d'});
            res.status(200).json({success:true,token});
        }
        else{
            res.status(403).json({success:false,message:"Invalid Credentials"});
        }
    }catch(e){
        console.log(e);
        res.status(500).json({success:false,message:e.message});
    }
}

export const signOut=(req,res,next)=>{
    res.json({
        status:'success',
        message:'Sign Out working',
    })
}