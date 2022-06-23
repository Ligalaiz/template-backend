import dotenv from 'dotenv';
import { service } from '../Service/index.js';

dotenv.config();

class Controller {
  send(req, res) {
    try {
      const { mailOptions, transporter } = service.send(req.body);

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.json(form);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

const controller = new Controller();

export { controller };
