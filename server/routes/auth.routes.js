import {Router} from 'express';
import { adminLogin, login, signOut, signUp } from '../controller/auth.controller.js';

const authRouter=Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/login', login);
authRouter.post('/sign-out', signOut);
authRouter.post('/admin',adminLogin);
export default authRouter;
