"use strict";
(() => {
var exports = {};
exports.id = 826;
exports.ids = [826];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fchat_2Fauth_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fchat_2Fauth_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/chat/auth.ts
var auth_namespaceObject = {};
__webpack_require__.r(auth_namespaceObject);
__webpack_require__.d(auth_namespaceObject, {
  "default": () => (chat_auth)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(8514);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(1631);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(5247);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./src/pages/api/chat/auth.ts

const auth = async (socket, next)=>{
    try {
        const { CREATOR_SECRET } = process.env;
        console.log(socket.handshake);
        const token = socket.handshake.headers.authorization;
        if (!token) return next(new Error("No token provided"));
        const user = external_jsonwebtoken_default().verify(token, CREATOR_SECRET, (err, decoded)=>{
            if (err) {
                console.log(err);
                return next(new Error("Forbidden"));
            }
            if (decoded._id) {
                socket.$_id = decoded._id;
                next();
            }
        });
    } catch (error) {
        return next(error);
    }
};
/* harmony default export */ const chat_auth = (auth);

;// CONCATENATED MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fchat%2Fauth&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fchat%2Fauth.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fchat_2Fauth_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fchat_2Fauth_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(auth_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(auth_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/chat/auth",
        pathname: "/api/chat/auth",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: auth_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [193], () => (__webpack_exec__(3883)));
module.exports = __webpack_exports__;

})();