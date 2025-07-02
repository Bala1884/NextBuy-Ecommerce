import express from 'express';
import { placeOrders,placeOrdersRazorpay,placeOrdersStripe,allOrders,userOrders,updateStatus } from '../controller/order.controller.js';
import { adminAuth } from '../middleware/adminAuth.js'; 
import { authUser } from '../middleware/auth.js';

const orderRouter=express.Router();

//Admin Features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//Payment Features
orderRouter.post('/place',authUser,placeOrders);
orderRouter.post('/stripe',authUser, placeOrdersStripe);
orderRouter.post('/razorpay',authUser,placeOrdersRazorpay);

//User Features
orderRouter.post('/user-orders',authUser,userOrders);

export default orderRouter;
