import jwt from 'jsonwebtoken';

export const adminAuth=async(req,res,next)=>{
    try{
        const { token } =req.headers;
        if(!token){
            return res.status(404).json({success:false,message:"Not Authorised! Login again"});
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        if(token_decode.role!=='admin'){
            return res.status(404).json({success:false,message:"Not Authorised! Login again"});
        } 
        next();
    }catch(e){
        console.log(e);
        res.json({success:false,message:e.message});
        
    }
}