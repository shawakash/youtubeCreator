"use strict";
(() => {
var exports = {};
exports.id = 173;
exports.ids = [173];
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

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 3353:
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
/* harmony import */ var private_next_pages_api_video_fetchVideo_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5928);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_video_fetchVideo_ts__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_video_fetchVideo_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_video_fetchVideo_ts__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_video_fetchVideo_ts__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/video/fetchVideo",
        pathname: "/api/video/fetchVideo",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_video_fetchVideo_ts__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5928:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3809);
/* harmony import */ var _auth_middle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7898);
/* harmony import */ var zodTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3221);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zodTypes__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);
([zodTypes__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const { BASEURL } = process.env;
const getUrl = async (bucketname, videofilekey, token)=>{
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_3__["default"])({
        baseURL: BASEURL,
        url: "/video/getSignedUrl",
        method: "GET",
        headers: {
            "Authorization": token,
            "videofilekey": videofilekey,
            "bucketname": bucketname,
            "expiresin": 3600 * 24 * 4,
            "Content-Type": "application/json"
        }
    });
    return response.data.signedUrl;
};
async function handler(req, res) {
    if (req.method != "POST") {
        return res.status(400).json({
            message: "Its a Post Request"
        });
    }
    try {
        await (0,db__WEBPACK_IMPORTED_MODULE_0__/* .dbConnect */ .CJ)();
        (0,_auth_middle__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res, async ()=>{
            const parsedInput = zodTypes__WEBPACK_IMPORTED_MODULE_2__/* .fetchVideoBody */ .xc.safeParse(req.body);
            if (!parsedInput.success) {
                return res.status(400).json({
                    message: "Validation Error",
                    err: parsedInput
                });
            }
            const { videoId, type } = parsedInput.data;
            const { _id } = req.headers;
            if (type === "raw") {
                const leger = await db__WEBPACK_IMPORTED_MODULE_0__/* .Leger */ .vQ.findOne({
                    rawVideo: videoId
                }).populate([
                    {
                        path: "creator",
                        select: [
                            "name",
                            "username",
                            "email",
                            "_id"
                        ]
                    },
                    {
                        path: "rawVideo",
                        populate: {
                            path: "editor",
                            select: [
                                "name",
                                "username",
                                "email",
                                "_id"
                            ]
                        }
                    },
                    {
                        path: "editors",
                        select: [
                            "name",
                            "username",
                            "email",
                            "_id"
                        ]
                    },
                    {
                        path: "editor",
                        select: [
                            "name",
                            "username",
                            "email",
                            "_id"
                        ]
                    }
                ]);
                if (leger) {
                    leger.rawVideo.url = await getUrl(leger.rawVideo.bucketName, leger.rawVideo.videoKey, req.headers.authorization);
                    return res.status(200).json({
                        message: "Found",
                        video: leger
                    });
                }
                const video = await db__WEBPACK_IMPORTED_MODULE_0__/* .RawVideo */ .r2.findById(videoId).populate([
                    {
                        path: "creator",
                        select: [
                            "name",
                            "username",
                            "email",
                            "_id"
                        ]
                    },
                    {
                        path: "editor",
                        select: [
                            "name",
                            "username",
                            "email",
                            "_id"
                        ]
                    }
                ]);
                if (!video) {
                    return res.status(404).json({
                        message: "Invalid Video Id"
                    });
                }
                video.url = await getUrl(video.bucketName, video.videoKey, req.headers.authorization);
                let dummyLeger = {
                    rawVideo: video,
                    editor: video.editor,
                    editors: [],
                    creator: video.creator
                };
                return res.status(200).json({
                    message: "Found",
                    video: dummyLeger
                });
            }
            if (type === "edit") {
                const video = await db__WEBPACK_IMPORTED_MODULE_0__/* .EditedVideo */ .gw.findById(videoId).populate([
                    {
                        path: "creator",
                        select: [
                            "name",
                            "usename",
                            "email",
                            "_id"
                        ]
                    },
                    {
                        path: "editor",
                        select: [
                            "name",
                            "username",
                            "email",
                            "_id"
                        ]
                    }
                ]);
                if (!video) {
                    return res.status(404).json({
                        message: "Invalid Video Id"
                    });
                }
                video.url = await getUrl(video.bucketName, video.videoKey, req.headers.authorization);
                return res.status(200).json({
                    message: "Found",
                    video
                });
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
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
var __webpack_exports__ = __webpack_require__.X(0, [193,809,898,221], () => (__webpack_exec__(3353)));
module.exports = __webpack_exports__;

})();