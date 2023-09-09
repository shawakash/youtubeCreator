exports.id = 781;
exports.ids = [781];
exports.modules = {

/***/ 2622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitUser: () => (/* binding */ InitUser),
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7016);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1509);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4330);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__, ui__WEBPACK_IMPORTED_MODULE_4__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__, ui__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.Toaster, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InitUser, {
                    Component: Component,
                    pageProps: pageProps
                })
            })
        ]
    });
}
function InitUser({ Component, pageProps }) {
    const editorId = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(store__WEBPACK_IMPORTED_MODULE_5__/* .editorIdAtom */ .Di);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ui__WEBPACK_IMPORTED_MODULE_4__/* .Nav */ .JL, {
                client: "editor",
                id: editorId
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(331);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);



function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Di: () => (/* binding */ editorIdAtom),
/* harmony export */   Je: () => (/* binding */ legersAtom),
/* harmony export */   K3: () => (/* binding */ allEditVideo),
/* harmony export */   O5: () => (/* binding */ allRawVideoEditor),
/* harmony export */   Z_: () => (/* binding */ editorEditedVideos),
/* harmony export */   lp: () => (/* binding */ assignedVideosAtom)
/* harmony export */ });
/* unused harmony exports creatorIdAtom, allRawVideo, editorsRawVideoAtom */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const creatorIdAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "creatorIdAtom",
    default: null
});
const editorIdAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "editorIdAtom",
    default: null
});
const allRawVideo = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "allRawVideo",
    default: []
});
const allRawVideoEditor = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "allRawVideoEditor",
    default: []
});
const allEditVideo = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "allEditVideo",
    default: []
});
const editorEditedVideos = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "editorEditedVideos",
    default: []
});
const legersAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "legersAtom",
    default: []
});
const editorsRawVideoAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "editorsRawVideoAtom",
    default: []
});
const assignedVideosAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "assignedVideosAtom",
    default: []
});


/***/ }),

/***/ 9506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Button */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ Button auto */ 

const Button = ()=>{
    return /*#__PURE__*/ _jsx("button", {
        onClick: ()=>alert("boop"),
        children: "Boop"
    });
};


/***/ }),

/***/ 6745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Header */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Header = ({ text })=>{
    return /*#__PURE__*/ _jsx("h1", {
        children: text
    });
};


/***/ }),

