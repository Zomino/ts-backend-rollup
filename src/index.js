import express from 'express';
import { globbySync } from 'globby';
import mongoose from 'mongoose';

// Include the Greeting in the bundle
import Greeting from './Greeting.js';

process.on('uncaughtException', (err) => console.error(err));
process.on('unhandledRejection', (err) => console.error(err));

try {
    await mongoose.connect('mongodb://localhost:27017/ts-backend-rollup');
    console.log('Connected to MongoDB');
} catch (err) {
    console.log('Failed to connect to MongoDB');
}

const server = express();
const router = express.Router();

server.use(express.json());
server.use('/', router);

server.listen(3000, () => console.log('Server listening on http://localhost:3000'));

setImmediate(async () => {
    const paths = globbySync('src/router.js');
    const routerFilePath = paths[0];

    await import(`../${routerFilePath}`);
    console.log('Loaded routes');
});

export default router;