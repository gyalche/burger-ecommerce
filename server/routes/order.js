import express from 'express';
import {
  getAdminOrders,
  getMyOrders,
  getOrderDetails,
  getProcessOrder,
  placeOrder,
  placeOrderOnline,
} from '../controllers/order.js';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';

const router = new express.Router();

router.post('/createorder', isAuthenticated, placeOrder);

router.post('/createorderonline', placeOrderOnline);

router.get('/myorders', isAuthenticated, getMyOrders);

router.get('/order/:id', isAuthenticated, getOrderDetails);

//Add admin middleware;
router.get('/admin/orders', isAuthenticated, authorizeAdmin, getAdminOrders);
router.get(
  '/admin/order/:id',
  isAuthenticated,
  authorizeAdmin,
  getProcessOrder
);

export default router;