/***/ 3484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ CategorySelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CategorySelect = ({ selectedCategory, onCategoryChange })=>{
    const categories = [
        {
            id: "22",
            name: "People & Blogs"
        },
        {
            id: "10",
            name: "Music"
        },
        {
            id: "23",
            name: "Comedy"
        },
        {
            id: "24",
            name: "Entertainment"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "category",
                className: "block font-medium mb-1",
                children: "Category:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    id: "category",
                    name: "category",
                    placeholder: "Select a Video Category",
                    className: "py-2 bg-transparent  focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300 rounded-md",
                    value: selectedCategory,
                    onChange: (e)=>onCategoryChange(e.target.value),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "",
                            className: "text-gray-700",
                            children: "Select a category"
                        }),
                        categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: category.id,
                                children: category.name
                            }, category.id))
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 6258:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ChatBox */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ChatBox = ({ editorId, creatorId, url, token })=>{
    const roomId = `${editorId}-${creatorId}`;
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    useEffect(()=>{
        const newSocket = io(url, {
            extraHeaders: {
                "Authorization": token
            }
        });
        setSocket(newSocket);
        newSocket.emit("join room", roomId);
        newSocket.on("chat message", (message)=>{
            setMessages((prevMessages)=>[
                    ...prevMessages,
                    message
                ]);
        });
        return ()=>{
            newSocket.emit("leave room", roomId);
            newSocket.disconnect();
        };
    }, [
        roomId
    ]);
    const sendMessage = ()=>{
        if (socket && input.trim() !== "") {
            socket.emit("chat message", input);
            setInput("");
        }
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "p-4 border border-gray-300 rounded shadow",
        children: [
            /*#__PURE__*/ _jsx("ul", {
                className: "space-y-2",
                children: messages.map((message, index)=>/*#__PURE__*/ _jsx("li", {
                        className: "bg-gray-100 p-2 rounded",
                        children: message
                    }, index))
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "mt-2",
                children: [
                    /*#__PURE__*/ _jsx("input", {
                        type: "text",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        className: "w-full px-3 py-2 border rounded",
                        placeholder: "Type a message"
                    }),
                    /*#__PURE__*/ _jsx("button", {
                        onClick: sendMessage,
                        className: "ml-2 px-4 py-2 bg-blue-500 text-white rounded",
                        children: "Send"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export EditorSelect */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4330);




const EditorSelect = ({ editors, onSelect, isSelected })=>{
    const [localEditors, setLocalEditors] = useState(editors);
    const [isEmpty, setEmpty] = useState();
    const setEditors = useSetRecoilState(editorsRawVideoAtom);
    const [value, setValue] = useState();
    useEffect(()=>{
        if (editors && editors.length > 0) {
            setLocalEditors(editors);
            // setEditors(editors)
            setEmpty(false);
        } else if (editors && editors.length == 0) {
            setEmpty(true);
        }
    }, [
        editors
    ]);
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: !isSelected && /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsxs("select", {
                    onChange: (e)=>setValue(e.target.value),
                    className: "block w-[500px] text-xl h-[60px] px-4 bg-white border border-gray-300 rounded-xl shadow-lg  hover:shadow-2xl transition-all duration-300 focus:ring-indigo-500 focus:border-indigo-500 ",
                    children: [
                        /*#__PURE__*/ _jsx("option", {
                            value: "",
                            className: "",
                            disabled: true,
                            selected: true,
                            children: editors.length > 0 ? "Select Editor For this Video:" : "Video Not Added By any Editor to its leger :("
                        }),
                        editors.map((option)=>option?.name && /*#__PURE__*/ _jsxs("option", {
                                value: option?._id,
                                children: [
                                    option?.name?.charAt(0).toUpperCase() + option?.name?.slice(1),
                                    " - @",
                                    option?.username
                                ]
                            }, option?._id))
                    ]
                }),
                /*#__PURE__*/ _jsx("button", {
                    onClick: ()=>{
                        if (value) {
                            onSelect(value);
                        }
                    },
                    className: "w-fit bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 hover:scale-105 active:scale-90 transition-all",
                    children: "Select This Editor"
                })
            ]
        })
    });
};


/***/ }),

