"use strict";
(() => {
var exports = {};
exports.id = 250;
exports.ids = [250];
exports.modules = {

/***/ 9993:
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

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

/***/ 8280:
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
/* harmony import */ var private_next_pages_api_video_upload_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7400);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_video_upload_ts__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_video_upload_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_video_upload_ts__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_video_upload_ts__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/video/upload",
        pathname: "/api/video/upload",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_video_upload_ts__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9993);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _auth_tokenValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7701);
/* harmony import */ var zodTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3221);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _auth_tokenValidator__WEBPACK_IMPORTED_MODULE_2__, zodTypes__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _auth_tokenValidator__WEBPACK_IMPORTED_MODULE_2__, zodTypes__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const { BASEURL } = process.env;
async function main(oauth2Client, refresh_Token) {
    oauth2Client.setCredentials({
        "refresh_token": refresh_Token
    });
    const token = await oauth2Client.getAccessToken();
    return token.token;
}
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(400).json({
            message: "Its  POST request"
        });
    }
    try {
        const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
        if (!CLIENT_ID || CLIENT_ID.length == 0 || !REDIRECT_URI || REDIRECT_URI.length == 0 || !CLIENT_SECRET || CLIENT_SECRET.length == 0) {
            throw new Error("Please define the CREATOR_SECRET, CLIENT_SECRET, REDIRECT_URI environment variable");
        }
        (0,_auth_tokenValidator__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res, async ()=>{
            const { accessToken, refreshToken } = req.headers; // Get the tokens from the request body
            const parsedInput = zodTypes__WEBPACK_IMPORTED_MODULE_3__/* .uploadVideoType */ .Jp.safeParse(req.body);
            if (!parsedInput.success) {
                return res.status(400).json({
                    message: "Validation Error",
                    err: parsedInput
                });
            }
            const { title, description, privacy, publishAt, category, videoKey, bucketName, thumbnail, tags } = parsedInput.data;
            const oauth2Client = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
            oauth2Client.setCredentials({
                access_token: accessToken,
                refresh_token: refreshToken
            });
            // const generatedToken = main(oauth2Client, refreshToken);
            const youtube = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.youtube("v3");
            const videoDetails = {
                snippet: {
                    title: title,
                    description: description,
                    tags,
                    category: parseInt(category)
                },
                status: {
                    privacyStatus: privacy,
                    publishAt,
                    madeForKids: true
                }
            };
            try {
                const response = await (0,axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
                    baseURL: BASEURL,
                    url: "/video/getSignedUrl",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": req.headers.authorization,
                        "videofilekey": videoKey,
                        "bucketName": bucketName,
                        "expiresin": 3600 * 24
                    }
                });
                if (response.status == 200) {
                    const videoFilePath = response.data.signedUrl; // Path to the video file on your server
                    const response2 = await youtube.videos.insert({
                        auth: oauth2Client,
                        part: [
                            "snippet,status"
                        ],
                        requestBody: videoDetails,
                        media: {
                            mimeType: "video/*",
                            body: (await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(videoFilePath, {
                                responseType: "stream"
                            })).data
                        }
                    });
                    console.log("yes");
                    if (response2.status == 200) {
                        const addUploadRes = await (0,axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
                            baseURL: BASEURL,
                            url: "/video/addUploadVideo",
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": req.headers.authorization,
                                uploadId: response2.data.id
                            },
                            data: parsedInput.data
                        });
                    }
                    return res.status(200).json({
                        message: "Video uploaded",
                        response2
                    });
                }
            } catch (error) {
                console.log(error);
                if (error.errors) return res.status(500).json({
                    message: "Internal Error",
                    err: error
                });
            }
        });
    } catch (error) {
        console.error("Error uploading video:", error);
        res.status(500).json({
            error: "Error uploading video"
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
var __webpack_exports__ = __webpack_require__.X(0, [193,809,898,221,701], () => (__webpack_exec__(8280)));
module.exports = __webpack_exports__;

})();