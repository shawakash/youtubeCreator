"use strict";
(() => {
var exports = {};
exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 9301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9800);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4591);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9655);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8993);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2622);
/* harmony import */ var private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/videos/raw/[videoId]",
        pathname: "/videos/raw/[videoId]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_videos_raw_videoId_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1509);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4330);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6201);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_Protection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ui__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, axios__WEBPACK_IMPORTED_MODULE_7__, _utils_Protection__WEBPACK_IMPORTED_MODULE_9__]);
([ui__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, axios__WEBPACK_IMPORTED_MODULE_7__, _utils_Protection__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const VideoPage = ({ leger })=>{
    const [localVideo, setVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [editors, setEditors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const creatorId = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(store__WEBPACK_IMPORTED_MODULE_5__/* .creatorIdAtom */ .m_);
    const setAllRawVideos = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(store__WEBPACK_IMPORTED_MODULE_5__/* .allRawVideo */ .Lz);
    const setLegers = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(store__WEBPACK_IMPORTED_MODULE_5__/* .legersAtom */ .Je);
    const [isSelected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!leger) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error("Server Error");
            router.back();
        }
        if (leger) {
            if (leger.editor) {
                setSelected(true);
            } else {
                setSelected(false);
            }
            setVideo(leger.rawVideo);
            setEditors(leger.editors);
        }
    }, []);
    const handleUpdate = (data)=>{
        (0,axios__WEBPACK_IMPORTED_MODULE_7__["default"])({
            baseURL: "http://localhost:3000/api",
            url: "/video/update",
            method: "PUT",
            headers: {
                "Authorization": sessionStorage.getItem("creatorToken"),
                "Content-Type": "application/json",
                "type": "raw",
                "videoKey": localVideo.videoKey,
                "bucketName": localVideo.bucketName
            },
            data: data
        }).then((response)=>{
            setAllRawVideos((pre)=>{
                let prev = pre.find((c)=>c.videoKey == localVideo.videoKey);
                prev = {
                    ...prev,
                    ...data
                };
                return pre;
            });
            setVideo((prevVideo)=>{
                return {
                    ...prevVideo,
                    ...data
                };
            });
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success(response.data.message);
        }).catch((err)=>{
            if (err) {
                if (err.response && err.response.status == 403) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(err.response.data.message);
                    sessionStorage.clear();
                    router.push("/login");
                } else if (err.response.status == 401) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error("Please first allow us your youtube access");
                    router.push("/auth");
                }
            } else if (err.response) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(err.response.data.message);
            }
            console.log(err);
        });
    };
    const removeFromLeger = ()=>{
        (0,axios__WEBPACK_IMPORTED_MODULE_7__["default"])({
            baseURL: "http://localhost:3000/api",
            url: "/video/delete",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("creatorToken"),
                "videoKey": localVideo.videoKey,
                "type": "raw",
                "bucketname": localVideo.bucketName
            }
        }).then((response)=>{
            setAllRawVideos((rvs)=>rvs.filter((rv)=>rv._id != localVideo._id));
            setLegers((lgs)=>lgs.filter((lg)=>lg.rawVideo._id != localVideo._id));
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success(response.data.message);
            router.push("/videos/raw");
        }).catch((err)=>{
            if (err) {
                if (err.response && err.response.status == 403) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(err.response.data.message);
                    sessionStorage.clear();
                    router.push("/login");
                } else if (err.response.status == 401) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error("Please first allow us your youtube access");
                    router.push("/auth");
                }
            } else if (err.response) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(err.response.data.message);
            }
            console.log(err);
        });
    };
    const handleSelect = (value)=>{
        const answer = prompt(`Type ${value.slice(value.length - 6)} to continue!`);
        if (answer == value.slice(value.length - 6)) {
            (0,axios__WEBPACK_IMPORTED_MODULE_7__["default"])({
                baseURL: "http://localhost:3000/api",
                url: "/video/addEditor",
                method: "PUT",
                headers: {
                    "Authorization": sessionStorage.getItem("creatorToken"),
                    "Content-Type": "application/json"
                },
                data: {
                    videoId: localVideo._id,
                    editor: value
                }
            }).then((response)=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success("Editor Added Successfully");
                setSelected(true);
                setAllRawVideos((rvs)=>{
                    const rv = rvs.find((r)=>r._id == localVideo._id);
                    rv.editor = response.data.editor;
                    return rvs;
                });
                setVideo((vid)=>{
                    vid.editor = response.data.editor;
                    return vid;
                });
                router.push("/video/raw");
                setLegers((ls)=>{
                    const l = ls.find((de)=>de.rawVideo._id == localVideo._id);
                    l.editor = response.data.editor;
                    l.rawVideo.editor = response.data.editor;
                    return ls;
                });
            }).catch((err)=>{
                if (err) {
                    if (err.response && err.response.status == 403) {
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(err.response.data.message);
                        sessionStorage.clear();
                        router.push("/login");
                    }
                } else if (err.response) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(err.response.data.message);
                }
                console.error(err);
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "h-full  bg-gray-100 flex justify-around py-6",
            children: [
                leger && localVideo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ui__WEBPACK_IMPORTED_MODULE_3__/* .VideoCard */ .cB, {
                    video: localVideo,
                    type: "raw",
                    clientId: creatorId,
                    client: "creator",
                    onDelete: removeFromLeger,
                    page: "video"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-y-8",
                    children: [
                        localVideo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ui__WEBPACK_IMPORTED_MODULE_3__/* .UpdateForm */ .MX, {
                            client: "creator",
                            video: localVideo,
                            type: "raw",
                            propData: handleUpdate
                        }),
                        !localVideo?.editor && editors && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ui__WEBPACK_IMPORTED_MODULE_3__/* .EditorSelect */ .fc, {
                            isSelected: isSelected,
                            editors: editors,
                            onSelect: handleSelect
                        })
                    ]
                })
            ]
        })
    });
};
async function getServerSideProps(context) {
    const { videoId } = context.params;
    const { BASEURL } = process.env;
    const cookies = context.req.headers.cookie;
    const parsedCookies = cookie__WEBPACK_IMPORTED_MODULE_8___default().parse(cookies || "");
    const token = parsedCookies.creatorToken;
    const data = {
        videoId: videoId,
        type: "raw"
    };
    try {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_7__["default"])({
            baseURL: BASEURL,
            url: "/video/fetchVideo",
            method: "POST",
            data: data,
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        return {
            props: {
                leger: response.data.video
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                leger: null
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_Protection__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(VideoPage));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 8362:
/***/ ((module) => {

module.exports = require("moment-timezone");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [765,781,509], () => (__webpack_exec__(9301)));
module.exports = __webpack_exports__;

})();