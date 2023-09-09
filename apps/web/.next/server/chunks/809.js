"use strict";
exports.id = 809;
exports.ids = [809];
exports.modules = {

/***/ 3809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CJ: () => (/* binding */ dbConnect),
/* harmony export */   CP: () => (/* binding */ UploadVideo),
/* harmony export */   ML: () => (/* binding */ Editor),
/* harmony export */   g6: () => (/* binding */ Creator),
/* harmony export */   gw: () => (/* binding */ EditedVideo),
/* harmony export */   r2: () => (/* binding */ RawVideo),
/* harmony export */   vQ: () => (/* binding */ Leger)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

let alreadyConnected = false;
const { MONGODB_URI } = process.env;
const creatorSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    editedVideos: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "EditedVideo"
        }
    ],
    rawVideos: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "RawVideo"
        }
    ],
    editor: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "Editor"
        }
    ],
    refreshToken: {
        type: String,
        default: ""
    },
    accessToken: {
        type: String,
        default: ""
    },
    hasAllowed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const editorSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    rawVideos: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "RawVideo"
        }
    ],
    editedVideos: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "EditedVideo"
        }
    ]
}, {
    timestamps: true
});
const rawVideoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videoKey: {
        type: String,
        required: true
    },
    bucketName: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    deadLineDate: {
        type: String,
        required: true
    },
    creator: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "Creator"
    },
    editor: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "Editor"
    },
    isEdited: {
        type: Boolean,
        default: false
    },
    isUploaded: {
        type: Boolean,
        default: false
    },
    noteToEditor: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
}, {
    timestamps: true
});
const editedVideosSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videoKey: {
        type: String,
        required: true
    },
    bucketName: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    deadLineDate: {
        type: String,
        required: true
    },
    deadLineTime: {
        type: String,
        required: true
    },
    creator: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "Creator"
    },
    editor: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "Editor"
    },
    isUploaded: {
        type: Boolean,
        default: false
    },
    url: {
        type: String
    }
}, {
    timestamps: true
});
const legerSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    rawVideo: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "RawVideo",
        required: true
    },
    editors: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "Editor"
        }
    ],
    creator: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "Creator",
        required: true
    },
    editor: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "Editor"
    }
}, {
    timestamps: true
});
const uploadVideoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    privacy: {
        type: String,
        required: true
    },
    publishAt: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    videoKey: {
        type: String,
        required: true
    },
    bucketName: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    tags: {
        type: [
            String
        ]
    },
    uploadId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const getModel = (modelName, schema)=>{
    try {
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(modelName);
    } catch (error) {
        // Model does not exist, define and return it
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(modelName, schema);
    }
};
const Creator = getModel("Creator", creatorSchema);
const Editor = getModel("Editor", editorSchema);
const RawVideo = getModel("RawVideo", rawVideoSchema);
const EditedVideo = getModel("EditedVideo", editedVideosSchema);
const Leger = getModel("Leger", legerSchema);
const UploadVideo = getModel("UploadVideo", uploadVideoSchema);
const dbConnect = ()=>{
    if (alreadyConnected) {
        return;
    }
    alreadyConnected = true;
    if (!MONGODB_URI || MONGODB_URI.length == 0) {
        throw new Error("Please define the MONGODB_URI environment variable");
    }
    return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {
        dbName: "creator"
    });
};


/***/ })

};
;