/***/ 1738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ LegerCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const LegerCard = ({ leger, clientId })=>{
    const hasEditors = leger.editor;
    const video = leger.rawVideo;
    const handleClick = ()=>{
        const mailtoLink = `mailto:${leger.creator.email}`;
        window.location.href = mailtoLink;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-white w-[500px] shadow-lg  gap-y-2 flex flex-col hover:shadow-2xl transition-all rounded-2xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-white rounded-t-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "aspect-w-16 aspect-h-9",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                className: "w-[500px]",
                                controls: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                        src: leger.rawVideo.url,
                                        type: leger.rawVideo.contentType
                                    }),
                                    "Your browser does not support the video tag."
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/videos/raw/${leger.rawVideo._id}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-lg font-semibold",
                                children: leger.rawVideo.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500",
                                children: leger.rawVideo.description
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "text-blue-500 cursor-pointer transition-all hover:scale-105 active:scale-95",
                        onClick: handleClick,
                        children: [
                            "Creator: ",
                            leger.creator.name,
                            " (@",
                            leger.creator.username,
                            ")"
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-4 mb-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: hasEditors ? "text-green-600" : "text-red-600",
                        children: [
                            "Editor: ",
                            hasEditors ? clientId == leger.rawVideo.editor._id ? "You" : "Editor Assigned" : "None"
                        ]
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 2859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const LoginForm = ({ client = "creator", propData })=>{
    const usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleSignup = (e)=>{
        e.preventDefault();
        if (usernameRef.current !== null && passwordRef.current !== null) {
            if (usernameRef.current.value !== null && passwordRef.current.value !== null) {
                const data = {
                    username: usernameRef.current.value,
                    password: passwordRef.current.value
                };
                propData(data);
                usernameRef.current.value = "";
                passwordRef.current.value = "";
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white p-8 shadow-md rounded-md w-[450px] hover:shadow-2xl transition-all ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "text-2xl font-semibold mb-4 tracking-wide",
                children: [
                    client === "creator" ? "Creator" : "Editor",
                    " Login"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSignup,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "username",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Username"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: usernameRef,
                                type: "text",
                                id: "username",
                                className: "mt-1 px-3 py-2 block w-full border rounded-md focus:ring focus:ring-blue-300",
                                placeholder: "Enter your username",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: passwordRef,
                                type: "password",
                                id: "password",
                                className: "mt-1 px-3 py-2 block w-full border rounded-md focus:ring focus:ring-blue-300",
                                placeholder: "Enter your password",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "w-fit bg-blue-500 rounded-2xl text-white py-2 px-4 hover:bg-blue-600 hover:scale-105 active:scale-90 transition-all",
                                children: "Log In"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/signup`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hover:text-blue-500 hover:scale-105 active:scale-95 transition-all font-sans tracking-wide font-light",
                                    children: "New Here?"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 8291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);






const Nav = ({ client, id })=>{
    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (sessionStorage.getItem(`${client}Token`)) {
            setState(true);
        } else {
            setState(false);
        }
    }, [
        state,
        id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
            className: "bg-white shadow-md py-4 z-50 sticky top-0 opacity-90",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto px-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-xl font-semibold",
                                children: "Creators"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "flex space-x-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95",
                                        children: "Home"
                                    })
                                }),
                                client == "creator" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/auth`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95",
                                        children: "Auth"
                                    })
                                }),
                                client != "creator" && state && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/videos/assigned`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95",
                                        children: "Assigned"
                                    })
                                }),
                                state && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/videos/raw`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95",
                                        children: "Raw"
                                    })
                                }),
                                state && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/videos/edit`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95",
                                        children: "Edited"
                                    })
                                }),
                                client != "creator" && state && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/videos/leger`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95",
                                        children: "Leger"
                                    })
                                }),
                                state && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/videos/upload`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95",
                                        children: "Upload"
                                    })
                                }),
                                !state && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/login`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95",
                                        children: "Login"
                                    })
                                }),
                                !state && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/signup`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95",
                                        children: "Register"
                                    })
                                }),
                                state && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    onClick: ()=>{
                                        sessionStorage.clear();
                                        setState(false);
                                        navigate.push(`/login`);
                                    },
                                    className: "hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95",
                                    children: "Logout"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 9541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export PrivacyStatusSelect */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// components/PrivacyStatusSelect.js


const PrivacyStatusSelect = ({ selectedPrivacyStatus, onPrivacyStatusChange })=>{
    const privacyStatusOptions = [
        {
            value: "private",
            label: "Private"
        },
        {
            value: "public",
            label: "Public"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "privacyStatus",
                className: "block font-medium mb-1",
                children: "Privacy Status"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                    id: "privacyStatus",
                    name: "privacyStatus",
                    className: "py-2 bg-transparent  focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300 rounded-md",
                    value: selectedPrivacyStatus,
                    onChange: (e)=>onPrivacyStatusChange(e.target.value),
                    children: privacyStatusOptions.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: option.value,
                            children: option.label
                        }, option.value))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivacyStatusSelect);


/***/ }),

/***/ 6659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ SignUpForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




const SignUpForm = ({ client = "creator", propData })=>{
    const usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleSignup = (e)=>{
        e.preventDefault();
        if (usernameRef.current !== null && passwordRef.current !== null && emailRef.current !== null && nameRef.current !== null) {
            if (usernameRef.current.value !== null && passwordRef.current.value !== null && emailRef.current.value !== null && nameRef.current.value !== null) {
                const data = {
                    username: usernameRef.current.value,
                    password: passwordRef.current.value,
                    email: emailRef.current.value,
                    name: nameRef.current.value
                };
                propData(data);
                usernameRef.current.value = "";
                passwordRef.current.value = "";
                emailRef.current.value = "";
                nameRef.current.value = "";
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white p-8 shadow-md rounded-md w-[450px] hover:shadow-2xl transition-all ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "text-2xl font-semibold mb-4 tracking-wide",
                children: [
                    client === "creator" ? "Creators" : "Editors",
                    " Sign Up"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSignup,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "username",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Username"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: usernameRef,
                                type: "text",
                                id: "username",
                                className: "mt-1 px-3 py-2 block w-full border rounded-md focus:ring focus:ring-blue-300",
                                placeholder: "Enter your username",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: emailRef,
                                type: "email",
                                id: "email",
                                className: "mt-1 px-3 py-2 block w-full border rounded-md focus:ring focus:ring-blue-300",
                                placeholder: "Enter your email",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: passwordRef,
                                type: "password",
                                id: "password",
                                className: "mt-1 px-3 py-2 block w-full border rounded-md focus:ring focus:ring-blue-300",
                                placeholder: "Enter your password",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "name",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: nameRef,
                                type: "text",
                                id: "name",
                                className: "mt-1 px-3 py-2 block w-full border rounded-md focus:ring focus:ring-blue-300 transition-all",
                                placeholder: "Your Name",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "w-fit bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 hover:scale-105 active:scale-90 transition-all",
                                children: "Sign Up"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/login`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hover:text-blue-500 hover:scale-105 active:scale-95 transition-all font-sans tracking-wide font-light",
                                    children: [
                                        "Already a ",
                                        client.charAt(0).toUpperCase() + client.slice(1),
                                        "?"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Title = ({ title })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "font-semibold font-sans bg-gradient-to-tr text-transparent hover: bg-clip-text from-purple-500 to-blue-500 text-[30px] my-2",
        children: title
    });
};


