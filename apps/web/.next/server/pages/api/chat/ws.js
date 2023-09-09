(() => {
var exports = {};
exports.id = 9;
exports.ids = [9];
exports.modules = {

/***/ 730:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 6227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var private_next_pages_api_chat_ws_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6527);
/* harmony import */ var private_next_pages_api_chat_ws_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_api_chat_ws_ts__WEBPACK_IMPORTED_MODULE_3__);
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_chat_ws_ts__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_chat_ws_ts__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/chat/ws",
        pathname: "/api/chat/ws",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_chat_ws_ts__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map

/***/ }),

/***/ 6527:
/***/ (() => {

// // pages/api/socket.js
// import { Server } from 'socket.io';
// import express from 'express';
// import auth from './auth'; // Path to your middleware
// const app = express();
// const server = app.listen(3001, () => {
//     console.log('Socket.io server is running on port 3001');
// });
// const io = new Server(server, {
//     cors: {
//         origin: '*',
//     },
// });
// // Apply the middleware-like behavior to the entire Socket.io connection
// io.use((socket, next) => {
//     auth(socket, next);
// });
// // Store connected clients and their corresponding rooms
// const clients = new Map();
// io.on('connection', (socket) => {
//     console.log('A user connected');
//     socket.on('join room', (roomId) => {
//         if (!clients.has(roomId)) {
//             clients.set(roomId, [socket]);
//         } else {
//             clients.get(roomId).push(socket);
//         }
//         socket.on('chat message', (message) => {
//             const roomClients = clients.get(roomId);
//             if (roomClients) {
//                 roomClients.forEach((client) => {
//                     if (client !== socket) {
//                         client.emit('chat message', message);
//                     }
//                 });
//             }
//         });
//         socket.on('disconnect', () => {
//             const roomClients = clients.get(roomId);
//             if (roomClients) {
//                 const index = roomClients.indexOf(socket);
//                 if (index !== -1) {
//                     roomClients.splice(index, 1);
//                     if (roomClients.length === 0) {
//                         clients.delete(roomId);
//                     }
//                 }
//             }
//             console.log('A user disconnected');
//         });
//     });
// });
// export default app;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [193], () => (__webpack_exec__(6227)));
module.exports = __webpack_exports__;

})();