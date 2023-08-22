
import mongoose from 'mongoose';

let alreadyConnected = false;

const { MONGODB_URI } = process.env;

const creatorSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    editedVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
    rawVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RawVideo' }],
    editor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Editor' }],
    refreshToken: { type: String, default: '' },
    accessToken: { type: String, default: '' },
    hasAllowed: { type: Boolean, default: false }
}, { timestamps: true });

const editorSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    rawVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RawVideo' }],
    editedVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
}, { timestamps: true });

const rawVideoSchema = new mongoose.Schema({
    thumbnail: {type: String, required: true, },
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true}, // Html kind page
    videoKey: { type: String, required: true },
    bucketName: { type: String, required: true },
    contentType: {type: String, required: true},
    deadLineDate: {type: String, required: true},
    deadLineTime: {type: String, required: true},
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'Creator' },
    editor: { type: mongoose.Schema.Types.ObjectId, ref: 'Editor' },
    isEdited: { type: Boolean, default: false },
    isUploaded: { type: Boolean, default: false }
}, { timestamps: true })

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
export const RawVideo = getModel('RawVideo', rawVideoSchema);


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