/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ UpdateForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryIdSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3484);
/* harmony import */ var _PrivacySelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9541);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8362);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);





const UpdateForm = ({ propData, type, video, fileRef, client = "editor", propUpload })=>{
    const thumbnailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const descRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const deadLineDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const noteToEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const deadLineTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const tagsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [selectedFileName, setSelectedFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("No file selected");
    const [selectedPrivacyStatus, setSelectedPrivacyStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("public");
    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("22");
    const handleFileChange = (event)=>{
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setSelectedFileName(selectedFile.name);
        }
    };
    const handleCategoryChange = (category)=>{
        setSelectedCategory(category);
    // You can use the selected category in your component state or send it to an API, as needed.
    };
    const handlePrivacyStatusChange = (privacyStatus)=>{
        setSelectedPrivacyStatus(privacyStatus);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (titleRef.current !== null && thumbnailRef.current !== null && descRef.current !== null && deadLineDate.current !== null && (noteToEditor.current !== null || type == "edit") && (type == "raw" || deadLineTime.current !== null)) {
            if (titleRef.current.value !== null && thumbnailRef.current.value !== null && descRef.current.value !== null && deadLineDate.current.value !== null && (noteToEditor.current?.value !== null || type == "edit") && (type == "raw" || deadLineTime.current?.value !== null)) {
                if (type == "raw") {
                    const data = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        description: descRef.current.value,
                        deadLineDate: deadLineDate.current.value,
                        noteToEditor: noteToEditor?.current?.value || ""
                    };
                    propData(data);
                } else if (type == "edit") {
                    const data = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        description: descRef.current.value,
                        deadLineDate: deadLineDate.current.value,
                        deadLineTime: deadLineTime.current?.value
                    };
                    propData(data);
                } else if (type == "assigned") {
                    const data = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        description: descRef.current.value,
                        deadLineDate: deadLineDate.current.value,
                        deadLineTime: deadLineTime.current?.value || "12:00",
                        videoKey: video.videoKey,
                        bucketName: "creator-edit-video",
                        contentType: "video/mp4"
                    };
                    propData(data);
                }
            }
        }
    };
    function convertToYouTubeUTC(localDate, localTime) {
        const localDateTime = `${localDate} ${localTime}`;
        const localTimezone = moment_timezone__WEBPACK_IMPORTED_MODULE_4___default().tz.guess(); // Guess the local timezone
        // Convert local time to UTC
        const utcTime = moment_timezone__WEBPACK_IMPORTED_MODULE_4___default().tz(localDateTime, localTimezone).utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
        return utcTime;
    }
    const handleUpload = ()=>{
        if (titleRef.current !== null && thumbnailRef.current !== null && descRef.current !== null && deadLineDate.current !== null && deadLineTime.current !== null && selectedPrivacyStatus !== "" && selectedCategory !== "" && tagsRef.current !== null) {
            if (titleRef.current.value !== null && thumbnailRef.current.value !== null && descRef.current.value !== null && deadLineDate.current.value !== null && selectedPrivacyStatus.length > 0 && selectedCategory.length > 0 && tagsRef.current?.value !== null) {
                const publishAt = convertToYouTubeUTC(deadLineDate.current.value || video.deadLineDate, deadLineTime.current.value || video.deadLineTime);
                let data;
                if (selectedPrivacyStatus == "private") {
                    data = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        publishAt,
                        privacy: selectedPrivacyStatus,
                        category: selectedCategory,
                        description: descRef.current.value,
                        videoKey: video.videoKey,
                        bucketName: video.bucketName,
                        tags: tagsRef.current.value.split(",")
                    };
                    if (propUpload) {
                        propUpload(data);
                    }
                } else if (selectedPrivacyStatus == "public") {
                    data = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        privacy: selectedPrivacyStatus,
                        category: selectedCategory,
                        description: descRef.current.value,
                        videoKey: video.videoKey,
                        bucketName: video.bucketName,
                        tags: tagsRef.current.value.split(",")
                    };
                    if (propUpload) {
                        propUpload(data);
                    }
                }
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-white hover:shadow-2xl transition-all duration-500 w-[700px] p-6 shadow-md flex flex-col gap-y-2 rounded-md",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "font-semibold font-sans bg-gradient-to-tr text-transparent bg-clip-text from-purple-600 to-blue-300 text-[30px] my-2",
                    children: "Video Credentials"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "thumbnail",
                            className: "block font-medium mb-1",
                            children: "Thumbnail:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "thumbnail",
                            name: "thumbnail",
                            ref: thumbnailRef,
                            className: "w-full p-2 border rounded",
                            required: true,
                            readOnly: video.isUploaded,
                            defaultValue: video.thumbnail
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "title",
                            className: "block font-medium mb-1",
                            children: "Title:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "title",
                            name: "title",
                            ref: titleRef,
                            className: "w-full p-2 border rounded",
                            required: true,
                            readOnly: video.isUploaded,
                            defaultValue: video.title
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "description",
                            className: "block font-medium mb-1",
                            children: "Description:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            rows: 3,
                            defaultValue: video.description,
                            id: "description",
                            name: "description",
                            placeholder: "HTML tags accepted",
                            ref: descRef,
                            readOnly: video.isUploaded,
                            className: "w-full p-2 border rounded",
                            required: true
                        })
                    ]
                }),
                type == "edit" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "tags",
                            className: "block font-medium mb-1",
                            children: "Video Tags:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            id: "tags",
                            name: "tags",
                            ref: tagsRef,
                            readOnly: video.isUploaded,
                            className: "w-full p-2 border rounded",
                            placeholder: `Multiple Tags seperated by comma(,)`
                        })
                    ]
                }),
                type == "edit" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center gap-x-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-4 w-2/5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CategoryIdSelect__WEBPACK_IMPORTED_MODULE_2__/* .CategorySelect */ .y, {
                                selectedCategory: selectedCategory,
                                onCategoryChange: handleCategoryChange
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-4 w-2/5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PrivacySelect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                selectedPrivacyStatus: selectedPrivacyStatus,
                                onPrivacyStatusChange: handlePrivacyStatusChange
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "deadLineDate",
                                    className: "block font-medium mb-1",
                                    children: type == "edit" ? "Publish At" : "DeadLine Date:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "date",
                                    id: "deadLineDate",
                                    name: "deadLineDate",
                                    ref: deadLineDate,
                                    readOnly: video.isUploaded,
                                    defaultValue: video.deadLineDate,
                                    className: "w-full p-2 border rounded"
                                })
                            ]
                        }),
                        (type == "edit" || type == "assigned") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "timeInput",
                                    children: "When To Upload:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "time",
                                    id: "timeInput",
                                    name: "timeInput",
                                    value: "12:00",
                                    min: "00:00",
                                    max: "23:59",
                                    step: "300",
                                    ref: deadLineTime,
                                    readOnly: video.isUploaded,
                                    defaultValue: video.deadLineTime
                                })
                            ]
                        })
                    ]
                }),
                (type === "raw" || type == "assigned") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "note",
                            className: "block font-medium mb-1",
                            children: "Note For Editor:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            rows: 3,
                            id: "note",
                            name: "note",
                            ref: noteToEditor,
                            className: "w-full p-2 border rounded",
                            required: true,
                            readOnly: true,
                            defaultValue: video.noteToEditor
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                        type == "assigned" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between gap-x-4 items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "block font-medium mb-1",
                                    children: "Edited Video:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "file",
                                    accept: "video/*",
                                    id: "videoFile",
                                    name: `${type}Video`,
                                    className: "hidden",
                                    ref: fileRef,
                                    required: true,
                                    onChange: handleFileChange
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    htmlFor: "videoFile",
                                    className: "cursor-pointer block bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all",
                                    children: [
                                        selectedFileName,
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleSubmit,
                                className: "bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all",
                                children: "Update Credentials"
                            })
                        }),
                        client == "creator" && type == "edit" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleUpload,
                            className: "w-fit bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 hover:scale-105 active:scale-90 transition-all",
                            children: "Upload To Youtube"
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 9718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Upload */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Upload = ({ handleClick })=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("button", {
            onClick: handleClick,
            className: "w-fit bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 hover:scale-105 active:scale-90 transition-all",
            children: "Upload To Youtube"
        })
    });
};


