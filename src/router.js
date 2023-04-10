import bonjour from 'bonjour';

import Greeting from './Greeting.js';
import router from './index.js';

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

router.post('/greetings/bonjour', async (_, res) => {
    try {
        const greeting = await Greeting.create({ greeting: bonjour });
        res.status(200).send(greeting);
    } catch (err) {
        res.sendStatus(500);
    }
});
