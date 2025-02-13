import dotenv from 'dotenv';
dotenv.config();  // ✅ Ensures .env is loaded

import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';

// Debugging: Print MONGODB_URI to check if it's loaded
console.log('MONGODB_URI:', process.env.MONGODB_URI); // 🔍 Should print your MongoDB URI

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use('/api/user',userRouter)

app.get('/', (req, res) => {
    res.send('API working');
});

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
