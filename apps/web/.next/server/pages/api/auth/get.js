"use strict";
(() => {
var exports = {};
exports.id = 188;
exports.ids = [188];
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

/***/ 8273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fauth_2Fget_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fauth_2Fget_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/auth/get.ts
var get_namespaceObject = {};
__webpack_require__.r(get_namespaceObject);
__webpack_require__.d(get_namespaceObject, {
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
// EXTERNAL MODULE: ./src/pages/api/auth/middle.ts
var middle = __webpack_require__(7898);
;// CONCATENATED MODULE: ./src/pages/api/auth/get.ts


async function handler(req, res) {
    if (req.method != "GET") {
        return res.status(400).json({
            message: "Its a get Request"
        });
    }
    await (0,src/* dbConnect */.CJ)();
    try {
        (0,middle["default"])(req, res, async ()=>{
            const { _id } = req.headers;
            const { CLIENT_ID, REDIRECT_URI } = process.env;
            if (!CLIENT_ID || CLIENT_ID.length == 0 || !REDIRECT_URI || REDIRECT_URI.length == 0) {
                throw new Error("Please define the `CLIENT_ID` and `REDIRECT_URI` environment variable");
            // return res.status(400).json({ message: 'No client id and redirect uri was provided' })
            }
            const clientId = CLIENT_ID;
            const redirectUri = REDIRECT_URI; // Authorized Redirect URI
            const scope = "https://www.googleapis.com/auth/youtube.upload";
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&state=${_id}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&access_type=offline&prompt=consent`;
            // res.redirect(authUrl);
            return res.status(200).json({
                authUrl
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Response",
            err: error
        });
    }
}

;// CONCATENATED MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fget&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fauth%2Fget.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fauth_2Fget_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fauth_2Fget_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(get_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(get_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/auth/get",
        pathname: "/api/auth/get",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: get_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [193,809,898], () => (__webpack_exec__(8273)));
module.exports = __webpack_exports__;

})();