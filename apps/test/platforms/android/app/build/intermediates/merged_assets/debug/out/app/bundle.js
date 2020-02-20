require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../../../packages/runtime/dist/runtime.esm-bundler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dumpOps", function() { return dumpOps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logNodeOp", function() { return logNodeOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeOps", function() { return nodeOps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetOps", function() { return resetOps; });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReactive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["isReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["isReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["isRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markNonReactive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["markNonReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markReadonly", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["markReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["reactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["readonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["shallowReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRaw", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseTransition", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Comment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeepAlive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["KeepAlive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Portal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Suspense"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callWithAsyncErrorHandling", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["callWithAsyncErrorHandling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callWithErrorHandling", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["callWithErrorHandling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["camelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["cloneVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["computed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBlock", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCommentVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHydrationRenderer", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createHydrationRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSlots", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStaticVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createStaticVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["defineComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["handleError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["mergeProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onActivated", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onActivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onBeforeMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onBeforeUnmount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onBeforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onDeactivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onErrorCaptured"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMounted", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onMounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRenderTracked", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onRenderTracked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRenderTriggered", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onRenderTriggered"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdated", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBlock", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["openBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popScopeId", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["popScopeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["provide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushScopeId", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRuntimeCompiler", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["registerRuntimeCompiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderList", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["renderList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderSlot", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["renderSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveDirective", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["resolveDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveDynamicComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["resolveDynamicComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveTransitionHooks", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["resolveTransitionHooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBlockTracking", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["setBlockTracking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTransitionHooks", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["setTransitionHooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrContextKey", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["ssrContextKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrUtils", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["ssrUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDisplayString", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHandlers", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toHandlers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCSSModule", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["useCSSModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSSRContext", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["useSSRContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransitionState", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["useTransitionState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDirectives", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["withDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScopeId", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["withScopeId"]; });

/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");



let nodeId = 0;
let recordedNodeOps = [];

function logNodeOp(op) {
  recordedNodeOps.push(op);
}

function resetOps() {
  recordedNodeOps = [];
}

function dumpOps() {
  const ops = recordedNodeOps.slice();
  resetOps();
  return ops;
}

function createElement(tag) {
  const node = {
    id: nodeId++,
    type: "element"
    /* ELEMENT */
    ,
    tag,
    children: [],
    props: {},
    parentNode: null,
    eventListeners: null
  };
  logNodeOp({
    type: "create"
    /* CREATE */
    ,
    nodeType: "element"
    /* ELEMENT */
    ,
    targetNode: node,
    tag
  }); // avoid test nodes from being observed

  Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__["markNonReactive"])(node);
  return node;
}

function createText(text) {
  const node = {
    id: nodeId++,
    type: "text"
    /* TEXT */
    ,
    text,
    parentNode: null
  };
  logNodeOp({
    type: "create"
    /* CREATE */
    ,
    nodeType: "text"
    /* TEXT */
    ,
    targetNode: node,
    text
  }); // avoid test nodes from being observed

  Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__["markNonReactive"])(node);
  return node;
}

function createComment(text) {
  const node = {
    id: nodeId++,
    type: "comment"
    /* COMMENT */
    ,
    text,
    parentNode: null
  };
  logNodeOp({
    type: "create"
    /* CREATE */
    ,
    nodeType: "comment"
    /* COMMENT */
    ,
    targetNode: node,
    text
  }); // avoid test nodes from being observed

  Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__["markNonReactive"])(node);
  return node;
}

function setText(node, text) {
  logNodeOp({
    type: "setText"
    /* SET_TEXT */
    ,
    targetNode: node,
    text
  });
  node.text = text;
}

function insert(child, parent, ref) {
  let refIndex;

  if (ref != null) {
    refIndex = parent.children.indexOf(ref);

    if (refIndex === -1) {
      console.error('ref: ', ref);
      console.error('parent: ', parent);
      throw new Error('ref is not a child of parent');
    }
  }

  logNodeOp({
    type: "insert"
    /* INSERT */
    ,
    targetNode: child,
    parentNode: parent,
    refNode: ref
  }); // remove the node first, but don't log it as a REMOVE op

  remove(child, false); // re-calculate the ref index because the child's removal may have affected it

  refIndex = ref ? parent.children.indexOf(ref) : -1;

  if (refIndex === -1) {
    parent.children.push(child);
    child.parentNode = parent;
  } else {
    parent.children.splice(refIndex, 0, child);
    child.parentNode = parent;
  }
}

function remove(child, logOp = true) {
  const parent = child.parentNode;

  if (parent != null) {
    if (logOp) {
      logNodeOp({
        type: "remove"
        /* REMOVE */
        ,
        targetNode: child,
        parentNode: parent
      });
    }

    const i = parent.children.indexOf(child);

    if (i > -1) {
      parent.children.splice(i, 1);
    } else {
      console.error('target: ', child);
      console.error('parent: ', parent);
      throw Error('target is not a childNode of parent');
    }

    child.parentNode = null;
  }
}

function setElementText(el, text) {
  logNodeOp({
    type: "setElementText"
    /* SET_ELEMENT_TEXT */
    ,
    targetNode: el,
    text
  });
  el.children.forEach(c => {
    c.parentNode = null;
  });

  if (!text) {
    el.children = [];
  } else {
    el.children = [{
      id: nodeId++,
      type: "text"
      /* TEXT */
      ,
      text,
      parentNode: el
    }];
  }
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  const parent = node.parentNode;

  if (!parent) {
    return null;
  }

  const i = parent.children.indexOf(node);
  return parent.children[i + 1] || null;
}

function querySelector() {
  throw new Error('querySelector not supported in test renderer.');
}

function setScopeId(el, id) {
  el.props[id] = '';
}

const nodeOps = {
  insert,
  remove,
  createElement,
  createText,
  createComment,
  setText,
  setElementText,
  parentNode,
  nextSibling,
  querySelector,
  setScopeId
};
const EMPTY_OBJ =  true ? Object.freeze({}) : undefined;

const isOn = key => key[0] === 'o' && key[1] === 'n';

function patchProp(el, key, nextValue, prevValue) {
  logNodeOp({
    type: "patch"
    /* PATCH */
    ,
    targetNode: el,
    propKey: key,
    propPrevValue: prevValue,
    propNextValue: nextValue
  });
  el.props[key] = nextValue;

  if (isOn(key)) {
    const event = key.slice(2).toLowerCase();
    (el.eventListeners || (el.eventListeners = {}))[event] = nextValue;
  }
}

const {
  render: baseRender,
  createApp: baseCreateApp
} = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createRenderer"])({
  patchProp,
  ...nodeOps
});
const render = baseRender;
const createApp = baseCreateApp;


/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_vue_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../packages/runtime/dist/runtime.esm-bundler.js");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        
Object(_nativescript_vue_runtime__WEBPACK_IMPORTED_MODULE_0__["createApp"])({}).mount(null);
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3JpZ29yNzg5L0NvZGUvbmF0aXZlc2NyaXB0LXZ1ZS1uZXh0L3BhY2thZ2VzL3J1bnRpbWUvZGlzdC9ydW50aW1lLmVzbS1idW5kbGVyLmpzIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOlsibm9kZUlkIiwicmVjb3JkZWROb2RlT3BzIiwibG9nTm9kZU9wIiwib3AiLCJwdXNoIiwicmVzZXRPcHMiLCJkdW1wT3BzIiwib3BzIiwic2xpY2UiLCJjcmVhdGVFbGVtZW50IiwidGFnIiwibm9kZSIsImlkIiwidHlwZSIsImNoaWxkcmVuIiwicHJvcHMiLCJwYXJlbnROb2RlIiwiZXZlbnRMaXN0ZW5lcnMiLCJub2RlVHlwZSIsInRhcmdldE5vZGUiLCJtYXJrTm9uUmVhY3RpdmUiLCJjcmVhdGVUZXh0IiwidGV4dCIsImNyZWF0ZUNvbW1lbnQiLCJzZXRUZXh0IiwiaW5zZXJ0IiwiY2hpbGQiLCJwYXJlbnQiLCJyZWYiLCJyZWZJbmRleCIsImluZGV4T2YiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsInJlZk5vZGUiLCJyZW1vdmUiLCJzcGxpY2UiLCJsb2dPcCIsImkiLCJzZXRFbGVtZW50VGV4dCIsImVsIiwiZm9yRWFjaCIsImMiLCJuZXh0U2libGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRTY29wZUlkIiwibm9kZU9wcyIsIkVNUFRZX09CSiIsInByb2Nlc3MiLCJPYmplY3QiLCJmcmVlemUiLCJpc09uIiwia2V5IiwicGF0Y2hQcm9wIiwibmV4dFZhbHVlIiwicHJldlZhbHVlIiwicHJvcEtleSIsInByb3BQcmV2VmFsdWUiLCJwcm9wTmV4dFZhbHVlIiwiZXZlbnQiLCJ0b0xvd2VyQ2FzZSIsInJlbmRlciIsImJhc2VSZW5kZXIiLCJjcmVhdGVBcHAiLCJiYXNlQ3JlYXRlQXBwIiwiY3JlYXRlUmVuZGVyZXIiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFH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Q3pCLEtBQUgsQ0FBU3FDLEdBQVQsSUFBZ0JFLFNBQWhCOztBQUNBLE1BQUlILElBQUksQ0FBQ0MsR0FBRCxDQUFSLEVBQWU7QUFDWCxVQUFNTyxLQUFLLEdBQUdQLEdBQUcsQ0FBQzVDLEtBQUosQ0FBVSxDQUFWLEVBQWFvRCxXQUFiLEVBQWQ7QUFDQSxLQUFDcEIsRUFBRSxDQUFDdkIsY0FBSCxLQUFzQnVCLEVBQUUsQ0FBQ3ZCLGNBQUgsR0FBb0IsRUFBMUMsQ0FBRCxFQUFnRDBDLEtBQWhELElBQXlETCxTQUF6RDtBQUNIO0FBQ0o7O0FBRUQsTUFBTTtBQUFFTyxRQUFNLEVBQUVDLFVBQVY7QUFBc0JDLFdBQVMsRUFBRUM7QUFBakMsSUFBbURDLHdFQUFjLENBQUM7QUFDcEVaLFdBRG9FO0FBRXBFLEtBQUdQO0FBRmlFLENBQUQsQ0FBdkU7QUFJQSxNQUFNZSxNQUFNLEdBQUdDLFVBQWY7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLGFBQWxCOzs7Ozs7OztBQ2pOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBLHNFOzs7Ozs7O0FDUkE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKOzs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFFQUQsU0FBUyxDQUFDLEVBQUQsQ0FBVCxDQUVHRyxLQUZILENBRVMsSUFGVCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZW5kZXJlciB9IGZyb20gJ0B2dWUvcnVudGltZS1jb3JlJztcbmV4cG9ydCAqIGZyb20gJ0B2dWUvcnVudGltZS1jb3JlJztcbmltcG9ydCB7IG1hcmtOb25SZWFjdGl2ZSB9IGZyb20gJ0B2dWUvcmVhY3Rpdml0eSc7XG5cbmxldCBub2RlSWQgPSAwO1xyXG5sZXQgcmVjb3JkZWROb2RlT3BzID0gW107XHJcbmZ1bmN0aW9uIGxvZ05vZGVPcChvcCkge1xyXG4gICAgcmVjb3JkZWROb2RlT3BzLnB1c2gob3ApO1xyXG59XHJcbmZ1bmN0aW9uIHJlc2V0T3BzKCkge1xyXG4gICAgcmVjb3JkZWROb2RlT3BzID0gW107XHJcbn1cclxuZnVuY3Rpb24gZHVtcE9wcygpIHtcclxuICAgIGNvbnN0IG9wcyA9IHJlY29yZGVkTm9kZU9wcy5zbGljZSgpO1xyXG4gICAgcmVzZXRPcHMoKTtcclxuICAgIHJldHVybiBvcHM7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcpIHtcclxuICAgIGNvbnN0IG5vZGUgPSB7XHJcbiAgICAgICAgaWQ6IG5vZGVJZCsrLFxyXG4gICAgICAgIHR5cGU6IFwiZWxlbWVudFwiIC8qIEVMRU1FTlQgKi8sXHJcbiAgICAgICAgdGFnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICBwcm9wczoge30sXHJcbiAgICAgICAgcGFyZW50Tm9kZTogbnVsbCxcclxuICAgICAgICBldmVudExpc3RlbmVyczogbnVsbFxyXG4gICAgfTtcclxuICAgIGxvZ05vZGVPcCh7XHJcbiAgICAgICAgdHlwZTogXCJjcmVhdGVcIiAvKiBDUkVBVEUgKi8sXHJcbiAgICAgICAgbm9kZVR5cGU6IFwiZWxlbWVudFwiIC8qIEVMRU1FTlQgKi8sXHJcbiAgICAgICAgdGFyZ2V0Tm9kZTogbm9kZSxcclxuICAgICAgICB0YWdcclxuICAgIH0pO1xyXG4gICAgLy8gYXZvaWQgdGVzdCBub2RlcyBmcm9tIGJlaW5nIG9ic2VydmVkXHJcbiAgICBtYXJrTm9uUmVhY3RpdmUobm9kZSk7XHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0KHRleHQpIHtcclxuICAgIGNvbnN0IG5vZGUgPSB7XHJcbiAgICAgICAgaWQ6IG5vZGVJZCsrLFxyXG4gICAgICAgIHR5cGU6IFwidGV4dFwiIC8qIFRFWFQgKi8sXHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgICBwYXJlbnROb2RlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgbG9nTm9kZU9wKHtcclxuICAgICAgICB0eXBlOiBcImNyZWF0ZVwiIC8qIENSRUFURSAqLyxcclxuICAgICAgICBub2RlVHlwZTogXCJ0ZXh0XCIgLyogVEVYVCAqLyxcclxuICAgICAgICB0YXJnZXROb2RlOiBub2RlLFxyXG4gICAgICAgIHRleHRcclxuICAgIH0pO1xyXG4gICAgLy8gYXZvaWQgdGVzdCBub2RlcyBmcm9tIGJlaW5nIG9ic2VydmVkXHJcbiAgICBtYXJrTm9uUmVhY3RpdmUobm9kZSk7XHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50KHRleHQpIHtcclxuICAgIGNvbnN0IG5vZGUgPSB7XHJcbiAgICAgICAgaWQ6IG5vZGVJZCsrLFxyXG4gICAgICAgIHR5cGU6IFwiY29tbWVudFwiIC8qIENPTU1FTlQgKi8sXHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgICBwYXJlbnROb2RlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgbG9nTm9kZU9wKHtcclxuICAgICAgICB0eXBlOiBcImNyZWF0ZVwiIC8qIENSRUFURSAqLyxcclxuICAgICAgICBub2RlVHlwZTogXCJjb21tZW50XCIgLyogQ09NTUVOVCAqLyxcclxuICAgICAgICB0YXJnZXROb2RlOiBub2RlLFxyXG4gICAgICAgIHRleHRcclxuICAgIH0pO1xyXG4gICAgLy8gYXZvaWQgdGVzdCBub2RlcyBmcm9tIGJlaW5nIG9ic2VydmVkXHJcbiAgICBtYXJrTm9uUmVhY3RpdmUobm9kZSk7XHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG5mdW5jdGlvbiBzZXRUZXh0KG5vZGUsIHRleHQpIHtcclxuICAgIGxvZ05vZGVPcCh7XHJcbiAgICAgICAgdHlwZTogXCJzZXRUZXh0XCIgLyogU0VUX1RFWFQgKi8sXHJcbiAgICAgICAgdGFyZ2V0Tm9kZTogbm9kZSxcclxuICAgICAgICB0ZXh0XHJcbiAgICB9KTtcclxuICAgIG5vZGUudGV4dCA9IHRleHQ7XHJcbn1cclxuZnVuY3Rpb24gaW5zZXJ0KGNoaWxkLCBwYXJlbnQsIHJlZikge1xyXG4gICAgbGV0IHJlZkluZGV4O1xyXG4gICAgaWYgKHJlZiAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVmSW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihyZWYpO1xyXG4gICAgICAgIGlmIChyZWZJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncmVmOiAnLCByZWYpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdwYXJlbnQ6ICcsIHBhcmVudCk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVmIGlzIG5vdCBhIGNoaWxkIG9mIHBhcmVudCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvZ05vZGVPcCh7XHJcbiAgICAgICAgdHlwZTogXCJpbnNlcnRcIiAvKiBJTlNFUlQgKi8sXHJcbiAgICAgICAgdGFyZ2V0Tm9kZTogY2hpbGQsXHJcbiAgICAgICAgcGFyZW50Tm9kZTogcGFyZW50LFxyXG4gICAgICAgIHJlZk5vZGU6IHJlZlxyXG4gICAgfSk7XHJcbiAgICAvLyByZW1vdmUgdGhlIG5vZGUgZmlyc3QsIGJ1dCBkb24ndCBsb2cgaXQgYXMgYSBSRU1PVkUgb3BcclxuICAgIHJlbW92ZShjaGlsZCwgZmFsc2UpO1xyXG4gICAgLy8gcmUtY2FsY3VsYXRlIHRoZSByZWYgaW5kZXggYmVjYXVzZSB0aGUgY2hpbGQncyByZW1vdmFsIG1heSBoYXZlIGFmZmVjdGVkIGl0XHJcbiAgICByZWZJbmRleCA9IHJlZiA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHJlZikgOiAtMTtcclxuICAgIGlmIChyZWZJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHBhcmVudDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UocmVmSW5kZXgsIDAsIGNoaWxkKTtcclxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gcGFyZW50O1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZShjaGlsZCwgbG9nT3AgPSB0cnVlKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGxvZ09wKSB7XHJcbiAgICAgICAgICAgIGxvZ05vZGVPcCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW92ZVwiIC8qIFJFTU9WRSAqLyxcclxuICAgICAgICAgICAgICAgIHRhcmdldE5vZGU6IGNoaWxkLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogcGFyZW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICAgIGlmIChpID4gLTEpIHtcclxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RhcmdldDogJywgY2hpbGQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdwYXJlbnQ6ICcsIHBhcmVudCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0YXJnZXQgaXMgbm90IGEgY2hpbGROb2RlIG9mIHBhcmVudCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzZXRFbGVtZW50VGV4dChlbCwgdGV4dCkge1xyXG4gICAgbG9nTm9kZU9wKHtcclxuICAgICAgICB0eXBlOiBcInNldEVsZW1lbnRUZXh0XCIgLyogU0VUX0VMRU1FTlRfVEVYVCAqLyxcclxuICAgICAgICB0YXJnZXROb2RlOiBlbCxcclxuICAgICAgICB0ZXh0XHJcbiAgICB9KTtcclxuICAgIGVsLmNoaWxkcmVuLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgYy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgICAgZWwuY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGVsLmNoaWxkcmVuID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogbm9kZUlkKyssXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIiAvKiBURVhUICovLFxyXG4gICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGU6IGVsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHBhcmVudE5vZGUobm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZTtcclxufVxyXG5mdW5jdGlvbiBuZXh0U2libGluZyhub2RlKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaSA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpO1xyXG4gICAgcmV0dXJuIHBhcmVudC5jaGlsZHJlbltpICsgMV0gfHwgbnVsbDtcclxufVxyXG5mdW5jdGlvbiBxdWVyeVNlbGVjdG9yKCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdxdWVyeVNlbGVjdG9yIG5vdCBzdXBwb3J0ZWQgaW4gdGVzdCByZW5kZXJlci4nKTtcclxufVxyXG5mdW5jdGlvbiBzZXRTY29wZUlkKGVsLCBpZCkge1xyXG4gICAgZWwucHJvcHNbaWRdID0gJyc7XHJcbn1cclxuY29uc3Qgbm9kZU9wcyA9IHtcclxuICAgIGluc2VydCxcclxuICAgIHJlbW92ZSxcclxuICAgIGNyZWF0ZUVsZW1lbnQsXHJcbiAgICBjcmVhdGVUZXh0LFxyXG4gICAgY3JlYXRlQ29tbWVudCxcclxuICAgIHNldFRleHQsXHJcbiAgICBzZXRFbGVtZW50VGV4dCxcclxuICAgIHBhcmVudE5vZGUsXHJcbiAgICBuZXh0U2libGluZyxcclxuICAgIHF1ZXJ5U2VsZWN0b3IsXHJcbiAgICBzZXRTY29wZUlkXHJcbn07XG5cbmNvbnN0IEVNUFRZX09CSiA9IChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKVxyXG4gICAgPyBPYmplY3QuZnJlZXplKHt9KVxyXG4gICAgOiB7fTtcclxuY29uc3QgaXNPbiA9IChrZXkpID0+IGtleVswXSA9PT0gJ28nICYmIGtleVsxXSA9PT0gJ24nO1xuXG5mdW5jdGlvbiBwYXRjaFByb3AoZWwsIGtleSwgbmV4dFZhbHVlLCBwcmV2VmFsdWUpIHtcclxuICAgIGxvZ05vZGVPcCh7XHJcbiAgICAgICAgdHlwZTogXCJwYXRjaFwiIC8qIFBBVENIICovLFxyXG4gICAgICAgIHRhcmdldE5vZGU6IGVsLFxyXG4gICAgICAgIHByb3BLZXk6IGtleSxcclxuICAgICAgICBwcm9wUHJldlZhbHVlOiBwcmV2VmFsdWUsXHJcbiAgICAgICAgcHJvcE5leHRWYWx1ZTogbmV4dFZhbHVlXHJcbiAgICB9KTtcclxuICAgIGVsLnByb3BzW2tleV0gPSBuZXh0VmFsdWU7XHJcbiAgICBpZiAoaXNPbihrZXkpKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSBrZXkuc2xpY2UoMikudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAoZWwuZXZlbnRMaXN0ZW5lcnMgfHwgKGVsLmV2ZW50TGlzdGVuZXJzID0ge30pKVtldmVudF0gPSBuZXh0VmFsdWU7XHJcbiAgICB9XHJcbn1cblxuY29uc3QgeyByZW5kZXI6IGJhc2VSZW5kZXIsIGNyZWF0ZUFwcDogYmFzZUNyZWF0ZUFwcCB9ID0gY3JlYXRlUmVuZGVyZXIoe1xyXG4gICAgcGF0Y2hQcm9wLFxyXG4gICAgLi4ubm9kZU9wc1xyXG59KTtcclxuY29uc3QgcmVuZGVyID0gYmFzZVJlbmRlcjtcclxuY29uc3QgY3JlYXRlQXBwID0gYmFzZUNyZWF0ZUFwcDtcblxuZXhwb3J0IHsgY3JlYXRlQXBwLCBkdW1wT3BzLCBsb2dOb2RlT3AsIG5vZGVPcHMsIHJlbmRlciwgcmVzZXRPcHMgfTtcbiIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC12dWUvcnVudGltZVwiO1xuXG5jcmVhdGVBcHAoe1xuXG59KS5tb3VudChudWxsKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=