import dotenv from 'dotenv';
import { service } from '../Service/index.js';

dotenv.config();

class Controller {
 async send(req, res) {
    try {
      const { mailOptions, transporter } = service.send(req.body);

      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.json(mailOptions);
    } catch (e) {
      res.status(500).json({ message: "Error in invocation of API: /feedback" });
    }
  }
}

const controller = new Controller();

export { controller };
