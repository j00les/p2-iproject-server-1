const midtransClient = require('midtrans-client');

// prepare Snap API parameter ( refer to: https://snap-docs.midtrans.com ) minimum parameter example:
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER,
  clientKey: process.env.MIDTRANS_CLIENT,
});

class MidtransController {
  static async pay(req, res, next) {
    try {
      let parameter = {
        transaction_details: {
          order_id: 'tes4-transactios-858',
          gross_amount: 500000,
        },
        credit_card: {
          secure: true,
        },
      };

      // create transaction
      const response = await snap.createTransaction(parameter);

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MidtransController;
