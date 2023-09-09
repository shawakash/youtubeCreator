"use strict";
(() => {
var exports = {};
exports.id = 661;
exports.ids = [661];
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

/***/ 6935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fauth_2Fme_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fauth_2Fme_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/auth/me.ts
var me_namespaceObject = {};
__webpack_require__.r(me_namespaceObject);
__webpack_require__.d(me_namespaceObject, {
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
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./src/pages/api/auth/me.ts


async function handler(req, res) {
    if (req.method != "GET") {
        return res.status(400).json({
            message: "Its a Get request"
        });
    }
    try {
        const { EDITOR_SECRET } = process.env;
        if (!EDITOR_SECRET || EDITOR_SECRET.length == 0) {
            throw new Error("Please define the EDITOR_SECRET environment variable");
        }
        await (0,src/* dbConnect */.CJ)();
        let { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({
                message: "Unauthorized",
                isValid: false
            });
        }
        if (authorization.startsWith("Bearer")) {
            authorization = authorization.split(" ")[1];
        }
        external_jsonwebtoken_default().verify(authorization, EDITOR_SECRET, (err, decoded)=>{
            if (err) {
                return res.status(401).json({
                    message: "Forbiden",
                    isValid: false
                });
            }
            if (!decoded._id || decoded._id.length == 0) {
                return res.status(401).json({
                    message: "Forbiden",
                    isValid: false
                });
            }
            return res.status(200).json({
                message: "Verifed",
                isValid: true,
                _id: decoded._id
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            err: error,
            isValid: false
        });
    }
}

;// CONCATENATED MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fme&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fauth%2Fme.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fauth_2Fme_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fauth_2Fme_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(me_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(me_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/auth/me",
        pathname: "/api/auth/me",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: me_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [193,809], () => (__webpack_exec__(6935)));
module.exports = __webpack_exports__;

})();