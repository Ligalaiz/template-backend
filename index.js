import express from 'express';
import cors from 'cors';
import { router } from './Router/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
