import { asyncError } from '../middlewares/errorMiddleware.js';
import { Order } from '../models/Order.js';

export const placeOrder = asyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;

  const user = req.user._id;

  const orderOptions = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  };
  await Order.create(orderOptions);

  res.status(201).json({
    success: true,
    message: 'Order placed sucessfully via Cash on delivery',
  });
});

export const getMyOrders = asyncError(async (req, res, next) => {
  const order = await Order.find({ user: req.user._id }).populate(
    'user',
    'name'
  );
  res.status(200).json({ sucess: true, order });
});

export const getOrderDetails = asyncError(async (req, res, next) => {
  const order = await (
    await Order.findById(req.params.id)
  ).populated('user', 'name');

  if (!order) return next(new ErrorHandler('Invalid Order Id', 404));
  res.status(200).json({ success: true, order });
});
export const getAdminOrders = asyncError(async (req, res, next) => {
  const order = await Order.find({}).populate('user', 'name');
  res.status(200).json({ success: true, order });
});

export const getProcessOrder = asyncError(async (req, res, next) => {
  const order = await await Order.findById(req.params.id);
  if (!order) return next(new ErrorHandler('unable to find', 404));

  if (order.orderStatus === 'Preparing') order.orderStatus = 'Shipped';
  else if (order.orderStatus === 'Shipped') {
    order.orderStatus = 'Delivered';
    order.deliveredAt = new Date(Date.now());
  } else if (order.orderStatus === 'Delivered')
    return next(new ErrorHandler('Food already delivered', 400));
  await order.save();

  res.status(200).json({ success: true, message: 'status update sucessfully' });
});

export const placeOrderOnline = asyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;

  const user = req.user._id;

  const orderOptions = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  };
  await Order.create(orderOptions);

  res.status(201).json({
    success: true,
    message: 'Order placed sucessfully via Cash on delivery',
  });
});
