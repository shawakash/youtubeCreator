"use strict";
(() => {
var exports = {};
exports.id = 385;
exports.ids = [385];
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

/***/ 9771:
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
/* harmony import */ var private_next_pages_api_video_addEditCredential_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4712);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_video_addEditCredential_ts__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_video_addEditCredential_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_video_addEditCredential_ts__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_video_addEditCredential_ts__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/video/addEditCredential",
        pathname: "/api/video/addEditCredential",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_video_addEditCredential_ts__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4712:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3809);
/* harmony import */ var zodTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3221);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _middle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zodTypes__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__]);
([zodTypes__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const { BASEURL } = process.env;
async function handler(req, res) {
    if (req.method != "POST") {
        return res.status(400).json({
            message: "Its a post request"
        });
    }
    try {
        await (0,db__WEBPACK_IMPORTED_MODULE_0__/* .dbConnect */ .CJ)();
        (0,_middle__WEBPACK_IMPORTED_MODULE_3__["default"])(req, res, async ()=>{
            const parsedInput = zodTypes__WEBPACK_IMPORTED_MODULE_1__/* .editVideo */ .md.safeParse(req.body);
            if (!parsedInput.success) {
                return res.status(400).json({
                    message: "Validation Error",
                    err: parsedInput
                });
            }
            const { _id } = req.headers;
            const { videoKey } = parsedInput.data;
            const editor = await db__WEBPACK_IMPORTED_MODULE_0__/* .Editor */ .ML.findById(_id).select([
                "username",
                "email",
                "name",
                "_id",
                "editedVideos"
            ]);
            const rawVideo = await db__WEBPACK_IMPORTED_MODULE_0__/* .RawVideo */ .r2.findOne({
                videoKey
            });
            if (!rawVideo) {
                return res.status(404).json({
                    message: "Video Not found"
                });
            }
            const leger = await db__WEBPACK_IMPORTED_MODULE_0__/* .Leger */ .vQ.findOne({
                rawVideo: rawVideo._id,
                editor: _id
            });
            if (!leger) {
                return res.status(403).json({
                    message: "Unauthorized Video Upload Attempt"
                });
            }
            const creator = await db__WEBPACK_IMPORTED_MODULE_0__/* .Creator */ .g6.findById(rawVideo.creator._id).select([
                "username",
                "name",
                "_id",
                "email",
                "editedVideos"
            ]);
            const intialVideo = new db__WEBPACK_IMPORTED_MODULE_0__/* .EditedVideo */ .gw({
                ...parsedInput.data,
                editor: _id,
                creator: creator._id
            });
            const video = (await intialVideo.save()).populate([
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
            editor.editedVideos.push(video._id);
            creator.editedVideos.push(video._id);
            await editor.save();
            await creator.save();
            const response = await (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
                baseURL: BASEURL,
                url: "/video/getSignedUrl",
                method: "GET",
                headers: {
                    "Authorization": req.headers.authorization,
                    "Content-Type": "application/json",
                    "videofilekey": video.videoKey,
                    bucketname: video.bucketName,
                    expiresIn: 3600 * 24 * 4
                }
            });
            video.url = response.data.signedUrl;
            return res.status(200).json({
                message: "Edit Video Uploaded Successfully to server",
                creator,
                video,
                editor: editor
            });
        });
    } catch (error) {
        try {
            (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
                baseURL: BASEURL,
                url: "/video/deleteVideo",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": req.headers.authorization,
                    "type": "edit"
                },
                data: {
                    "videoKey": req.body.videoKey,
                    "bucketName": req.body.bucketName
                }
            });
        } catch (error) {
            return res.status(500).json({
                message: "Extra Video in edit bucket",
                err: error
            });
        }
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
var __webpack_exports__ = __webpack_require__.X(0, [193,809,960,221], () => (__webpack_exec__(9771)));
module.exports = __webpack_exports__;

})();