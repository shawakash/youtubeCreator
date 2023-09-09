"use strict";
(() => {
var exports = {};
exports.id = 913;
exports.ids = [913];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 3108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routeModule: () => (/* binding */ routeModule)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8514);
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1631);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5247);
/* harmony import */ var private_next_pages_api_video_addEditVideo_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_video_addEditVideo_ts__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_video_addEditVideo_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_video_addEditVideo_ts__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_video_addEditVideo_ts__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/video/addEditVideo",
        pathname: "/api/video/addEditVideo",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_video_addEditVideo_ts__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3809);
/* harmony import */ var _middle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1960);
/* harmony import */ var zodTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3221);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zodTypes__WEBPACK_IMPORTED_MODULE_2__]);
zodTypes__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    if (req.method != "POST") {
        return res.status(400).json({
            message: "Its a post request"
        });
    }
    try {
        await (0,db__WEBPACK_IMPORTED_MODULE_0__/* .dbConnect */ .CJ)();
        (0,_middle__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res, async ()=>{
            const parsedInput = zodTypes__WEBPACK_IMPORTED_MODULE_2__/* .editVideo */ .md.safeParse(req.body);
            if (!parsedInput.success) {
                return res.status(400).json({
                    message: "Validation Error",
                    err: parsedInput
                });
            }
            const { _id } = req.headers;
            const rawVideo = await db__WEBPACK_IMPORTED_MODULE_0__/* .RawVideo */ .r2.findOne({
                videoKey: parsedInput.data.videoKey,
                editor: _id
            });
            const creator = await db__WEBPACK_IMPORTED_MODULE_0__/* .Creator */ .g6.findById(rawVideo.creator);
            const editor = await db__WEBPACK_IMPORTED_MODULE_0__/* .Editor */ .ML.findById(_id);
            const isLeger = await db__WEBPACK_IMPORTED_MODULE_0__/* .Leger */ .vQ.findOne({
                editor: _id,
                rawVideo: rawVideo._id
            }).populate({
                path: "rawVideo"
            });
            if (!isLeger || !rawVideo) {
                return res.status(400).json({
                    message: "False Attempt to update video"
                });
            }
            try {
                const newEditVideo = new db__WEBPACK_IMPORTED_MODULE_0__/* .EditedVideo */ .gw({
                    ...parsedInput.data,
                    creator: creator._id,
                    editor: editor._id,
                    isUploaded: false
                });
                if (!creator.editor.find((ed)=>ed != _id)) {
                    creator.editor.push(_id);
                }
                rawVideo.isEdited = true;
                creator.editedVideos.push(newEditVideo._id);
                editor.editedVideos.push(newEditVideo._id);
                isLeger.rawVideo.isEdited = true;
                await rawVideo.save();
                await editor.save();
                await creator.save();
                await newEditVideo.save();
                return res.status(200).json({
                    message: "Added Successfully"
                });
            } catch (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Error while creating credentials",
                    err: error
                });
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Internal Error",
            err: error
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [193,809,960,221], () => (__webpack_exec__(3108)));
module.exports = __webpack_exports__;

})();