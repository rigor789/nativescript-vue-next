webpackHotUpdate("bundle",{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3JpZ29yNzg5L0NvZGUvbmF0aXZlc2NyaXB0LXZ1ZS1uZXh0L3BhY2thZ2VzL3J1bnRpbWUvZGlzdC9ydW50aW1lLmVzbS1idW5kbGVyLmpzIl0sIm5hbWVzIjpbIm5vZGVJZCIsInJlY29yZGVkTm9kZU9wcyIsImxvZ05vZGVPcCIsIm9wIiwicHVzaCIsInJlc2V0T3BzIiwiZHVtcE9wcyIsIm9wcyIsInNsaWNlIiwiY3JlYXRlRWxlbWVudCIsInRhZyIsIm5vZGUiLCJpZCIsInR5cGUiLCJjaGlsZHJlbiIsInByb3BzIiwicGFyZW50Tm9kZSIsImV2ZW50TGlzdGVuZXJzIiwibm9kZVR5cGUiLCJ0YXJnZXROb2RlIiwibWFya05vblJlYWN0aXZlIiwiY3JlYXRlVGV4dCIsInRleHQiLCJjcmVhdGVDb21tZW50Iiwic2V0VGV4dCIsImluc2VydCIsImNoaWxkIiwicGFyZW50IiwicmVmIiwicmVmSW5kZXgiLCJpbmRleE9mIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJyZWZOb2RlIiwicmVtb3ZlIiwic3BsaWNlIiwibG9nT3AiLCJpIiwic2V0RWxlbWVudFRleHQiLCJlbCIsImZvckVhY2giLCJjIiwibmV4dFNpYmxpbmciLCJxdWVyeVNlbGVjdG9yIiwic2V0U2NvcGVJZCIsIm5vZGVPcHMiLCJFTVBUWV9PQkoiLCJwcm9jZXNzIiwiT2JqZWN0IiwiZnJlZXplIiwiaXNPbiIsImtleSIsInBhdGNoUHJvcCIsIm5leHRWYWx1ZSIsInByZXZWYWx1ZSIsInByb3BLZXkiLCJwcm9wUHJldlZhbHVlIiwicHJvcE5leHRWYWx1ZSIsImV2ZW50IiwidG9Mb3dlckNhc2UiLCJyZW5kZXJlck9wdGlvbnMiLCJyZW5kZXJlciIsImVuc3VyZVJlbmRlcmVyIiwiY3JlYXRlUmVuZGVyZXIiLCJyZW5kZXIiLCJhcmdzIiwiY3JlYXRlQXBwIiwiYXBwIiwibW91bnQiLCJyb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBRyxDQUFiO0FBQ0EsSUFBSUMsZUFBZSxHQUFHLEVBQXRCOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLEVBQW5CLEVBQXVCO0FBQ25CRixpQkFBZSxDQUFDRyxJ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QUFHUCxHQUFHLENBQUM1QyxLQUFKLENBQVUsQ0FBVixFQUFhb0QsV0FBYixFQUFkO0FBQ0EsS0FBQ3BCLEVBQUUsQ0FBQ3ZCLGNBQUgsS0FBc0J1QixFQUFFLENBQUN2QixjQUFILEdBQW9CLEVBQTFDLENBQUQsRUFBZ0QwQyxLQUFoRCxJQUF5REwsU0FBekQ7QUFDSDtBQUNKOztBQUVELE1BQU1PLGVBQWUsR0FBRztBQUNwQlIsV0FEb0I7QUFFcEIsS0FBR1A7QUFGaUIsQ0FBeEI7QUFJQSxJQUFJZ0IsUUFBSjs7QUFDQSxTQUFTQyxjQUFULEdBQTBCO0FBQ3RCLFNBQU9ELFFBQVEsS0FBS0EsUUFBUSxHQUFHRSx3RUFBYyxDQUFDSCxlQUFELENBQTlCLENBQWY7QUFDSDs7QUFDRCxNQUFNSSxNQUFNLEdBQUksQ0FBQyxHQUFHQyxJQUFKLEtBQWE7QUFDekJILGdCQUFjLEdBQUdFLE1BQWpCLENBQXdCLEdBQUdDLElBQTNCO0FBQ0gsQ0FGRDs7QUFHQSxNQUFNQyxTQUFTLEdBQUksQ0FBQyxHQUFHRCxJQUFKLEtBQWE7QUFDNUIsUUFBTUUsR0FBRyxHQUFHTCxjQUFjLEdBQUdJLFNBQWpCLENBQTJCLEdBQUdELElBQTlCLENBQVo7QUFDQSxRQUFNO0FBQUVHO0FBQUYsTUFBWUQsR0FBbEI7O0FBQ0FBLEtBQUcsQ0FBQ0MsS0FBSixHQUFZLE1BQU07QUFDZCxVQUFNQyxJQUFJLEdBQUd4QixPQUFPLENBQUNyQyxhQUFSLENBQXNCLHVCQUF0QixDQUFiLENBRGMsQ0FFZDs7QUFDQSxXQUFPNEQsS0FBSyxDQUFDQyxJQUFELENBQVo7QUFDSCxHQUpEOztBQUtBLFNBQU9GLEdBQVA7QUFDSCxDQVREIiwiZmlsZSI6ImJ1bmRsZS4wM2VhY2MxM2MxOTNiNjBiNjQyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVuZGVyZXIgfSBmcm9tICdAdnVlL3J1bnRpbWUtY29yZSc7XG5leHBvcnQgKiBmcm9tICdAdnVlL3J1bnRpbWUtY29yZSc7XG5pbXBvcnQgeyBtYXJrTm9uUmVhY3RpdmUgfSBmcm9tICdAdnVlL3JlYWN0aXZpdHknO1xuXG5sZXQgbm9kZUlkID0gMDtcclxubGV0IHJlY29yZGVkTm9kZU9wcyA9IFtdO1xyXG5mdW5jdGlvbiBsb2dOb2RlT3Aob3ApIHtcclxuICAgIHJlY29yZGVkTm9kZU9wcy5wdXNoKG9wKTtcclxufVxyXG5mdW5jdGlvbiByZXNldE9wcygpIHtcclxuICAgIHJlY29yZGVkTm9kZU9wcyA9IFtdO1xyXG59XHJcbmZ1bmN0aW9uIGR1bXBPcHMoKSB7XHJcbiAgICBjb25zdCBvcHMgPSByZWNvcmRlZE5vZGVPcHMuc2xpY2UoKTtcclxuICAgIHJlc2V0T3BzKCk7XHJcbiAgICByZXR1cm4gb3BzO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnKSB7XHJcbiAgICBjb25zdCBub2RlID0ge1xyXG4gICAgICAgIGlkOiBub2RlSWQrKyxcclxuICAgICAgICB0eXBlOiBcImVsZW1lbnRcIiAvKiBFTEVNRU5UICovLFxyXG4gICAgICAgIHRhZyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgcHJvcHM6IHt9LFxyXG4gICAgICAgIHBhcmVudE5vZGU6IG51bGwsXHJcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnM6IG51bGxcclxuICAgIH07XHJcbiAgICBsb2dOb2RlT3Aoe1xyXG4gICAgICAgIHR5cGU6IFwiY3JlYXRlXCIgLyogQ1JFQVRFICovLFxyXG4gICAgICAgIG5vZGVUeXBlOiBcImVsZW1lbnRcIiAvKiBFTEVNRU5UICovLFxyXG4gICAgICAgIHRhcmdldE5vZGU6IG5vZGUsXHJcbiAgICAgICAgdGFnXHJcbiAgICB9KTtcclxuICAgIC8vIGF2b2lkIHRlc3Qgbm9kZXMgZnJvbSBiZWluZyBvYnNlcnZlZFxyXG4gICAgbWFya05vblJlYWN0aXZlKG5vZGUpO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlVGV4dCh0ZXh0KSB7XHJcbiAgICBjb25zdCBub2RlID0ge1xyXG4gICAgICAgIGlkOiBub2RlSWQrKyxcclxuICAgICAgICB0eXBlOiBcInRleHRcIiAvKiBURVhUICovLFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgcGFyZW50Tm9kZTogbnVsbFxyXG4gICAgfTtcclxuICAgIGxvZ05vZGVPcCh7XHJcbiAgICAgICAgdHlwZTogXCJjcmVhdGVcIiAvKiBDUkVBVEUgKi8sXHJcbiAgICAgICAgbm9kZVR5cGU6IFwidGV4dFwiIC8qIFRFWFQgKi8sXHJcbiAgICAgICAgdGFyZ2V0Tm9kZTogbm9kZSxcclxuICAgICAgICB0ZXh0XHJcbiAgICB9KTtcclxuICAgIC8vIGF2b2lkIHRlc3Qgbm9kZXMgZnJvbSBiZWluZyBvYnNlcnZlZFxyXG4gICAgbWFya05vblJlYWN0aXZlKG5vZGUpO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCh0ZXh0KSB7XHJcbiAgICBjb25zdCBub2RlID0ge1xyXG4gICAgICAgIGlkOiBub2RlSWQrKyxcclxuICAgICAgICB0eXBlOiBcImNvbW1lbnRcIiAvKiBDT01NRU5UICovLFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgcGFyZW50Tm9kZTogbnVsbFxyXG4gICAgfTtcclxuICAgIGxvZ05vZGVPcCh7XHJcbiAgICAgICAgdHlwZTogXCJjcmVhdGVcIiAvKiBDUkVBVEUgKi8sXHJcbiAgICAgICAgbm9kZVR5cGU6IFwiY29tbWVudFwiIC8qIENPTU1FTlQgKi8sXHJcbiAgICAgICAgdGFyZ2V0Tm9kZTogbm9kZSxcclxuICAgICAgICB0ZXh0XHJcbiAgICB9KTtcclxuICAgIC8vIGF2b2lkIHRlc3Qgbm9kZXMgZnJvbSBiZWluZyBvYnNlcnZlZFxyXG4gICAgbWFya05vblJlYWN0aXZlKG5vZGUpO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuZnVuY3Rpb24gc2V0VGV4dChub2RlLCB0ZXh0KSB7XHJcbiAgICBsb2dOb2RlT3Aoe1xyXG4gICAgICAgIHR5cGU6IFwic2V0VGV4dFwiIC8qIFNFVF9URVhUICovLFxyXG4gICAgICAgIHRhcmdldE5vZGU6IG5vZGUsXHJcbiAgICAgICAgdGV4dFxyXG4gICAgfSk7XHJcbiAgICBub2RlLnRleHQgPSB0ZXh0O1xyXG59XHJcbmZ1bmN0aW9uIGluc2VydChjaGlsZCwgcGFyZW50LCByZWYpIHtcclxuICAgIGxldCByZWZJbmRleDtcclxuICAgIGlmIChyZWYgIT0gbnVsbCkge1xyXG4gICAgICAgIHJlZkluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YocmVmKTtcclxuICAgICAgICBpZiAocmVmSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3JlZjogJywgcmVmKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncGFyZW50OiAnLCBwYXJlbnQpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlZiBpcyBub3QgYSBjaGlsZCBvZiBwYXJlbnQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2dOb2RlT3Aoe1xyXG4gICAgICAgIHR5cGU6IFwiaW5zZXJ0XCIgLyogSU5TRVJUICovLFxyXG4gICAgICAgIHRhcmdldE5vZGU6IGNoaWxkLFxyXG4gICAgICAgIHBhcmVudE5vZGU6IHBhcmVudCxcclxuICAgICAgICByZWZOb2RlOiByZWZcclxuICAgIH0pO1xyXG4gICAgLy8gcmVtb3ZlIHRoZSBub2RlIGZpcnN0LCBidXQgZG9uJ3QgbG9nIGl0IGFzIGEgUkVNT1ZFIG9wXHJcbiAgICByZW1vdmUoY2hpbGQsIGZhbHNlKTtcclxuICAgIC8vIHJlLWNhbGN1bGF0ZSB0aGUgcmVmIGluZGV4IGJlY2F1c2UgdGhlIGNoaWxkJ3MgcmVtb3ZhbCBtYXkgaGF2ZSBhZmZlY3RlZCBpdFxyXG4gICAgcmVmSW5kZXggPSByZWYgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihyZWYpIDogLTE7XHJcbiAgICBpZiAocmVmSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSBwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKHJlZkluZGV4LCAwLCBjaGlsZCk7XHJcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHBhcmVudDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZW1vdmUoY2hpbGQsIGxvZ09wID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gY2hpbGQucGFyZW50Tm9kZTtcclxuICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChsb2dPcCkge1xyXG4gICAgICAgICAgICBsb2dOb2RlT3Aoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZW1vdmVcIiAvKiBSRU1PVkUgKi8sXHJcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlOiBjaGlsZCxcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGU6IHBhcmVudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaSA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgICAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0YXJnZXQ6ICcsIGNoaWxkKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncGFyZW50OiAnLCBwYXJlbnQpO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndGFyZ2V0IGlzIG5vdCBhIGNoaWxkTm9kZSBvZiBwYXJlbnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0RWxlbWVudFRleHQoZWwsIHRleHQpIHtcclxuICAgIGxvZ05vZGVPcCh7XHJcbiAgICAgICAgdHlwZTogXCJzZXRFbGVtZW50VGV4dFwiIC8qIFNFVF9FTEVNRU5UX1RFWFQgKi8sXHJcbiAgICAgICAgdGFyZ2V0Tm9kZTogZWwsXHJcbiAgICAgICAgdGV4dFxyXG4gICAgfSk7XHJcbiAgICBlbC5jaGlsZHJlbi5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGMucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICB9KTtcclxuICAgIGlmICghdGV4dCkge1xyXG4gICAgICAgIGVsLmNoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBlbC5jaGlsZHJlbiA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG5vZGVJZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIgLyogVEVYVCAqLyxcclxuICAgICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBlbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwYXJlbnROb2RlKG5vZGUpIHtcclxuICAgIHJldHVybiBub2RlLnBhcmVudE5vZGU7XHJcbn1cclxuZnVuY3Rpb24gbmV4dFNpYmxpbmcobm9kZSkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGkgPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKTtcclxuICAgIHJldHVybiBwYXJlbnQuY2hpbGRyZW5baSArIDFdIHx8IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gcXVlcnlTZWxlY3RvcigpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigncXVlcnlTZWxlY3RvciBub3Qgc3VwcG9ydGVkIGluIHRlc3QgcmVuZGVyZXIuJyk7XHJcbn1cclxuZnVuY3Rpb24gc2V0U2NvcGVJZChlbCwgaWQpIHtcclxuICAgIGVsLnByb3BzW2lkXSA9ICcnO1xyXG59XHJcbmNvbnN0IG5vZGVPcHMgPSB7XHJcbiAgICBpbnNlcnQsXHJcbiAgICByZW1vdmUsXHJcbiAgICBjcmVhdGVFbGVtZW50LFxyXG4gICAgY3JlYXRlVGV4dCxcclxuICAgIGNyZWF0ZUNvbW1lbnQsXHJcbiAgICBzZXRUZXh0LFxyXG4gICAgc2V0RWxlbWVudFRleHQsXHJcbiAgICBwYXJlbnROb2RlLFxyXG4gICAgbmV4dFNpYmxpbmcsXHJcbiAgICBxdWVyeVNlbGVjdG9yLFxyXG4gICAgc2V0U2NvcGVJZFxyXG59O1xuXG5jb25zdCBFTVBUWV9PQkogPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJylcclxuICAgID8gT2JqZWN0LmZyZWV6ZSh7fSlcclxuICAgIDoge307XHJcbmNvbnN0IGlzT24gPSAoa2V5KSA9PiBrZXlbMF0gPT09ICdvJyAmJiBrZXlbMV0gPT09ICduJztcblxuZnVuY3Rpb24gcGF0Y2hQcm9wKGVsLCBrZXksIG5leHRWYWx1ZSwgcHJldlZhbHVlKSB7XHJcbiAgICBsb2dOb2RlT3Aoe1xyXG4gICAgICAgIHR5cGU6IFwicGF0Y2hcIiAvKiBQQVRDSCAqLyxcclxuICAgICAgICB0YXJnZXROb2RlOiBlbCxcclxuICAgICAgICBwcm9wS2V5OiBrZXksXHJcbiAgICAgICAgcHJvcFByZXZWYWx1ZTogcHJldlZhbHVlLFxyXG4gICAgICAgIHByb3BOZXh0VmFsdWU6IG5leHRWYWx1ZVxyXG4gICAgfSk7XHJcbiAgICBlbC5wcm9wc1trZXldID0gbmV4dFZhbHVlO1xyXG4gICAgaWYgKGlzT24oa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50ID0ga2V5LnNsaWNlKDIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgKGVsLmV2ZW50TGlzdGVuZXJzIHx8IChlbC5ldmVudExpc3RlbmVycyA9IHt9KSlbZXZlbnRdID0gbmV4dFZhbHVlO1xyXG4gICAgfVxyXG59XG5cbmNvbnN0IHJlbmRlcmVyT3B0aW9ucyA9IHtcclxuICAgIHBhdGNoUHJvcCxcclxuICAgIC4uLm5vZGVPcHNcclxufTtcclxubGV0IHJlbmRlcmVyO1xyXG5mdW5jdGlvbiBlbnN1cmVSZW5kZXJlcigpIHtcclxuICAgIHJldHVybiByZW5kZXJlciB8fCAocmVuZGVyZXIgPSBjcmVhdGVSZW5kZXJlcihyZW5kZXJlck9wdGlvbnMpKTtcclxufVxyXG5jb25zdCByZW5kZXIgPSAoKC4uLmFyZ3MpID0+IHtcclxuICAgIGVuc3VyZVJlbmRlcmVyKCkucmVuZGVyKC4uLmFyZ3MpO1xyXG59KTtcclxuY29uc3QgY3JlYXRlQXBwID0gKCguLi5hcmdzKSA9PiB7XHJcbiAgICBjb25zdCBhcHAgPSBlbnN1cmVSZW5kZXJlcigpLmNyZWF0ZUFwcCguLi5hcmdzKTtcclxuICAgIGNvbnN0IHsgbW91bnQgfSA9IGFwcDtcclxuICAgIGFwcC5tb3VudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByb290ID0gbm9kZU9wcy5jcmVhdGVFbGVtZW50KCduYXRpdmVzY3JpcHQtdnVlLXJvb3QnKTtcclxuICAgICAgICAvLyB0b2RvOiBhcHAucnVuIGZyb20gbnNcclxuICAgICAgICByZXR1cm4gbW91bnQocm9vdCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGFwcDtcclxufSk7XG5cbmV4cG9ydCB7IGNyZWF0ZUFwcCwgZHVtcE9wcywgbG9nTm9kZU9wLCBub2RlT3BzLCByZW5kZXIsIHJlc2V0T3BzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9