"use strict";
exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 7701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _middle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7898);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3809);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9993);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// Configure OAuth2 client
const { REDIRECT_URI, CLIENT_ID, CLIENT_SECRET } = process.env;
const oauth2Client = new googleapis__WEBPACK_IMPORTED_MODULE_3__.google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
const tokenValidator = async (req, res, next)=>{
    await (0,db__WEBPACK_IMPORTED_MODULE_2__/* .dbConnect */ .CJ)();
    try {
        (0,_middle__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res, async ()=>{
            const { _id } = req.headers;
            const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, OUTH_TOKEN_VALID_URL } = process.env;
            if (!CLIENT_ID || CLIENT_ID.length == 0 || !REDIRECT_URI || REDIRECT_URI.length == 0 || !CLIENT_SECRET || CLIENT_SECRET.length == 0 || !OUTH_TOKEN_VALID_URL || OUTH_TOKEN_VALID_URL.length == 0) {
                throw new Error("Please define the CREATOR_SECRET, CLIENT_SECRET, REDIRECT_URI environment variable");
            }
            const creator = await db__WEBPACK_IMPORTED_MODULE_2__/* .Creator */ .g6.findById(_id);
            let { accessToken, refreshToken } = creator;
            if (!accessToken || !refreshToken || accessToken.length === 0 || refreshToken.length === 0) {
                return res.status(400).json({
                    message: "Please Get Auth First"
                });
            }
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(OUTH_TOKEN_VALID_URL, {
                    access_token: accessToken,
                    refresh_token: refreshToken
                });
                // Assuming the validation endpoint returns relevant data
                // const isValid = response.data.isValid; // Adjust based on the response format
                req.headers["accessToken"] = accessToken;
                req.headers["refreshToken"] = refreshToken;
                next();
            } catch (error) {
                console.log("Token Expired");
                console.log("Fetching new token");
                const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://oauth2.googleapis.com/token", null, {
                    params: {
                        client_id: CLIENT_ID,
                        client_secret: CLIENT_SECRET,
                        refresh_token: refreshToken,
                        grant_type: "refresh_token"
                    }
                });
                const newAccessToken = response.data.access_token;
                console.log(newAccessToken);
                if (newAccessToken) {
                    accessToken = newAccessToken;
                    creator.accessToken = newAccessToken;
                    await creator.save();
                }
                req.headers["accessToken"] = accessToken;
                req.headers["refreshToken"] = refreshToken;
                next();
            }
        });
    } catch (error) {
        console.log("Foo error");
        console.error("Error validating tokens:", error);
        return false;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokenValidator);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;