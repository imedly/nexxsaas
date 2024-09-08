"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/stripe/checkout-session/route";
exports.ids = ["app/api/stripe/checkout-session/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcheckout-session%2Froute&page=%2Fapi%2Fstripe%2Fcheckout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcheckout-session%2Froute.ts&appDir=C%3A%5CUsers%5Ciddou%5CDesktop%5Csaas%5Cnexx-saas%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ciddou%5CDesktop%5Csaas%5Cnexx-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcheckout-session%2Froute&page=%2Fapi%2Fstripe%2Fcheckout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcheckout-session%2Froute.ts&appDir=C%3A%5CUsers%5Ciddou%5CDesktop%5Csaas%5Cnexx-saas%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ciddou%5CDesktop%5Csaas%5Cnexx-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_iddou_Desktop_saas_nexx_saas_app_api_stripe_checkout_session_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/stripe/checkout-session/route.ts */ \"(rsc)/./app/api/stripe/checkout-session/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/stripe/checkout-session/route\",\n        pathname: \"/api/stripe/checkout-session\",\n        filename: \"route\",\n        bundlePath: \"app/api/stripe/checkout-session/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\iddou\\\\Desktop\\\\saas\\\\nexx-saas\\\\app\\\\api\\\\stripe\\\\checkout-session\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_iddou_Desktop_saas_nexx_saas_app_api_stripe_checkout_session_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/stripe/checkout-session/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdHJpcGUlMkZjaGVja291dC1zZXNzaW9uJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzdHJpcGUlMkZjaGVja291dC1zZXNzaW9uJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3RyaXBlJTJGY2hlY2tvdXQtc2Vzc2lvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNpZGRvdSU1Q0Rlc2t0b3AlNUNzYWFzJTVDbmV4eC1zYWFzJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNpZGRvdSU1Q0Rlc2t0b3AlNUNzYWFzJTVDbmV4eC1zYWFzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN3QztBQUNySDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYXMtZGFzaGJvYXJkLz83OTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGlkZG91XFxcXERlc2t0b3BcXFxcc2Fhc1xcXFxuZXh4LXNhYXNcXFxcYXBwXFxcXGFwaVxcXFxzdHJpcGVcXFxcY2hlY2tvdXQtc2Vzc2lvblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc3RyaXBlL2NoZWNrb3V0LXNlc3Npb24vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdHJpcGUvY2hlY2tvdXQtc2Vzc2lvblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3RyaXBlL2NoZWNrb3V0LXNlc3Npb24vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxpZGRvdVxcXFxEZXNrdG9wXFxcXHNhYXNcXFxcbmV4eC1zYWFzXFxcXGFwcFxcXFxhcGlcXFxcc3RyaXBlXFxcXGNoZWNrb3V0LXNlc3Npb25cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3N0cmlwZS9jaGVja291dC1zZXNzaW9uL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcheckout-session%2Froute&page=%2Fapi%2Fstripe%2Fcheckout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcheckout-session%2Froute.ts&appDir=C%3A%5CUsers%5Ciddou%5CDesktop%5Csaas%5Cnexx-saas%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ciddou%5CDesktop%5Csaas%5Cnexx-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/stripe/checkout-session/route.ts":
/*!**************************************************!*\
  !*** ./app/api/stripe/checkout-session/route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/stripe */ \"(rsc)/./lib/stripe.ts\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db */ \"(rsc)/./db/index.ts\");\n/* harmony import */ var _db_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/db/schema */ \"(rsc)/./db/schema.ts\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/sql/expressions/conditions.js\");\n\n\n\n\n\nasync function POST(req) {\n    const { price, quantity = 1 } = await req.json();\n    const { userId } = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__.auth)();\n    if (!userId) {\n        return new Response(JSON.stringify({\n            error: \"Unauthorized\"\n        }), {\n            status: 401\n        });\n    }\n    const userSubscription = await _db__WEBPACK_IMPORTED_MODULE_1__.db.query.subscriptions.findFirst({\n        where: (0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.eq)(_db_schema__WEBPACK_IMPORTED_MODULE_2__.subscriptions.userId, userId)\n    });\n    let customer;\n    if (userSubscription) {\n        // get the stripe customer\n        customer = {\n            id: userSubscription.stripeCustomerId\n        };\n    } else {\n        // create user subscription\n        const customerData = {\n            metadata: {\n                dbId: userId\n            }\n        };\n        const response = await _lib_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.customers.create(customerData);\n        customer = {\n            id: response.id\n        };\n        await _db__WEBPACK_IMPORTED_MODULE_1__.db.insert(_db_schema__WEBPACK_IMPORTED_MODULE_2__.subscriptions).values({\n            userId,\n            stripeCustomerId: customer.id\n        });\n    }\n    const baseUrl = \"http://localhost:3000/\" || 0;\n    if (!customer?.id) {\n        return new Response(JSON.stringify({\n            error: \"Failed to get a customer id\"\n        }), {\n            status: 500\n        });\n    }\n    try {\n        const session = await _lib_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({\n            success_url: `${baseUrl}/payments/checkout-success`,\n            customer: customer?.id,\n            payment_method_types: [\n                \"card\"\n            ],\n            mode: \"subscription\",\n            line_items: [\n                {\n                    price,\n                    quantity\n                }\n            ]\n        });\n        if (session) {\n            return new Response(JSON.stringify({\n                sessionId: session.id\n            }), {\n                status: 200\n            });\n        } else {\n            return new Response(JSON.stringify({\n                error: \"Failed to create a session\"\n            }), {\n                status: 500\n            });\n        }\n    } catch (error) {\n        console.error(error);\n        return new Response(JSON.stringify({\n            error: \"Failed to create a session\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N0cmlwZS9jaGVja291dC1zZXNzaW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUNNO0FBQ2xCO0FBQ2tCO0FBQ1g7QUFFMUIsZUFBZUssS0FBS0MsR0FBWTtJQUNyQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxNQUFNRixJQUFJRyxJQUFJO0lBQzlDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdULDBEQUFJQTtJQUV2QixJQUFJLENBQUNTLFFBQVE7UUFDWCxPQUFPLElBQUlDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQWUsSUFBSTtZQUFFQyxRQUFRO1FBQUk7SUFDL0U7SUFFQSxNQUFNQyxtQkFBbUIsTUFBTWQsbUNBQUVBLENBQUNlLEtBQUssQ0FBQ2QsYUFBYSxDQUFDZSxTQUFTLENBQUM7UUFDOURDLE9BQU9mLCtDQUFFQSxDQUFDRCxxREFBYUEsQ0FBQ08sTUFBTSxFQUFFQTtJQUNsQztJQUNBLElBQUlVO0lBQ0osSUFBSUosa0JBQWtCO1FBQ3BCLDBCQUEwQjtRQUMxQkksV0FBVztZQUNUQyxJQUFJTCxpQkFBaUJNLGdCQUFnQjtRQUN2QztJQUNGLE9BQU87UUFDTCwyQkFBMkI7UUFDM0IsTUFBTUMsZUFJRjtZQUNGQyxVQUFVO2dCQUNSQyxNQUFNZjtZQUNSO1FBQ0Y7UUFFQSxNQUFNZ0IsV0FBVyxNQUFNMUIsK0NBQU1BLENBQUMyQixTQUFTLENBQUNDLE1BQU0sQ0FBQ0w7UUFFL0NILFdBQVc7WUFBRUMsSUFBSUssU0FBU0wsRUFBRTtRQUFDO1FBRTdCLE1BQU1uQixtQ0FBRUEsQ0FBQzJCLE1BQU0sQ0FBQzFCLHFEQUFhQSxFQUFFMkIsTUFBTSxDQUFDO1lBQ3BDcEI7WUFDQVksa0JBQWtCRixTQUFTQyxFQUFFO1FBQy9CO0lBQ0Y7SUFFQSxNQUFNVSxVQUFVQyx3QkFBZ0MsSUFBSSxDQUF1QjtJQUUzRSxJQUFJLENBQUNaLFVBQVVDLElBQUk7UUFDakIsT0FBTyxJQUFJVixTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsT0FBTztRQUE4QixJQUFJO1lBQUVDLFFBQVE7UUFBSTtJQUM5RjtJQUVBLElBQUk7UUFDRixNQUFNb0IsVUFBVSxNQUFNbkMsK0NBQU1BLENBQUNvQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ1QsTUFBTSxDQUFDO1lBQ3BEVSxhQUFhLENBQUMsRUFBRVAsUUFBUSwwQkFBMEIsQ0FBQztZQUNuRFgsVUFBVUEsVUFBVUM7WUFDcEJrQixzQkFBc0I7Z0JBQUM7YUFBTztZQUM5QkMsTUFBTTtZQUNOQyxZQUFZO2dCQUNWO29CQUNFbEM7b0JBQ0FDO2dCQUNGO2FBQ0Q7UUFDSDtRQUVBLElBQUkyQixTQUFTO1lBQ1gsT0FBTyxJQUFJeEIsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFNkIsV0FBV1AsUUFBUWQsRUFBRTtZQUFDLElBQUk7Z0JBQUVOLFFBQVE7WUFBSTtRQUMvRSxPQUFPO1lBQ0wsT0FBTyxJQUFJSixTQUFTQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLE9BQU87WUFBNkIsSUFBSTtnQkFBRUMsUUFBUTtZQUFJO1FBQzdGO0lBQ0YsRUFBRSxPQUFPRCxPQUFPO1FBQ2Q2QixRQUFRN0IsS0FBSyxDQUFDQTtRQUNkLE9BQU8sSUFBSUgsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBNkIsSUFBSTtZQUFFQyxRQUFRO1FBQUk7SUFDN0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYXMtZGFzaGJvYXJkLy4vYXBwL2FwaS9zdHJpcGUvY2hlY2tvdXQtc2Vzc2lvbi9yb3V0ZS50cz9hMmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmlwZSB9IGZyb20gXCJAL2xpYi9zdHJpcGVcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAY2xlcmsvbmV4dGpzL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2RiXCI7XHJcbmltcG9ydCB7IHN1YnNjcmlwdGlvbnMgfSBmcm9tIFwiQC9kYi9zY2hlbWFcIjtcclxuaW1wb3J0IHsgZXEgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIGNvbnN0IHsgcHJpY2UsIHF1YW50aXR5ID0gMSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gYXV0aCgpO1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0pLCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlclN1YnNjcmlwdGlvbiA9IGF3YWl0IGRiLnF1ZXJ5LnN1YnNjcmlwdGlvbnMuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiBlcShzdWJzY3JpcHRpb25zLnVzZXJJZCwgdXNlcklkKSxcclxuICB9KTtcclxuICBsZXQgY3VzdG9tZXI7XHJcbiAgaWYgKHVzZXJTdWJzY3JpcHRpb24pIHtcclxuICAgIC8vIGdldCB0aGUgc3RyaXBlIGN1c3RvbWVyXHJcbiAgICBjdXN0b21lciA9IHtcclxuICAgICAgaWQ6IHVzZXJTdWJzY3JpcHRpb24uc3RyaXBlQ3VzdG9tZXJJZCxcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGNyZWF0ZSB1c2VyIHN1YnNjcmlwdGlvblxyXG4gICAgY29uc3QgY3VzdG9tZXJEYXRhOiB7XHJcbiAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgZGJJZDogc3RyaW5nO1xyXG4gICAgICB9O1xyXG4gICAgfSA9IHtcclxuICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICBkYklkOiB1c2VySWQsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5jcmVhdGUoY3VzdG9tZXJEYXRhKTtcclxuXHJcbiAgICBjdXN0b21lciA9IHsgaWQ6IHJlc3BvbnNlLmlkIH07XHJcblxyXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHN1YnNjcmlwdGlvbnMpLnZhbHVlcyh7XHJcbiAgICAgIHVzZXJJZCxcclxuICAgICAgc3RyaXBlQ3VzdG9tZXJJZDogY3VzdG9tZXIuaWQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuICBpZiAoIWN1c3RvbWVyPy5pZCkge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIkZhaWxlZCB0byBnZXQgYSBjdXN0b21lciBpZFwiIH0pLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcclxuICAgICAgc3VjY2Vzc191cmw6IGAke2Jhc2VVcmx9L3BheW1lbnRzL2NoZWNrb3V0LXN1Y2Nlc3NgLFxyXG4gICAgICBjdXN0b21lcjogY3VzdG9tZXI/LmlkLFxyXG4gICAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcclxuICAgICAgbW9kZTogXCJzdWJzY3JpcHRpb25cIixcclxuICAgICAgbGluZV9pdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBzZXNzaW9uSWQ6IHNlc3Npb24uaWQgfSksIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhIHNlc3Npb25cIiB9KSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhIHNlc3Npb25cIiB9KSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInN0cmlwZSIsImF1dGgiLCJkYiIsInN1YnNjcmlwdGlvbnMiLCJlcSIsIlBPU1QiLCJyZXEiLCJwcmljZSIsInF1YW50aXR5IiwianNvbiIsInVzZXJJZCIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic3RhdHVzIiwidXNlclN1YnNjcmlwdGlvbiIsInF1ZXJ5IiwiZmluZEZpcnN0Iiwid2hlcmUiLCJjdXN0b21lciIsImlkIiwic3RyaXBlQ3VzdG9tZXJJZCIsImN1c3RvbWVyRGF0YSIsIm1ldGFkYXRhIiwiZGJJZCIsInJlc3BvbnNlIiwiY3VzdG9tZXJzIiwiY3JlYXRlIiwiaW5zZXJ0IiwidmFsdWVzIiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwic3VjY2Vzc191cmwiLCJwYXltZW50X21ldGhvZF90eXBlcyIsIm1vZGUiLCJsaW5lX2l0ZW1zIiwic2Vzc2lvbklkIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/stripe/checkout-session/route.ts\n");

