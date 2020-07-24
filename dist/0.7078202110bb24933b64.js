(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/themes/default/views/Home.vue":
/*!*******************************************************!*\
  !*** ./src/themes/default/views/Home.vue + 6 modules ***!
  \*******************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuex/dist/vuex.esm.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/views/Home.vue?vue&type=template&id=7721dc85&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"home"}},[(_vm.visibleMenu)?_c('ul',_vm._l((_vm.visibleMenu),function(blog,index){return _c('li',{key:index},[_c('h1',[_vm._v(_vm._s(blog.title))]),_c('p',[_vm._v(_vm._s(blog.body))])])}),0):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/themes/default/views/Home.vue?vue&type=template&id=7721dc85&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// CONCATENATED MODULE: ./src/themes/default/event-bus/index.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // will be replaced with new mechanism with code-completion (via modules), don't use if you don't need to

/**
 * Filter extension is for running async data filters as event handlers
 * Example:
 * let product = {}
 * EventBus.$filter('after-product-changed', (product) => {
 *  return Promise ((resolve, reject) => {
 *    product.sku = 'abc'
 *    resolve (product)
 *  })
 * })
 * EventBus.$filter('after-product-changed', (product) => {
 *  return Promise ((resolve, reject) => {
 *    product.name = 'ABC'
 *    resolve (product)
 *  })
 * })
 * EventBus.$emitFilter('after-product-changed', product).then((resultsFromEventHanlders) => {
 *  // here you have data modified by extensions
 *  // resultsFromEventHanlders = [ { sku: abc, name: 'ABC' }, { sku: abc, name: 'ABC' } ]
 * })
 */

var filterExt = {
  $dataFilters: {
    value: [],
    writable: true
  },
  // data filters to be registered by extension developers
  $filter: {
    get: function get() {
      var _this = this;

      return function (eventName, callback) {
        if (!_this.$dataFilters[eventName]) {
          _this.$dataFilters[eventName] = [];
        }

        _this.$dataFilters[eventName].push(callback);
      };
    }
  },
  $emitFilter: {
    get: function get() {
      var _this2 = this;

      return function (eventName) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (args.length === 1) {
          args = args[0];
        }

        _this2.$emit(eventName, args);

        var promises = [];

        if (_this2.$dataFilters[eventName]) {
          var _iterator = _createForOfIteratorHelper(_this2.$dataFilters[eventName]),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var cb = _step.value;
              promises.push(cb(args));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return Promise.all(promises);
      };
    }
  }
};
var EventBus = new vue_runtime_esm["default"]();

if (!EventBus.$dataFilters) {
  Object.defineProperties(EventBus, filterExt);
}

var EventBusPlugin = {
  install: function install(Vue) {
    if (!Vue.prototype.$bus) {
      /** Vue.prototype.$bus is now @deprecated please do use `EventBus` instead */
      Object.defineProperties(Vue.prototype, {
        $bus: {
          get: function get() {
            return EventBus;
          }
        }
      });
    }
  }
};

// CONCATENATED MODULE: ./src/themes/default/views/composite.js
 // @deprecated from 2.0

/* harmony default export */ var composite = ({
  beforeCreated: function beforeCreated() {
    var eventName = this.$options.name.toLowerCase() + '-before-created';
    console.log(eventName, 'event');
    EventBus.$emit(eventName, this);
  },
  created: function created() {
    var eventName = this.$options.name.toLowerCase() + '-after-created';
    console.log(eventName, 'event');
    EventBus.$emit(eventName, this);
  },
  beforeMount: function beforeMount() {
    var eventName = this.$options.name.toLowerCase() + '-before-mount';
    console.log(eventName, 'event');
    EventBus.$emit(eventName, this);
  },
  mounted: function mounted() {
    var eventName = this.$options.name.toLowerCase() + '-after-mounted';
    console.log(eventName, 'event');
    EventBus.$emit(eventName, this);
  }
});
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/themes/default/views/Home.vue?vue&type=script&lang=js&
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  name: 'Home',
  mixins: [composite],
  computed: _objectSpread({}, Object(vuex_esm["mapGetters"])({
    visibleMenu: 'vesMenu/getBlogs'
  })),
  // serverside fetch
  serverPrefetch: function serverPrefetch() {
    return this.$store.dispatch('vesMenu/getMenu', 'url');
  },
  // client side
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var test;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.visibleMenu) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return _this.$store.dispatch('vesMenu/getMenu', 'url');

            case 3:
              test = _context.sent;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./src/themes/default/views/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/themes/default/views/Home.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  views_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);