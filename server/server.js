import app from './app.js';
import Razorpay from 'razorpay';

app.get('/', (req, res, next) => {
  res.send('Working...');
});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `server is running on http://localhost:${port}, in ${process.env.NODE_ENV} MODE`
  );
});
