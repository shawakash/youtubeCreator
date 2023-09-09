"use strict";
(() => {
var exports = {};
exports.id = 694;
exports.ids = [694];
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

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6760:
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
/* harmony import */ var private_next_pages_api_video_getAssignedVideo_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5124);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_video_getAssignedVideo_ts__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_video_getAssignedVideo_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_video_getAssignedVideo_ts__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_video_getAssignedVideo_ts__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/video/getAssignedVideo",
        pathname: "/api/video/getAssignedVideo",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_video_getAssignedVideo_ts__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3809);
/* harmony import */ var _middle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1960);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    if (req.method != "GET") {
        return res.status(400).json({
            message: "Its a get request"
        });
    }
    try {
        const { BASEURL } = process.env;
        await (0,db__WEBPACK_IMPORTED_MODULE_0__/* .dbConnect */ .CJ)();
        (0,_middle__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res, async ()=>{
            const { _id, videoid } = req.headers;
            const rawVideo = await db__WEBPACK_IMPORTED_MODULE_0__/* .RawVideo */ .r2.findById(videoid);
            const editedVideo = await db__WEBPACK_IMPORTED_MODULE_0__/* .EditedVideo */ .gw.findOne({
                videoKey: rawVideo.videoKey,
                editor: _id
            }).populate([
                {
                    path: "creator",
                    select: [
                        "username",
                        "name",
                        "email",
                        "_id"
                    ]
                },
                {
                    path: "editor",
                    select: [
                        "username",
                        "name",
                        "email",
                        "_id"
                    ]
                }
            ]);
            if (editedVideo) {
                const response = await (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
                    baseURL: BASEURL,
                    url: "/video/getSignedUrl",
                    method: "GET",
                    headers: {
                        "Authorization": req.headers.authorization,
                        "videofilekey": editedVideo.videoKey,
                        "bucketname": editedVideo.bucketName,
                        "expiresin": 3600 * 24 * 4,
                        "Content-Type": "application/json"
                    }
                });
                const url = response.data.signedUrl;
                editedVideo.url = url;
                return res.status(200).json({
                    message: "Got It",
                    video: editedVideo
                });
            }
            const assignedVideo = await db__WEBPACK_IMPORTED_MODULE_0__/* .Leger */ .vQ.findOne({
                rawVideo: videoid,
                editor: _id
            }).populate({
                path: "rawVideo",
                populate: [
                    {
                        path: "creator",
                        select: [
                            "username",
                            "name",
                            "email",
                            "_id"
                        ]
                    },
                    {
                        path: "editor",
                        select: [
                            "username",
                            "name",
                            "email",
                            "_id"
                        ]
                    }
                ]
            });
            let video = assignedVideo.rawVideo;
            if (!assignedVideo) {
                return res.status(201).json({
                    message: "No Videos Assigned",
                    video: []
                });
            }
            if (assignedVideo.rawVideo.isUploaded || assignedVideo.rawVideo.isEdited) {
                const editedVideo = await db__WEBPACK_IMPORTED_MODULE_0__/* .EditedVideo */ .gw.findOne({
                    videoKey: assignedVideo.rawVideo.videoKey,
                    editor: _id
                }).populate([
                    {
                        path: "creator",
                        select: [
                            "username",
                            "name",
                            "email",
                            "_id"
                        ]
                    },
                    {
                        path: "editor",
                        select: [
                            "username",
                            "name",
                            "email",
                            "_id"
                        ]
                    }
                ]);
                video = editedVideo;
            }
            try {
                const response = await (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
                    baseURL: BASEURL,
                    url: "/video/getSignedUrl",
                    method: "GET",
                    headers: {
                        "Authorization": req.headers.authorization,
                        "videofilekey": video.videoKey,
                        "bucketname": video.bucketName,
                        "expiresin": 3600 * 24 * 4,
                        "Content-Type": "application/json"
                    }
                });
                const url = response.data.signedUrl;
                video.url = url;
            } catch (error) {
                video.url = "";
                console.log(error);
            }
            return res.status(200).json({
                message: "Yeah",
                video
            });
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            messsage: "Internal Error",
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
var __webpack_exports__ = __webpack_require__.X(0, [193,809,960], () => (__webpack_exec__(6760)));
module.exports = __webpack_exports__;

})();