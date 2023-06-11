import { Router } from 'express';
import { isAuth } from '@/middleware/auth';
import ticketController from '@/controllers/ticket';

const ticketRouter = Router();

ticketRouter.get('/', isAuth, ticketController.getTickets);
ticketRouter.post('/:ticketNo/qrcode', ticketController.createTicketCode);
ticketRouter.post(
  '/:ticketNo/shared-code',
  isAuth,
  ticketController.generateSharedCode,
);

export default ticketRouter;
