import mongoose from 'mongoose';

mongoose.connection
  .once('open', () => console.info('Connected!'))
  .on('error', (error) => {
    console.error('Error : ', error);
  });

export const connectDb = () => {
  return mongoose.connect(process.env.MONGODB_URI, {
    // https://mongoosejs.com/docs/deprecations.html#
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};