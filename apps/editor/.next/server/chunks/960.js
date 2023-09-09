"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 1960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const middle = async (req, res, next)=>{
    const { EDITOR_SECRET } = process.env;
    if (!EDITOR_SECRET || EDITOR_SECRET.length == 0) {
        throw new Error("Please define the `EDITOR_SECRET` environment variable");
    }
    const authHeader = req.headers.authorization;
    if (authHeader) {
        let token = authHeader;
        if (authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
        }
        jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, EDITOR_SECRET, (err, decoded)=>{
            if (err) {
                return res.status(403).json({
                    message: "Cant verify your token",
                    isAuth: false
                });
            }
            if (!decoded || typeof decoded === "string" || !decoded._id) {
                return res.status(403).json({
                    message: "Forbidden!",
                    isAuth: false
                });
            }
            req.headers["_id"] = decoded._id;
            next();
        });
    } else {
        console.log("kksd");
        res.status(403).json({
            message: "Unauthorized",
            isAuth: false
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middle);


/***/ })

};
;