import mongoose from 'mongoose';
import createServer from './utils/server';
require('dotenv').config();

const app = createServer();

app.listen(process.env.PORT, () => {
    console.log(`Server running on Port ${process.env.PORT}`);
})
 
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('error', (error, Error) => console.log(error));

