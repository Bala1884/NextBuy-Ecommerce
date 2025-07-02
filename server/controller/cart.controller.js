import { where } from "sequelize";
import db from "../models/index.js";
const {User}=db;


//add products to user cart
export const addToCart=async(req,res)=>{
    try{
        const {userId,itemId,size}=req.body;
        const userData = await User.findByPk(userId);
        let cartData=await userData.cartData || {};
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={}
            cartData[itemId][size]=1    
        }
        
        await User.update(
            { cartData },
            { where: { id: userId } }
        );
        res.json({success:true,message:"Added to cart",cartData});

        }catch(error){  
        console.log(error);
        res.status(500).json({success:false,message:error.message});
    }
}

// Update user cart
export const updateCart=async(req,res)=>{
    try{
        const {userId,itemId,size,quantity}=req.body;
        const userData=await User.findByPk(userId);
        let cartData=await userData.cartData || {};

        if (!cartData[itemId]) cartData[itemId] = {};
        cartData[itemId][size]=quantity;
        await User.update(
            { cartData },
            { where: { id: userId } }
        );
        res.json({success:true,message:"Cart Updated",cartData});
    }catch(error){
         console.log(error);
        res.status(500).json({success:false,message:error.message});
    }
}

//Get user cart data
export const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ success: false, message: "userId is required" });
    }

    const userData = await User.findByPk(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};  // default to empty if null

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
