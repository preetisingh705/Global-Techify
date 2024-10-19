import express from 'express';

import { userSignup, userLogin } from '../controller/user-controller.js';
import { getCourses , getCoursesById} from '../controller/courses-controller.js';
// import { addPaymentGateway, paytmResponse } from '../controller/payment-controller.js';


const router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/courses', getCourses);
router.get('/courses/:id', getCoursesById);




export default router;