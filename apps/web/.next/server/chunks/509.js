"use strict";
exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// utils/withAuth.js





const Protection = (WrappedComponent)=>{
    return (props)=>{
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        const { BASEURL } = process.env;
        const init = async ()=>{
            (0,axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
                baseURL: BASEURL || "http://localhost:3000/api",
                url: "/auth/me",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("creatorToken")
                }
            }).then((response)=>{
                if (!response.data.isValid) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.error(response.data.message);
                    sessionStorage.clear();
                    router.push("/login");
                }
            }).catch((err)=>{
                if (err) {
                    if (!err.response.isValid) {
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.error(err.response.data.message);
                        sessionStorage.clear();
                        router.push("/login");
                    }
                }
            });
        };
        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
            if (!sessionStorage.getItem("creatorToken") || sessionStorage.getItem("creatorToken").length == 0) {
                sessionStorage.clear();
                router.push("/login");
            } else {
                init();
            }
        }, []);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
                ...props
            })
        });
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Protection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;