
import mongoose from 'mongoose';

let alreadyConnected = false;

const { MONGODB_URI } = process.env;

const creatorSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
});

const getModel = (modelName: any, schema: any) => {
    try {
        return mongoose.model(modelName);
    } catch (error) {
        // Model does not exist, define and return it
        return mongoose.model(modelName, schema);
    }
};

export const Creator = getModel('Creator', creatorSchema);


export const dbConnect = () => {
    if (alreadyConnected) {
        return;
    }
    alreadyConnected = true;
    if (!MONGODB_URI || MONGODB_URI.length == 0) {
        throw new Error('Please define the MONGODB_URI environment variable');
    }

    return mongoose.connect(MONGODB_URI, { dbName: 'creator' });
}