/***/ }),

/***/ "(rsc)/./db/index.ts":
/*!*********************!*\
  !*** ./db/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_postgres_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/postgres-js */ \"(rsc)/./node_modules/drizzle-orm/postgres-js/driver.js\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postgres */ \"(rsc)/./node_modules/postgres/src/index.js\");\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ \"(rsc)/./db/schema.ts\");\n\n\n\nconst connectionString = process.env.DATABASE_URL || \"postgres://localhost:5432/drizzle\";\nconst client = (0,postgres__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(connectionString);\nconst db = (0,drizzle_orm_postgres_js__WEBPACK_IMPORTED_MODULE_2__.drizzle)(client, {\n    schema: _schema__WEBPACK_IMPORTED_MODULE_1__\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9kYi9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQ2xCO0FBQ0c7QUFFbkMsTUFBTUcsbUJBQW1CQyxRQUFRQyxHQUFHLENBQUNDLFlBQVksSUFBSTtBQUVyRCxNQUFNQyxTQUFTTixvREFBUUEsQ0FBQ0U7QUFDakIsTUFBTUssS0FBS1IsZ0VBQU9BLENBQUNPLFFBQVE7SUFBRUwsTUFBTUEsc0NBQUFBO0FBQUMsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYXMtZGFzaGJvYXJkLy4vZGIvaW5kZXgudHM/YmE3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkcml6emxlIH0gZnJvbSBcImRyaXp6bGUtb3JtL3Bvc3RncmVzLWpzXCI7XHJcbmltcG9ydCBwb3N0Z3JlcyBmcm9tIFwicG9zdGdyZXNcIjtcclxuaW1wb3J0ICogYXMgc2NoZW1hIGZyb20gXCIuL3NjaGVtYVwiO1xyXG5cclxuY29uc3QgY29ubmVjdGlvblN0cmluZyA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB8fCBcInBvc3RncmVzOi8vbG9jYWxob3N0OjU0MzIvZHJpenpsZVwiO1xyXG5cclxuY29uc3QgY2xpZW50ID0gcG9zdGdyZXMoY29ubmVjdGlvblN0cmluZyk7XHJcbmV4cG9ydCBjb25zdCBkYiA9IGRyaXp6bGUoY2xpZW50LCB7IHNjaGVtYSB9KTtcclxuIl0sIm5hbWVzIjpbImRyaXp6bGUiLCJwb3N0Z3JlcyIsInNjaGVtYSIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwiY2xpZW50IiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./db/index.ts\n");

