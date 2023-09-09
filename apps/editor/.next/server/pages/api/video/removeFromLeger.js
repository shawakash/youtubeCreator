"use strict";
(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
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

/***/ 1344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fvideo_2FremoveFromLeger_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fvideo_2FremoveFromLeger_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/video/removeFromLeger.ts
var removeFromLeger_namespaceObject = {};
__webpack_require__.r(removeFromLeger_namespaceObject);
__webpack_require__.d(removeFromLeger_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(8514);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(1631);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(5247);
// EXTERNAL MODULE: ../../packages/db/src/index.ts
var src = __webpack_require__(3809);
// EXTERNAL MODULE: ./src/pages/api/middle.ts
var middle = __webpack_require__(1960);
;// CONCATENATED MODULE: ./src/pages/api/video/removeFromLeger.ts


async function handler(req, res) {
    if (req.method != "PUT") {
        return res.status(400).json({
            message: "Its a Put request"
        });
    }
    try {
        await (0,src/* dbConnect */.CJ)();
        (0,middle["default"])(req, res, async ()=>{
            const { _id } = req.headers;
            const { videoId } = JSON.parse(req.body);
            const leger = await src/* Leger */.vQ.findOne({
                rawVideo: videoId
            });
            if (!leger) {
                return res.status(404).json({
                    message: "Leger Not Found"
                });
            }
            leger.editors = leger.editors.filter((ed)=>ed != _id);
            await leger.save();
            return res.status(200).json({
                message: "Removed from Leger"
            });
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: "Internal Error"
        });
    }
}

;// CONCATENATED MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fvideo%2FremoveFromLeger&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fvideo%2FremoveFromLeger.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fvideo_2FremoveFromLeger_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fvideo_2FremoveFromLeger_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(removeFromLeger_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(removeFromLeger_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/video/removeFromLeger",
        pathname: "/api/video/removeFromLeger",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: removeFromLeger_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [193,809,960], () => (__webpack_exec__(1344)));
module.exports = __webpack_exports__;

})();