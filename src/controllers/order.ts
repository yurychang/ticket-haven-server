import { OrderStatus } from '@/enums/orderStatus';
import { NotFoundException } from '@/exceptions/NotFoundException';
import { OrderCannotModifyException } from '@/exceptions/OrderCannotModify';
import OrderModel from '@/models/order';
import orderService from '@/services/order';
import catchAsyncError from '@/utils/catchAsyncError';
import { Body } from '@/utils/response';

const orderController = {
  getOrderInfo: catchAsyncError(async (req, res) => {
    const order = await orderService.getOrderInfo(
      req.userId!,
      req.params.orderNo,
    );
    res.json(Body.success(order));
  }),
  addOrder: catchAsyncError(async (req, res) => {
    const orderInfo = await orderService.addOrder(req.userId!, req.body);
    res.json(Body.success(orderInfo));
  }),
  addSeats: catchAsyncError(async (req, res) => {
    const order = await OrderModel.findOne().byNo(req.params.orderNo);
    if (!order) throw new NotFoundException();
    if (order.status !== OrderStatus.UNPAID)
      throw new OrderCannotModifyException();

    const orderInfo = await orderService.addSeats({ order, ...req.body });
    res.json(Body.success(orderInfo));
  }),
};

export default orderController;
