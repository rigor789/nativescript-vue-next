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

const rendererOptions = {
  patchProp,
  ...nodeOps
};
let renderer;

function ensureRenderer() {
  return renderer || (renderer = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createRenderer"])(rendererOptions));
}

const render = (...args) => {
  ensureRenderer().render(...args);
};

const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const {
    mount
  } = app;

  app.mount = () => {
    const root = nodeOps.createElement('nativescript-vue-root'); // todo: app.run from ns

    return mount(root);
  };

  return app;
};



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
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_label_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/label/label.js");
/* harmony import */ var tns_core_modules_ui_label_label__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_label_label__WEBPACK_IMPORTED_MODULE_2__);

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
        


Object(_nativescript_vue_runtime__WEBPACK_IMPORTED_MODULE_0__["createApp"])({
  render() {
    return Object(_nativescript_vue_runtime__WEBPACK_IMPORTED_MODULE_0__["h"])('Label');
  },

  mounted() {
    console.log(Object(_nativescript_vue_runtime__WEBPACK_IMPORTED_MODULE_0__["dumpOps"])());
  }

}).mount(); // placeholder to be able to start the app without NS crashing.

Object(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["run"])({
  create() {
    const label = new tns_core_modules_ui_label_label__WEBPACK_IMPORTED_MODULE_2__["Label"]();
    label.text = 'Hello World';
    label.verticalAlignment = 'middle';
    label.textAlignment = 'center';
    return label;
  }

});
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3JpZ29yNzg5L0NvZGUvbmF0aXZlc2NyaXB0LXZ1ZS1uZXh0L3BhY2thZ2VzL3J1bnRpbWUvZGlzdC9ydW50aW1lLmVzbS1idW5kbGVyLmpzIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOlsibm9kZUlkIiwicmVjb3JkZWROb2RlT3BzIiwibG9nTm9kZU9wIiwib3AiLCJwdXNoIiwicmVzZXRPcHMiLCJkdW1wT3BzIiwib3BzIiwic2xpY2UiLCJjcmVhdGVFbGVtZW50IiwidGFnIiwibm9kZSIsImlkIiwidHlwZSIsImNoaWxkcmVuIiwicHJvcHMiLCJwYXJlbnROb2RlIiwiZXZlbnRMaXN0ZW5lcnMiLCJub2RlVHlwZSIsInRhcmdldE5vZGUiLCJtYXJrTm9uUmVhY3RpdmUiLCJjcmVhdGVUZXh0IiwidGV4dCIsImNyZWF0ZUNvbW1lbnQiLCJzZXRUZXh0IiwiaW5zZXJ0IiwiY2hpbGQiLCJwYXJlbnQiLCJyZWYiLCJyZWZJbmRleCIsImluZGV4T2YiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsInJlZk5vZGUiLCJyZW1vdmUiLCJzcGxpY2UiLCJsb2dPcCIsImkiLCJzZXRFbGVtZW50VGV4dCIsImVsIiwiZm9yRWFjaCIsImMiLCJuZXh0U2libGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRTY29wZUlkIiwibm9kZU9wcyIsIkVNUFRZX09CSiIsInByb2Nlc3MiLCJPYmplY3QiLCJmcmVlemUiLCJpc09uIiwia2V5IiwicGF0Y2hQcm9wIiwibmV4dFZhbHVlIiwicHJldlZhbHVlIiwicHJvcEtleSIsInByb3BQcmV2VmFsdWUiLCJwcm9wTmV4dFZhbHVlIiwiZXZlbnQiLCJ0b0xvd2VyQ2FzZSIsInJlbmRlcmVyT3B0aW9ucyIsInJlbmRlcmVyIiwiZW5zdXJlUmVuZGVyZXIiLCJjcmVhdGVSZW5kZXJlciIsInJlbmRlciIsImFyZ3MiLCJjcmVhdGVBcHAiLCJhcHAiLCJtb3VudCIsInJvb3QiLCJydW4iLCJMYWJlbCIsIm1vdW50ZWQiLCJjcmVhdGUiLCJsYWJlbCIsInZlcnRpY2FsQWxpZ25tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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RixHQUFQO0FBQ0gsQ0FURDs7Ozs7Ozs7O0FDdk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0Esc0U7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0o7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsU0FBUUcsR0FBUixRQUFrQixzR0FBbEI7QUFDQSxTQUFRQyxLQUFSLFFBQW9CLGlDQUFwQjtBQUVBTCxTQUFTLENBQUM7QUFDTkYsb0JBQU0seURBQUc7QUFDTDtBQUZFOztBQUlOUSxTQUFPLEdBQUc7QUFDTjFDLFdBQU8sQ0FBUDtBQUNIOztBQU5LLENBQUQsQ0FBVCxDQU9Hc0MsS0FQSCxHLENBU0E7O0FBQ0k7QUFDQUssUUFBTSxHQUFHO0FBQ0wsVUFBTUMsS0FBSyxHQUFHLElBQUlILEtBQUosRUFBZDtBQUNBRyxTQUFLLENBQUNyRCxJQUFOLEdBQWEsV0FBYjtBQUNBcUQsU0FBSyxDQUFDQyxJQUFOO0FBQ0E7QUFDQSxXQUFPRCxLQUFQO0FBQ0g7O0FBUEQsQ0FBRCxDQUFIIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJlbmRlcmVyIH0gZnJvbSAnQHZ1ZS9ydW50aW1lLWNvcmUnO1xuZXhwb3J0ICogZnJvbSAnQHZ1ZS9ydW50aW1lLWNvcmUnO1xuaW1wb3J0IHsgbWFya05vblJlYWN0aXZlIH0gZnJvbSAnQHZ1ZS9yZWFjdGl2aXR5JztcblxubGV0IG5vZGVJZCA9IDA7XHJcbmxldCByZWNvcmRlZE5vZGVPcHMgPSBbXTtcclxuZnVuY3Rpb24gbG9nTm9kZU9wKG9wKSB7XHJcbiAgICByZWNvcmRlZE5vZGVPcHMucHVzaChvcCk7XHJcbn1cclxuZnVuY3Rpb24gcmVzZXRPcHMoKSB7XHJcbiAgICByZWNvcmRlZE5vZGVPcHMgPSBbXTtcclxufVxyXG5mdW5jdGlvbiBkdW1wT3BzKCkge1xyXG4gICAgY29uc3Qgb3BzID0gcmVjb3JkZWROb2RlT3BzLnNsaWNlKCk7XHJcbiAgICByZXNldE9wcygpO1xyXG4gICAgcmV0dXJuIG9wcztcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZykge1xyXG4gICAgY29uc3Qgbm9kZSA9IHtcclxuICAgICAgICBpZDogbm9kZUlkKyssXHJcbiAgICAgICAgdHlwZTogXCJlbGVtZW50XCIgLyogRUxFTUVOVCAqLyxcclxuICAgICAgICB0YWcsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIHByb3BzOiB7fSxcclxuICAgICAgICBwYXJlbnROb2RlOiBudWxsLFxyXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzOiBudWxsXHJcbiAgICB9O1xyXG4gICAgbG9nTm9kZU9wKHtcclxuICAgICAgICB0eXBlOiBcImNyZWF0ZVwiIC8qIENSRUFURSAqLyxcclxuICAgICAgICBub2RlVHlwZTogXCJlbGVtZW50XCIgLyogRUxFTUVOVCAqLyxcclxuICAgICAgICB0YXJnZXROb2RlOiBub2RlLFxyXG4gICAgICAgIHRhZ1xyXG4gICAgfSk7XHJcbiAgICAvLyBhdm9pZCB0ZXN0IG5vZGVzIGZyb20gYmVpbmcgb2JzZXJ2ZWRcclxuICAgIG1hcmtOb25SZWFjdGl2ZShub2RlKTtcclxuICAgIHJldHVybiBub2RlO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHQodGV4dCkge1xyXG4gICAgY29uc3Qgbm9kZSA9IHtcclxuICAgICAgICBpZDogbm9kZUlkKyssXHJcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIgLyogVEVYVCAqLyxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIHBhcmVudE5vZGU6IG51bGxcclxuICAgIH07XHJcbiAgICBsb2dOb2RlT3Aoe1xyXG4gICAgICAgIHR5cGU6IFwiY3JlYXRlXCIgLyogQ1JFQVRFICovLFxyXG4gICAgICAgIG5vZGVUeXBlOiBcInRleHRcIiAvKiBURVhUICovLFxyXG4gICAgICAgIHRhcmdldE5vZGU6IG5vZGUsXHJcbiAgICAgICAgdGV4dFxyXG4gICAgfSk7XHJcbiAgICAvLyBhdm9pZCB0ZXN0IG5vZGVzIGZyb20gYmVpbmcgb2JzZXJ2ZWRcclxuICAgIG1hcmtOb25SZWFjdGl2ZShub2RlKTtcclxuICAgIHJldHVybiBub2RlO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQodGV4dCkge1xyXG4gICAgY29uc3Qgbm9kZSA9IHtcclxuICAgICAgICBpZDogbm9kZUlkKyssXHJcbiAgICAgICAgdHlwZTogXCJjb21tZW50XCIgLyogQ09NTUVOVCAqLyxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIHBhcmVudE5vZGU6IG51bGxcclxuICAgIH07XHJcbiAgICBsb2dOb2RlT3Aoe1xyXG4gICAgICAgIHR5cGU6IFwiY3JlYXRlXCIgLyogQ1JFQVRFICovLFxyXG4gICAgICAgIG5vZGVUeXBlOiBcImNvbW1lbnRcIiAvKiBDT01NRU5UICovLFxyXG4gICAgICAgIHRhcmdldE5vZGU6IG5vZGUsXHJcbiAgICAgICAgdGV4dFxyXG4gICAgfSk7XHJcbiAgICAvLyBhdm9pZCB0ZXN0IG5vZGVzIGZyb20gYmVpbmcgb2JzZXJ2ZWRcclxuICAgIG1hcmtOb25SZWFjdGl2ZShub2RlKTtcclxuICAgIHJldHVybiBub2RlO1xyXG59XHJcbmZ1bmN0aW9uIHNldFRleHQobm9kZSwgdGV4dCkge1xyXG4gICAgbG9nTm9kZU9wKHtcclxuICAgICAgICB0eXBlOiBcInNldFRleHRcIiAvKiBTRVRfVEVYVCAqLyxcclxuICAgICAgICB0YXJnZXROb2RlOiBub2RlLFxyXG4gICAgICAgIHRleHRcclxuICAgIH0pO1xyXG4gICAgbm9kZS50ZXh0ID0gdGV4dDtcclxufVxyXG5mdW5jdGlvbiBpbnNlcnQoY2hpbGQsIHBhcmVudCwgcmVmKSB7XHJcbiAgICBsZXQgcmVmSW5kZXg7XHJcbiAgICBpZiAocmVmICE9IG51bGwpIHtcclxuICAgICAgICByZWZJbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHJlZik7XHJcbiAgICAgICAgaWYgKHJlZkluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdyZWY6ICcsIHJlZik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BhcmVudDogJywgcGFyZW50KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWYgaXMgbm90IGEgY2hpbGQgb2YgcGFyZW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9nTm9kZU9wKHtcclxuICAgICAgICB0eXBlOiBcImluc2VydFwiIC8qIElOU0VSVCAqLyxcclxuICAgICAgICB0YXJnZXROb2RlOiBjaGlsZCxcclxuICAgICAgICBwYXJlbnROb2RlOiBwYXJlbnQsXHJcbiAgICAgICAgcmVmTm9kZTogcmVmXHJcbiAgICB9KTtcclxuICAgIC8vIHJlbW92ZSB0aGUgbm9kZSBmaXJzdCwgYnV0IGRvbid0IGxvZyBpdCBhcyBhIFJFTU9WRSBvcFxyXG4gICAgcmVtb3ZlKGNoaWxkLCBmYWxzZSk7XHJcbiAgICAvLyByZS1jYWxjdWxhdGUgdGhlIHJlZiBpbmRleCBiZWNhdXNlIHRoZSBjaGlsZCdzIHJlbW92YWwgbWF5IGhhdmUgYWZmZWN0ZWQgaXRcclxuICAgIHJlZkluZGV4ID0gcmVmID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YocmVmKSA6IC0xO1xyXG4gICAgaWYgKHJlZkluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gcGFyZW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShyZWZJbmRleCwgMCwgY2hpbGQpO1xyXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSBwYXJlbnQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlKGNoaWxkLCBsb2dPcCA9IHRydWUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGNoaWxkLnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICBpZiAobG9nT3ApIHtcclxuICAgICAgICAgICAgbG9nTm9kZU9wKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVtb3ZlXCIgLyogUkVNT1ZFICovLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZTogY2hpbGQsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBwYXJlbnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGkgPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgaWYgKGkgPiAtMSkge1xyXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGFyZ2V0OiAnLCBjaGlsZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BhcmVudDogJywgcGFyZW50KTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3RhcmdldCBpcyBub3QgYSBjaGlsZE5vZGUgb2YgcGFyZW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldEVsZW1lbnRUZXh0KGVsLCB0ZXh0KSB7XHJcbiAgICBsb2dOb2RlT3Aoe1xyXG4gICAgICAgIHR5cGU6IFwic2V0RWxlbWVudFRleHRcIiAvKiBTRVRfRUxFTUVOVF9URVhUICovLFxyXG4gICAgICAgIHRhcmdldE5vZGU6IGVsLFxyXG4gICAgICAgIHRleHRcclxuICAgIH0pO1xyXG4gICAgZWwuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcclxuICAgICAgICBjLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoIXRleHQpIHtcclxuICAgICAgICBlbC5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZWwuY2hpbGRyZW4gPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBub2RlSWQrKyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiIC8qIFRFWFQgKi8sXHJcbiAgICAgICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogZWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcGFyZW50Tm9kZShub2RlKSB7XHJcbiAgICByZXR1cm4gbm9kZS5wYXJlbnROb2RlO1xyXG59XHJcbmZ1bmN0aW9uIG5leHRTaWJsaW5nKG5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSk7XHJcbiAgICByZXR1cm4gcGFyZW50LmNoaWxkcmVuW2kgKyAxXSB8fCBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3IoKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3F1ZXJ5U2VsZWN0b3Igbm90IHN1cHBvcnRlZCBpbiB0ZXN0IHJlbmRlcmVyLicpO1xyXG59XHJcbmZ1bmN0aW9uIHNldFNjb3BlSWQoZWwsIGlkKSB7XHJcbiAgICBlbC5wcm9wc1tpZF0gPSAnJztcclxufVxyXG5jb25zdCBub2RlT3BzID0ge1xyXG4gICAgaW5zZXJ0LFxyXG4gICAgcmVtb3ZlLFxyXG4gICAgY3JlYXRlRWxlbWVudCxcclxuICAgIGNyZWF0ZVRleHQsXHJcbiAgICBjcmVhdGVDb21tZW50LFxyXG4gICAgc2V0VGV4dCxcclxuICAgIHNldEVsZW1lbnRUZXh0LFxyXG4gICAgcGFyZW50Tm9kZSxcclxuICAgIG5leHRTaWJsaW5nLFxyXG4gICAgcXVlcnlTZWxlY3RvcixcclxuICAgIHNldFNjb3BlSWRcclxufTtcblxuY29uc3QgRU1QVFlfT0JKID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpXHJcbiAgICA/IE9iamVjdC5mcmVlemUoe30pXHJcbiAgICA6IHt9O1xyXG5jb25zdCBpc09uID0gKGtleSkgPT4ga2V5WzBdID09PSAnbycgJiYga2V5WzFdID09PSAnbic7XG5cbmZ1bmN0aW9uIHBhdGNoUHJvcChlbCwga2V5LCBuZXh0VmFsdWUsIHByZXZWYWx1ZSkge1xyXG4gICAgbG9nTm9kZU9wKHtcclxuICAgICAgICB0eXBlOiBcInBhdGNoXCIgLyogUEFUQ0ggKi8sXHJcbiAgICAgICAgdGFyZ2V0Tm9kZTogZWwsXHJcbiAgICAgICAgcHJvcEtleToga2V5LFxyXG4gICAgICAgIHByb3BQcmV2VmFsdWU6IHByZXZWYWx1ZSxcclxuICAgICAgICBwcm9wTmV4dFZhbHVlOiBuZXh0VmFsdWVcclxuICAgIH0pO1xyXG4gICAgZWwucHJvcHNba2V5XSA9IG5leHRWYWx1ZTtcclxuICAgIGlmIChpc09uKGtleSkpIHtcclxuICAgICAgICBjb25zdCBldmVudCA9IGtleS5zbGljZSgyKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIChlbC5ldmVudExpc3RlbmVycyB8fCAoZWwuZXZlbnRMaXN0ZW5lcnMgPSB7fSkpW2V2ZW50XSA9IG5leHRWYWx1ZTtcclxuICAgIH1cclxufVxuXG5jb25zdCByZW5kZXJlck9wdGlvbnMgPSB7XHJcbiAgICBwYXRjaFByb3AsXHJcbiAgICAuLi5ub2RlT3BzXHJcbn07XHJcbmxldCByZW5kZXJlcjtcclxuZnVuY3Rpb24gZW5zdXJlUmVuZGVyZXIoKSB7XHJcbiAgICByZXR1cm4gcmVuZGVyZXIgfHwgKHJlbmRlcmVyID0gY3JlYXRlUmVuZGVyZXIocmVuZGVyZXJPcHRpb25zKSk7XHJcbn1cclxuY29uc3QgcmVuZGVyID0gKCguLi5hcmdzKSA9PiB7XHJcbiAgICBlbnN1cmVSZW5kZXJlcigpLnJlbmRlciguLi5hcmdzKTtcclxufSk7XHJcbmNvbnN0IGNyZWF0ZUFwcCA9ICgoLi4uYXJncykgPT4ge1xyXG4gICAgY29uc3QgYXBwID0gZW5zdXJlUmVuZGVyZXIoKS5jcmVhdGVBcHAoLi4uYXJncyk7XHJcbiAgICBjb25zdCB7IG1vdW50IH0gPSBhcHA7XHJcbiAgICBhcHAubW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5vZGVPcHMuY3JlYXRlRWxlbWVudCgnbmF0aXZlc2NyaXB0LXZ1ZS1yb290Jyk7XHJcbiAgICAgICAgLy8gdG9kbzogYXBwLnJ1biBmcm9tIG5zXHJcbiAgICAgICAgcmV0dXJuIG1vdW50KHJvb3QpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBhcHA7XHJcbn0pO1xuXG5leHBvcnQgeyBjcmVhdGVBcHAsIGR1bXBPcHMsIGxvZ05vZGVPcCwgbm9kZU9wcywgcmVuZGVyLCByZXNldE9wcyB9O1xuIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImltcG9ydCB7Y3JlYXRlQXBwLCBoLCBkdW1wT3BzfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC12dWUvcnVudGltZVwiO1xuaW1wb3J0IHtydW59IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nXG5pbXBvcnQge0xhYmVsfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsL2xhYmVsJ1xuXG5jcmVhdGVBcHAoe1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGgoJ0xhYmVsJylcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1bXBPcHMoKSlcbiAgICB9XG59KS5tb3VudCgpO1xuXG4vLyBwbGFjZWhvbGRlciB0byBiZSBhYmxlIHRvIHN0YXJ0IHRoZSBhcHAgd2l0aG91dCBOUyBjcmFzaGluZy5cbnJ1bih7XG4gICAgY3JlYXRlKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbCgpXG4gICAgICAgIGxhYmVsLnRleHQgPSAnSGVsbG8gV29ybGQnXG4gICAgICAgIGxhYmVsLnZlcnRpY2FsQWxpZ25tZW50ID0gJ21pZGRsZSdcbiAgICAgICAgbGFiZWwudGV4dEFsaWdubWVudCA9ICdjZW50ZXInXG4gICAgICAgIHJldHVybiBsYWJlbFxuICAgIH1cbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9