import Router from 'express';
import { controller } from '../Controller/index.js';

const router = Router();

router.post('/feedback', controller.send);

export { router };
