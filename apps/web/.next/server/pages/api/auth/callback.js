"use strict";
(() => {
var exports = {};
exports.id = 712;
exports.ids = [712];
exports.modules = {

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

/***/ 2944:
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
/* harmony import */ var private_next_pages_api_auth_callback_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8633);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_auth_callback_ts__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_auth_callback_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_auth_callback_ts__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_auth_callback_ts__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/auth/callback",
        pathname: "/api/auth/callback",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_auth_callback_ts__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3809);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    if (req.method != "GET") {
        return res.status(400).json({
            message: "Fetch request method error"
        });
    }
    await (0,db__WEBPACK_IMPORTED_MODULE_0__/* .dbConnect */ .CJ)();
    try {
        const { CLIENT_ID, REDIRECT_URI, CLIENT_SECRET } = process.env;
        if (!CLIENT_ID || CLIENT_ID.length == 0 || !REDIRECT_URI || REDIRECT_URI.length == 0 || !CLIENT_SECRET || CLIENT_SECRET.length == 0) {
            throw new Error("Please define the `CLIENT_ID`, `REDIRECT_URI`, `CLIENT_SECRET` environment variable");
        // return res.status(400).json({ message: 'No client id and redirect uri was provided' })
        }
        const { state } = req.query;
        const clientId = CLIENT_ID;
        const clientSecret = CLIENT_SECRET;
        const redirectUri = REDIRECT_URI; // Should match the authorized redirect URI in your client settings
        const authorizationCode = req.query.code;
        const tokenUrl = "https://oauth2.googleapis.com/token";
        const data = {
            code: authorizationCode,
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
            grant_type: "authorization_code"
        };
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(tokenUrl, new URLSearchParams(data));
            const accessToken = response.data.access_token;
            const refreshToken = response.data.refresh_token;
            // Store tokens securely for future API requests
            // You can implement your storage mechanism here
            // if(!accessToken || !refreshToken) {
            //     return res.status(400).json({ message: 'Please Try Again' });
            // }
            const creator = await db__WEBPACK_IMPORTED_MODULE_0__/* .Creator */ .g6.findById(state);
            creator.refreshToken = refreshToken;
            creator.accessToken = accessToken;
            creator.hasAllowed = true;
            await creator.save();
            res.redirect("/");
            return res.status(200).json({
                message: "Authentication successful! You can close this window.",
                accessToken,
                refreshToken
            });
        } catch (error) {
            console.error("Error exchanging authorization code for tokens:", error);
            res.status(500).send("Error during authentication");
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Response",
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
var __webpack_exports__ = __webpack_require__.X(0, [193,809], () => (__webpack_exec__(2944)));
module.exports = __webpack_exports__;

})();