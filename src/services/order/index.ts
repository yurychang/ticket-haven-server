import addOrder from './addOrder';
import addSeats from './addSeats';
import cancelOrder from './cancelOrder';
import createOrderNo from './createOrderNo';
import deleteSeat from './deleteSeat';
import getOrderInfo from './getOrderInfo';
import payment from './payment';
import paymentNotify from './paymentNotify';

const orderService = {
  getOrderInfo,
  addOrder,
  createOrderNo,
  addSeats,
  deleteSeat,
  payment,
  paymentNotify,
  cancelOrder,
};

export default orderService;