/***/ }),

/***/ 7355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ UploadForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UploadForm = ({ propData, client, fileRef, type })=>{
    const thumbnailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const descRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const videoName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const deadLineDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const noteToEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const deadLineTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // const videoRef = useRef<HTMLInputElement | null>(null);
    const [selectedType, setSelectedType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("raw");
    const handleTypeChange = (event)=>{
        setSelectedType(event.target.value);
    };
    const [selectedFileName, setSelectedFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("No file selected");
    const handleFileChange = (event)=>{
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setSelectedFileName(selectedFile.name);
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (titleRef.current !== null && thumbnailRef.current !== null && descRef.current !== null && videoName.current !== null && deadLineDate.current !== null && (noteToEditor.current !== null || selectedType == "edit") && (selectedType == "raw" || deadLineTime.current !== null)) {
            if (titleRef.current.value !== null && thumbnailRef.current.value !== null && descRef.current.value !== null && videoName.current.value !== null && deadLineDate.current.value !== null && (noteToEditor.current?.value !== null || selectedType == "edit") && (selectedType == "raw" || deadLineTime.current?.value !== null)) {
                if (selectedType == "raw") {
                    const data = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        description: descRef.current.value,
                        videoKey: videoName.current.value,
                        deadLineDate: deadLineDate.current.value,
                        noteToEditor: noteToEditor?.current?.value || "",
                        bucketName: `creator-raw-videos`,
                        contentType: "video/mp4"
                    };
                    propData(data);
                } else if (selectedType == "edit") {
                    const data = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        description: descRef.current.value,
                        videoKey: videoName.current.value,
                        deadLineDate: deadLineDate.current.value,
                        deadLineTime: deadLineTime.current?.value || "12:00",
                        bucketName: `creator-edit-video`,
                        contentType: "video/mp4"
                    };
                    propData(data);
                }
                // fileRef(videoRef /);
                titleRef.current.value = "";
                thumbnailRef.current.value = "";
                descRef.current.value = "";
                videoName.current.value = "";
                deadLineDate.current.value = "";
                if (noteToEditor.current) {
                    noteToEditor.current.value = "";
                }
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit,
            className: "bg-white w-[700px] p-6 shadow-md flex flex-col gap-y-2 rounded-md",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "videoName",
                            className: "block font-medium mb-1",
                            children: "Video Name:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "videoName",
                            name: "videoName",
                            ref: videoName,
                            className: "w-full p-2 border rounded",
                            required: true,
                            readOnly: client === "editor"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "thumbnail",
                            className: "block font-medium mb-1",
                            children: "Thumbnail:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "thumbnail",
                            name: "thumbnail",
                            ref: thumbnailRef,
                            className: "w-full p-2 border rounded",
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "title",
                            className: "block font-medium mb-1",
                            children: "Title:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "title",
                            name: "title",
                            ref: titleRef,
                            className: "w-full p-2 border rounded",
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "description",
                            className: "block font-medium mb-1",
                            children: "Description:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            rows: 3,
                            id: "description",
                            name: "description",
                            ref: descRef,
                            className: "w-full p-2 border rounded",
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "deadLineDate",
                                    className: "block font-medium mb-1",
                                    children: "DeadLine Date:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "date",
                                    id: "deadLineDate",
                                    name: "deadLineDate",
                                    ref: deadLineDate,
                                    className: "w-full p-2 border rounded"
                                })
                            ]
                        }),
                        selectedType == "edit" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "timeInput",
                                    children: "When To Upload:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "time",
                                    id: "timeInput",
                                    name: "timeInput",
                                    value: "12:00",
                                    min: "00:00",
                                    max: "23:59",
                                    step: "300",
                                    ref: deadLineTime
                                })
                            ]
                        })
                    ]
                }),
                selectedType === "raw" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "note",
                            className: "block font-medium mb-1",
                            children: "Note For Editor:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            rows: 3,
                            id: "note",
                            name: "note",
                            ref: noteToEditor,
                            className: "w-full p-2 border rounded",
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "file",
                                    accept: "video/*",
                                    id: "videoFile",
                                    name: `${type}Video`,
                                    className: "hidden",
                                    ref: fileRef,
                                    required: true,
                                    onChange: handleFileChange
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    htmlFor: "videoFile",
                                    className: "cursor-pointer block bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all",
                                    children: [
                                        selectedFileName,
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-x-3 items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "type",
                                    className: "block font-medium mb-1",
                                    children: "Type:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    id: "type",
                                    name: "type",
                                    ref: type,
                                    onChange: handleTypeChange,
                                    className: "w-48 p-2 border rounded",
                                    required: true,
                                    defaultValue: "raw",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "raw",
                                            children: "Raw"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "edit",
                                            children: "Edited"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all",
                                children: "Submit"
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 9631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Video = ({ video, type = "raw", addToLeger, removeFromLeger, hasApplied })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-[600px] gap-y-3 rounded-2xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                        controls: true,
                        className: "w-full mt-rounded-2xl ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                src: video.url,
                                className: "w-[600px]",
                                type: video.contentType
                            }),
                            "Your browser does not support the video tag."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-5 flex flex-col gap-y-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl font-semibold",
                                children: video.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-600",
                                children: video.description
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-blue-500 text-lg",
                                children: [
                                    "Uploaded by: ",
                                    video.creator.name.charAt(0).toUpperCase() + video.creator.name.slice(1)
                                ]
                            }),
                            !hasApplied && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: addToLeger,
                                className: "bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all",
                                children: "Add to Leger"
                            }),
                            hasApplied && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: removeFromLeger,
                                className: "bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all",
                                children: "Remove from Leger"
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 6664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ VideoCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9998);




