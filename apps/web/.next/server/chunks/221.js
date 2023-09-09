"use strict";
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 3221:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EZ: () => (/* binding */ rawVideo),
/* harmony export */   Er: () => (/* binding */ LoginValid),
/* harmony export */   HT: () => (/* binding */ creatorInputValid),
/* harmony export */   Jp: () => (/* binding */ uploadVideoType),
/* harmony export */   md: () => (/* binding */ editVideo),
/* harmony export */   xc: () => (/* binding */ fetchVideoBody)
/* harmony export */ });
/* unused harmony exports editorInputValid, legerBody, removeFromLegerType */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const bufferTransformer = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().refine((value)=>{
    try {
        Buffer.from(value, "base64"); // Attempt to convert the string to a Buffer
        return true;
    } catch  {
        return false;
    }
}, {
    message: "Expected a valid base64 encoded Buffer."
}).transform((value)=>Buffer.from(value, "base64"));
const creatorInputValid = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    username: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const editorInputValid = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    username: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const LoginValid = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    username: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const rawVideo = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    thumbnail: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    videoKey: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    bucketName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    contentType: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    deadLineDate: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    noteToEditor: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const editVideo = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    thumbnail: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    videoKey: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    bucketName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    contentType: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    deadLineDate: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    deadLineTime: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const fetchVideoBody = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    videoId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().refine((value)=>value === "raw" || value === "edit", {
        message: 'Value must be either "raw" or "edit"'
    })
});
const legerBody = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    rawVideo: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    creator: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const removeFromLegerType = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    videoId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const uploadVideoType = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    thumbnail: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional(),
    publishAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional(),
    privacy: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    category: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    videoKey: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    bucketName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    tags: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string()).optional()
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;