import mongoose from 'mongoose';
import { MONGODB_URI } from '../config/';

mongoose.set('strictQuery', false);

(async () => {
  try {
    const db = await mongoose.connect(`${MONGODB_URI}`);
    console.log('DB connectect to:', db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
