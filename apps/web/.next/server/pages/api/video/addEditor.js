"use strict";
(() => {
var exports = {};
exports.id = 185;
exports.ids = [185];
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

/***/ 7263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fvideo_2FaddEditor_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fvideo_2FaddEditor_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/video/addEditor.ts
var addEditor_namespaceObject = {};
__webpack_require__.r(addEditor_namespaceObject);
__webpack_require__.d(addEditor_namespaceObject, {
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
;// CONCATENATED MODULE: ./src/pages/api/video/addEditor.ts


async function handler(req, res) {
    if (req.method != "PUT") {
        return res.status(400).json({
            message: "Its a Put Request"
        });
    }
    try {
        await (0,src/* dbConnect */.CJ)();
        (0,middle["default"])(req, res, async ()=>{
            const { _id } = req.headers;
            const { videoId, editor } = req.body;
            const creator = await src/* Creator */.g6.findById(_id).select("editor");
            if (!creator) {
                return res.status(404).json({
                    message: "Authentication Error"
                });
            }
            const edit = await src/* Editor */.ML.findById(editor).select([
                "username",
                "_id",
                "name",
                "email",
                "rawVideos"
            ]);
            if (!edit) {
                return res.status(404).json({
                    message: "Invalid editor Id"
                });
            }
            const leger = await src/* Leger */.vQ.findOne({
                rawVideo: videoId
            });
            const video = await src/* RawVideo */.r2.findById(videoId);
            if (!video) {
                return res.status(404).json({
                    message: "No such Video"
                });
            }
            if (video.editor) {
                return res.status(400).json({
                    message: "Already Has an editor"
                });
            }
            if (leger) {
                leger.editor = edit._id;
            }
            video.editor = edit._id;
            if (!edit.rawVideos.find((rv)=>rv == videoId)) {
                edit.rawVideos.push(videoId);
            }
            if (!creator.editor.find((ed)=>ed == editor)) {
                creator.editor.push(editor);
            }
            await creator.save();
            await edit.save();
            await leger.save();
            await video.save();
            return res.status(200).json({
                message: "Assigned As A editor",
                editor: edit
            });
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: "Internal Error",
            err: error
        });
    }
}

;// CONCATENATED MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fvideo%2FaddEditor&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fvideo%2FaddEditor.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fvideo_2FaddEditor_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fvideo_2FaddEditor_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(addEditor_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(addEditor_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/video/addEditor",
        pathname: "/api/video/addEditor",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: addEditor_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [193,809,898], () => (__webpack_exec__(7263)));
module.exports = __webpack_exports__;

})();