/***/ }),

/***/ "(rsc)/./db/schema.ts":
/*!**********************!*\
  !*** ./db/schema.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   feedbacks: () => (/* binding */ feedbacks),\n/* harmony export */   feedbacksRelations: () => (/* binding */ feedbacksRelations),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   projectsRelations: () => (/* binding */ projectsRelations),\n/* harmony export */   subscriptions: () => (/* binding */ subscriptions)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/table.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/serial.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/text.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/varchar.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/integer.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/boolean.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/relations.js\");\n\n\nconst projects = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"projects\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)(\"id\").primaryKey(),\n    name: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"name\"),\n    description: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"description\"),\n    url: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"url\"),\n    userId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.varchar)(\"user_id\")\n});\nconst projectsRelations = (0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.relations)(projects, ({ many })=>({\n        feedbacks: many(feedbacks)\n    }));\nconst feedbacks = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"feedbacks\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)(\"id\").primaryKey(),\n    projectId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__.integer)(\"project_id\"),\n    userName: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"user_name\"),\n    userEmail: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"user_email\"),\n    message: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"message\"),\n    rating: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__.integer)(\"rating\")\n});\nconst feedbacksRelations = (0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.relations)(feedbacks, ({ one })=>({\n        project: one(projects, {\n            fields: [\n                feedbacks.projectId\n            ],\n            references: [\n                projects.id\n            ]\n        })\n    }));\nconst subscriptions = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"subscriptions\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)(\"id\").primaryKey(),\n    userId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.varchar)(\"user_id\"),\n    stripeCustomerId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"stripe_customer_id\"),\n    stripeSubscriptionId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"stripe_subscription_id\"),\n    subscribed: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_6__.boolean)(\"subscribed\")\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9kYi9zY2hlbWEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVGO0FBQy9DO0FBRWpDLE1BQU1PLFdBQVdQLDREQUFPQSxDQUFDLFlBQVk7SUFDMUNRLElBQUlQLDJEQUFNQSxDQUFDLE1BQU1RLFVBQVU7SUFDM0JDLE1BQU1SLHlEQUFJQSxDQUFDO0lBQ1hTLGFBQWFULHlEQUFJQSxDQUFDO0lBQ2xCVSxLQUFLVix5REFBSUEsQ0FBQztJQUNWVyxRQUFRViw0REFBT0EsQ0FBQztBQUNsQixHQUFHO0FBRUksTUFBTVcsb0JBQW9CUixzREFBU0EsQ0FBQ0MsVUFBVSxDQUFDLEVBQUVRLElBQUksRUFBRSxHQUFNO1FBQ2xFQyxXQUFXRCxLQUFLQztJQUNsQixJQUFJO0FBRUcsTUFBTUEsWUFBWWhCLDREQUFPQSxDQUFDLGFBQWE7SUFDNUNRLElBQUlQLDJEQUFNQSxDQUFDLE1BQU1RLFVBQVU7SUFDM0JRLFdBQVdiLDREQUFPQSxDQUFDO0lBQ25CYyxVQUFVaEIseURBQUlBLENBQUM7SUFDZmlCLFdBQVdqQix5REFBSUEsQ0FBQztJQUNoQmtCLFNBQVNsQix5REFBSUEsQ0FBQztJQUNkbUIsUUFBUWpCLDREQUFPQSxDQUFDO0FBQ2xCLEdBQUc7QUFFSSxNQUFNa0IscUJBQXFCaEIsc0RBQVNBLENBQUNVLFdBQVcsQ0FBQyxFQUFFTyxHQUFHLEVBQUUsR0FBTTtRQUNuRUMsU0FBU0QsSUFBSWhCLFVBQVU7WUFDckJrQixRQUFRO2dCQUFDVCxVQUFVQyxTQUFTO2FBQUM7WUFDN0JTLFlBQVk7Z0JBQUNuQixTQUFTQyxFQUFFO2FBQUM7UUFDM0I7SUFDRixJQUFJO0FBRUcsTUFBTW1CLGdCQUFnQjNCLDREQUFPQSxDQUFDLGlCQUFpQjtJQUNwRFEsSUFBSVAsMkRBQU1BLENBQUMsTUFBTVEsVUFBVTtJQUMzQkksUUFBUVYsNERBQU9BLENBQUM7SUFDaEJ5QixrQkFBa0IxQix5REFBSUEsQ0FBQztJQUN2QjJCLHNCQUFzQjNCLHlEQUFJQSxDQUFDO0lBQzNCNEIsWUFBWXpCLDREQUFPQSxDQUFDO0FBQ3RCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWFzLWRhc2hib2FyZC8uL2RiL3NjaGVtYS50cz8xYTI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBnVGFibGUsIHNlcmlhbCwgdGV4dCwgdmFyY2hhciwgaW50ZWdlciwgYm9vbGVhbiB9IGZyb20gXCJkcml6emxlLW9ybS9wZy1jb3JlXCI7XHJcbmltcG9ydCB7IHJlbGF0aW9ucyB9IGZyb20gXCJkcml6emxlLW9ybVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gcGdUYWJsZShcInByb2plY3RzXCIsIHtcclxuICBpZDogc2VyaWFsKFwiaWRcIikucHJpbWFyeUtleSgpLFxyXG4gIG5hbWU6IHRleHQoXCJuYW1lXCIpLFxyXG4gIGRlc2NyaXB0aW9uOiB0ZXh0KFwiZGVzY3JpcHRpb25cIiksXHJcbiAgdXJsOiB0ZXh0KFwidXJsXCIpLFxyXG4gIHVzZXJJZDogdmFyY2hhcihcInVzZXJfaWRcIiksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzUmVsYXRpb25zID0gcmVsYXRpb25zKHByb2plY3RzLCAoeyBtYW55IH0pID0+ICh7XHJcbiAgZmVlZGJhY2tzOiBtYW55KGZlZWRiYWNrcyksXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZWVkYmFja3MgPSBwZ1RhYmxlKFwiZmVlZGJhY2tzXCIsIHtcclxuICBpZDogc2VyaWFsKFwiaWRcIikucHJpbWFyeUtleSgpLFxyXG4gIHByb2plY3RJZDogaW50ZWdlcihcInByb2plY3RfaWRcIiksXHJcbiAgdXNlck5hbWU6IHRleHQoXCJ1c2VyX25hbWVcIiksXHJcbiAgdXNlckVtYWlsOiB0ZXh0KFwidXNlcl9lbWFpbFwiKSxcclxuICBtZXNzYWdlOiB0ZXh0KFwibWVzc2FnZVwiKSxcclxuICByYXRpbmc6IGludGVnZXIoXCJyYXRpbmdcIiksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZlZWRiYWNrc1JlbGF0aW9ucyA9IHJlbGF0aW9ucyhmZWVkYmFja3MsICh7IG9uZSB9KSA9PiAoe1xyXG4gIHByb2plY3Q6IG9uZShwcm9qZWN0cywge1xyXG4gICAgZmllbGRzOiBbZmVlZGJhY2tzLnByb2plY3RJZF0sXHJcbiAgICByZWZlcmVuY2VzOiBbcHJvamVjdHMuaWRdLFxyXG4gIH0pLFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IHBnVGFibGUoXCJzdWJzY3JpcHRpb25zXCIsIHtcclxuICBpZDogc2VyaWFsKFwiaWRcIikucHJpbWFyeUtleSgpLFxyXG4gIHVzZXJJZDogdmFyY2hhcihcInVzZXJfaWRcIiksXHJcbiAgc3RyaXBlQ3VzdG9tZXJJZDogdGV4dChcInN0cmlwZV9jdXN0b21lcl9pZFwiKSxcclxuICBzdHJpcGVTdWJzY3JpcHRpb25JZDogdGV4dChcInN0cmlwZV9zdWJzY3JpcHRpb25faWRcIiksXHJcbiAgc3Vic2NyaWJlZDogYm9vbGVhbihcInN1YnNjcmliZWRcIiksXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsicGdUYWJsZSIsInNlcmlhbCIsInRleHQiLCJ2YXJjaGFyIiwiaW50ZWdlciIsImJvb2xlYW4iLCJyZWxhdGlvbnMiLCJwcm9qZWN0cyIsImlkIiwicHJpbWFyeUtleSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVybCIsInVzZXJJZCIsInByb2plY3RzUmVsYXRpb25zIiwibWFueSIsImZlZWRiYWNrcyIsInByb2plY3RJZCIsInVzZXJOYW1lIiwidXNlckVtYWlsIiwibWVzc2FnZSIsInJhdGluZyIsImZlZWRiYWNrc1JlbGF0aW9ucyIsIm9uZSIsInByb2plY3QiLCJmaWVsZHMiLCJyZWZlcmVuY2VzIiwic3Vic2NyaXB0aW9ucyIsInN0cmlwZUN1c3RvbWVySWQiLCJzdHJpcGVTdWJzY3JpcHRpb25JZCIsInN1YnNjcmliZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./db/schema.ts\n");