const VideoCard = ({ video, type = "raw", clientId, client, page = "card", onDelete })=>{
    const renderedComponent = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `bg-white ${page === "card" ? "w-[500px]" : "max-w-[800px] min-w-[600px]"} rounded-xl flex flex-col gap-y-1 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative z-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "aspect-w-16 aspect-h-9",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                className: `${page === "card" ? "w-[500px]" : "max-w-[800px] min-w-[600px]"}`,
                                controls: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                        src: video.url,
                                        type: video.contentType
                                    }),
                                    "Your browser does not support the video tag."
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-4 flex flex-col gap-y-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .D, {
                                title: video.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-lg font-medium",
                                        children: "Video Description:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `text-gray-600 ${page === "card" ? "line-clamp-3" : ""}`,
                                        children: video.description
                                    })
                                ]
                            }),
                            page !== "card" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-lg font-medium",
                                        children: "Note To Editor: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `text-gray-600 `,
                                        children: video.noteToEditor
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-blue-500 text-lg",
                                children: [
                                    "Uploader: ",
                                    clientId == video.creator._id ? "You" : (video.creator?.name)?.charAt(0).toUpperCase() + video.creator?.name?.slice(1)
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: `text-${video.editor != null ? "blue" : "red"}-500`,
                                children: [
                                    "Editor: ",
                                    clientId == video.editor?._id && video.editor ? "You" : (video.editor?.name)?.charAt(0).toUpperCase() + video.editor?.name?.slice(1)
                                ]
                            }),
                            (type === "raw" || type === "assigned") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: video.isEdited ? `text-green-500` : `text-red-500`,
                                children: [
                                    "Status: ",
                                    video.isUploaded ? "Uploaded" : video.isEdited ? "Edited" : "Not Edited"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-gray-600",
                                children: [
                                    "DeadLine:  ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: video.deadLineDate
                                    })
                                ]
                            }),
                            (type === "edit" || type === "assigned") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: video.isUploaded ? `text-blue-500` : `text-red-500`,
                                children: [
                                    "Status: ",
                                    video.isUploaded ? "Uploaded" : "Not Uploaded"
                                ]
                            }),
                            client === "creator" && page === "video" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: onDelete,
                                className: "w-fit bg-blue-500 text-white py-2 px-4 rounded-2xl mt-1 hover:bg-blue-600 hover:scale-105 active:scale-90 transition-all",
                                children: "Delete Video"
                            })
                        ]
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: page === "card" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/videos/${type}/${video._id}`,
            children: renderedComponent()
        }) : renderedComponent()
    });
};


