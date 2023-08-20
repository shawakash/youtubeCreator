
import mongoose from 'mongoose';

let alreadyConnected = false;

const { MONGODB_URI } = process.env;

const creatorSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
    editor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Editor' }],
    refreshToken: { type: String },
    accessToken: { type: String }
}, { timestamps: true });

const editorSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
}, { timestamps: true });

// const videoSchema = new mongoose.Schema({

// })

const getModel = (modelName: any, schema: any) => {
    try {
        return mongoose.model(modelName);
    } catch (error) {
        // Model does not exist, define and return it
        return mongoose.model(modelName, schema);
    }
};

export const Creator = getModel('Creator', creatorSchema);
export const Editor = getModel('Editor', editorSchema);


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