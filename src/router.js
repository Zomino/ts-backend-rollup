import express from 'express';

import Greeting from './Greeting.ts';

const router = express.Router();

router.get('/greetings', async (_, res) => {
    try {
        const greetings = await Greeting.find();
        res.status(200).send(greetings);
    } catch (err) {
        res.sendStatus(500);
    }
});

router.post('/greetings', async (req, res) => {
    const { body } = req;

    try {
        const greeting = await Greeting.create(body);
        res.status(200).send(greeting);
    } catch (err) {
        res.sendStatus(500);
    }
});

export default router;
