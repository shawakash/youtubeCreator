"use strict";
(() => {
var exports = {};
exports.id = 762;
exports.ids = [762];
exports.modules = {

/***/ 9336:
/***/ ((module) => {

module.exports = require("aws-sdk");

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

/***/ 1927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fvideo_2FgetPutSignedUrl_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fvideo_2FgetPutSignedUrl_ts_middlewareConfigBase64_e30_3D_config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fvideo_2FgetPutSignedUrl_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fvideo_2FgetPutSignedUrl_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/video/getPutSignedUrl.ts
var getPutSignedUrl_namespaceObject = {};
__webpack_require__.r(getPutSignedUrl_namespaceObject);
__webpack_require__.d(getPutSignedUrl_namespaceObject, {
  config: () => (config),
  "default": () => (handler)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(8514);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(1631);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(5247);
// EXTERNAL MODULE: external "aws-sdk"
var external_aws_sdk_ = __webpack_require__(9336);
var external_aws_sdk_default = /*#__PURE__*/__webpack_require__.n(external_aws_sdk_);
// EXTERNAL MODULE: ../../packages/db/src/index.ts
var src = __webpack_require__(3809);
// EXTERNAL MODULE: ./src/pages/api/middle.ts
var middle = __webpack_require__(1960);
;// CONCATENATED MODULE: ./src/pages/api/video/getPutSignedUrl.ts



const { AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME, AWS_ENDPOINT } = process.env;
const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    if (req.method != "GET") {
        return res.status(400).json({
            message: "Its a Get request"
        });
    }
    try {
        await (0,src/* dbConnect */.CJ)();
        (0,middle["default"])(req, res, async ()=>{
            const { key, bucketname, expiresin } = req.headers; // The object key for the video in S3
            external_aws_sdk_default().config.update({
                accessKeyId: AWS_ACCESS_KEY,
                secretAccessKey: AWS_SECRET_KEY,
                region: AWS_REGION
            });
            const s3 = new (external_aws_sdk_default()).S3();
            const params = {
                Bucket: bucketname,
                Key: key,
                ContentType: "video/*",
                Expires: parseInt(expiresin)
            };
            try {
                const presignedUrl = await s3.getSignedUrlPromise("putObject", params);
                res.status(200).json({
                    message: "upload Presigned Url Generated",
                    presignedUrl
                });
            } catch (error) {
                console.error("Error generating pre-signed URL:", error);
                res.status(500).json({
                    error: "An error occurred"
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            err: error
        });
    }
}

;// CONCATENATED MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fvideo%2FgetPutSignedUrl&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fvideo%2FgetPutSignedUrl.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fvideo_2FgetPutSignedUrl_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fvideo_2FgetPutSignedUrl_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(getPutSignedUrl_namespaceObject, "default"));
// Re-export config.
const next_route_loaderkind_PAGES_API_page_2Fapi_2Fvideo_2FgetPutSignedUrl_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fvideo_2FgetPutSignedUrl_ts_middlewareConfigBase64_e30_3D_config = (0,helpers/* hoist */.l)(getPutSignedUrl_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/video/getPutSignedUrl",
        pathname: "/api/video/getPutSignedUrl",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: getPutSignedUrl_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [193,809,960], () => (__webpack_exec__(1927)));
module.exports = __webpack_exports__;

})();