/***/ }),

/***/ 2995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JL: () => (/* reexport safe */ _Nav__WEBPACK_IMPORTED_MODULE_4__.J),
/* harmony export */   MX: () => (/* reexport safe */ _UpdateForm__WEBPACK_IMPORTED_MODULE_7__.M),
/* harmony export */   Sx: () => (/* reexport safe */ _LegerCard__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   U0: () => (/* reexport safe */ _LoginForm__WEBPACK_IMPORTED_MODULE_1__.U),
/* harmony export */   WS: () => (/* reexport safe */ _SignupForm__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   cB: () => (/* reexport safe */ _VideoCard__WEBPACK_IMPORTED_MODULE_2__.c),
/* harmony export */   kj: () => (/* reexport safe */ _UploadForm__WEBPACK_IMPORTED_MODULE_6__.k),
/* harmony export */   nk: () => (/* reexport safe */ _Video__WEBPACK_IMPORTED_MODULE_3__.n)
/* harmony export */ });
/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6659);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2859);
/* harmony import */ var _VideoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6664);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9631);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8291);
/* harmony import */ var _LegerCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1738);
/* harmony import */ var _UploadForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7355);
/* harmony import */ var _UpdateForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3104);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9998);
/* harmony import */ var _EditorSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5992);
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9718);
/* harmony import */ var _CategoryIdSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3484);
/* harmony import */ var _PrivacySelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9541);
/* harmony import */ var _ChatBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6258);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatBox__WEBPACK_IMPORTED_MODULE_13__]);
_ChatBox__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JL: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__.JL),
/* harmony export */   MX: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__.MX),
/* harmony export */   Sx: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__.Sx),
/* harmony export */   U0: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__.U0),
/* harmony export */   WS: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__.WS),
/* harmony export */   cB: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__.cB),
/* harmony export */   kj: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__.kj),
/* harmony export */   nk: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__.nk)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3283);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9506);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6745);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2995);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7016:
/***/ (() => {



/***/ }),

/***/ 3283:
/***/ (() => {



/***/ })

};
;