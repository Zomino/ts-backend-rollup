import mongoose from 'mongoose';

const greetingSchema = new mongoose.Schema({
    greeting: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Greeting', greetingSchema);
