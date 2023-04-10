import express from 'express';

import hello from './hello.ts';

const router = express.Router();

router.get('/hello', (_, res) => {
    res.send(hello);
});

export default router;
