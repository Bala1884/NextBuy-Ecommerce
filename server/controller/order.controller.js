import { where } from "sequelize";
import db from "../models/index.js";

const {Order,User}=db;
//Placing orders using COD Method
export const placeOrders=async(req,res)=>{
    try{
        const {userId, items, amount, address}=req.body;

        const orderData={
            userId,
            items,
            address,
            amount,
            paymentMethod:'COD',
            payment:false,
            date:Date.now()
        }
        const newOrder=new Order(orderData);
        await newOrder.save();

        await User.update(
            {cartData:{}},
            {where:{id:userId}}
        )
        res.json({success:true,message:"Order placed"})


    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
        
    }
}

//Placing orders using Stripe Method
export const placeOrdersStripe=async(req,res)=>{
    
}

//Placing orders using Razorpay Method
export const placeOrdersRazorpay=async(req,res)=>{
    
}

//All Orders data for Admin panel
export const allOrders=async(req,res)=>{
    try{
        const orders = await Order.findAll({});
        res.json({success:true,orders})
    }catch(error){
         console.log(error);
        res.json({success:false,message:error.message});
    }
}

//User Order data for Client
export const userOrders=async(req,res)=>{
    try{
        const {userId}=req.body;

        const orders = await Order.findAll({
            where: { userId: String(userId) },
            order: [['createdAt', 'DESC']], 
        });
        res.json({success:true,orders})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

//Update Order Status from Admin panel
export const updateStatus=async(req,res)=>{
    try{
        const {orderId,status}=req.body;
        await Order.update({status},{where:{id:orderId}});
        res.json({success:true,message:"Status Updated"})

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
    }
} 