/***/ }),

/***/ "(rsc)/./lib/stripe.ts":
/*!***********************!*\
  !*** ./lib/stripe.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stripe: () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_SECRET_KEY || \" \", {\n    apiVersion: \"2024-06-20\",\n    typescript: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3RyaXBlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRCO0FBRXJCLE1BQU1DLFNBQVMsSUFBSUQsOENBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCLElBQUksS0FBSztJQUNyRUMsWUFBWTtJQUNaQyxZQUFZO0FBQ2QsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYXMtZGFzaGJvYXJkLy4vbGliL3N0cmlwZS50cz8wZTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkgfHwgXCIgXCIsIHtcclxuICBhcGlWZXJzaW9uOiBcIjIwMjQtMDYtMjBcIixcclxuICB0eXBlc2NyaXB0OiB0cnVlLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImFwaVZlcnNpb24iLCJ0eXBlc2NyaXB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/stripe.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@clerk","vendor-chunks/crypto-js","vendor-chunks/tslib","vendor-chunks/cookie","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case","vendor-chunks/drizzle-orm","vendor-chunks/postgres","vendor-chunks/stripe","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/function-bind","vendor-chunks/call-bind","vendor-chunks/side-channel","vendor-chunks/set-function-length","vendor-chunks/hasown","vendor-chunks/has-proto","vendor-chunks/has-property-descriptors","vendor-chunks/gopd","vendor-chunks/get-intrinsic","vendor-chunks/es-define-property","vendor-chunks/define-data-property"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe%2Fcheckout-session%2Froute&page=%2Fapi%2Fstripe%2Fcheckout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Fcheckout-session%2Froute.ts&appDir=C%3A%5CUsers%5Ciddou%5CDesktop%5Csaas%5Cnexx-saas%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ciddou%5CDesktop%5Csaas%5Cnexx-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();