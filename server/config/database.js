import mongoose from 'mongoose';

export const currentDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb is connected to ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
