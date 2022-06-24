import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger/openapi.json' assert { type: 'json' };
import { controller } from '../Controller/index.js';

const router = express.Router();

router.post('/feedback', controller.send);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument.default));

export { router };
