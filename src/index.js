import express from 'express';

import router from './router.js';

const server = express();

server.use('/', router);

server.listen(3000, () => console.log('Server up: http://localhost:3000'));