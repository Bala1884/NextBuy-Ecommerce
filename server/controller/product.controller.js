import {v2 as cloudinary} from 'cloudinary';
import db from '../models/index.js';
import { log } from 'console';

const {Product}=db;
//Adding products
export const addProduct=async(req,res,next)=>{
    try{
        const {name, description, price, category, subcategory, sizes, bestseller}=req.body;
        const image1=req.files.image1 && req.files.image1[0];
        const image2=req.files.image2 && req.files.image2[0];
        const image3=req.files.image3 && req.files.image3[0];
        const image4=req.files.image4 && req.files.image4[0];

        const images=[image1,image2,image3,image4].filter((item)=>item!==undefined)

        let imagesUrl=await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )
        const productData={
            name,
            description,
            category,
            price:Number(price),
            subcategory,
            bestseller:bestseller==="true"?true:false,
            sizes:JSON.parse(sizes),
            image:imagesUrl,
            date:Date.now()
        }
        const product=await Product.create(productData);

        console.log(productData);
        
        res.json({success:true,message:'Product Added'})
    }catch(e){
        res.json({success:false,message:e.message})
    }
}

//Listing Products
export const listProduct=async(req,res,next)=>{
    try{
        const products= await Product.findAll({});
        res.json({success:true,products})
    }catch(e){
        console.log(e);
        res.json({success:false, message:e.message})
        
    }
}

//Remove Products
export const removeProduct=async(req,res,next)=>{
    try{
        const {id}=req.body;

        const deleted=await Product.destroy({where:{id}});
        if(deleted===0){
            return res.status(400).json({success:false,message:"Product not found"});
        }
        res.json({success:true, message:"Product deleted successfully"})
    }catch(e){
        console.log(e);
        res.status(500).json({success:false,message:e.message});
        
    }
}

//Get Single Product Info
export const singleProduct=async(req,res,next)=>{
    try{
        const {productId}=req.body;
        const product=await Product.findByPk(productId);
        if(!product){
           return res.status(404).json({success:false, message:"Product not found"});
        }
        res.status(200).json({success:true, message:product});
    }catch(e){
        console.log(e);
        res.status(500).json({success:false,message:e.message});
    }
}