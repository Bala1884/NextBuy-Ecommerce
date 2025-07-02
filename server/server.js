import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import db from './models/index.js';
import connectCloudinary from './config/cloudinary.js';
import authRouter from './routes/auth.routes.js';
import productRouter from './routes/product.routes.js';
import cartRouter from './routes/cart.routes.js';
import orderRouter from './routes/order.route.js';

const {sequelize}=db;

//App Config
const app=express();
const port=process.env.PORT || 4000;
connectCloudinary();

//Middlewares
app.use(express.json());
app.use(cors());
//API Endpoints

app.use('/api/auth',authRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

app.get('/',(req,res)=>{
    res.status(200).json({
        status:'success',
        message:'API is working'
    })
})




app.listen(port, '0.0.0.0',async()=>{
    try {
    await sequelize.authenticate();
    console.log('✅ Connected to database');
    await db.sequelize.sync({ alter: true });
    console.log('🚀 Server running at http://localhost: '+port);
  } catch (err) {
    console.error('❌ Failed to connect to DB:', err.message);
  }
})