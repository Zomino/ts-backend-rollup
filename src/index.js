import express from 'express';
import mongoose from 'mongoose';

import router from './router.js';

try {
    await mongoose.connect('mongodb://localhost:27017/ts-backend-rollup');
    console.log('Connected to MongoDB');
} catch (err) {
    console.log('Failed to connect to MongoDB');
}

const server = express();

server.use(express.json());
server.use('/', router);

server.listen(3000, () => console.log('Server listening on http://localhost:3000'));