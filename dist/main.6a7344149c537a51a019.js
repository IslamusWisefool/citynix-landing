/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/btn/btn.js":
/*!********************************!*\
  !*** ./src/modules/btn/btn.js ***!
  \********************************/
/***/ (() => {

// const btns = document.querySelectorAll(".btn[data-btn]");

// for (let btn of btns) {
//   btn.addEventListener("click", () => btnModalHandler(btn));
// }

// function btnModalHandler(btn) {
//    dataBtn =  btn.getAttribute('data-btn')
// }

// function btnModalHandler(btn) {
//   switch (btn.getAttribute("data-btn")) {
//     case "default":
//       modalWindow.setAttribute("data-state", "true");
//       break;
//     case "warning":
//       console.log("warning");
//       break;
//     case "succes":
//       console.log("succes");
//       break;
//     case "danger":
//       console.log("danger");
//       break;
//     case "info":
//       console.log("info");
//       break;
//   }f

/***/ }),

/***/ "./src/modules/navbar/nav.js":
/*!***********************************!*\
  !*** ./src/modules/navbar/nav.js ***!
  \***********************************/
/***/ (() => {

var navMenu = document.querySelector(".nav__menu");
var burger = document.querySelector(".nav__burger");
burger.addEventListener("click", function () {
  return burgerHandler();
});
function burgerHandler() {
  console.log(burger.getAttribute("data-state"));
  switch (burger.getAttribute("data-state")) {
    case "true":
      burger.setAttribute("data-state", "false");
      navMenu.setAttribute("data-state", "false");
      break;
    case "false":
      burger.setAttribute("data-state", "true");
      navMenu.setAttribute("data-state", "true");
      break;
  }
}

/***/ }),

/***/ "./src/modules/slider/itc-slider.js":
/*!******************************************!*\
  !*** ./src/modules/slider/itc-slider.js ***!
  \******************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _config = /*#__PURE__*/new WeakMap();
var _state = /*#__PURE__*/new WeakMap();
var _onClick = /*#__PURE__*/new WeakSet();
var _onMouseEnter = /*#__PURE__*/new WeakSet();
var _onMouseLeave = /*#__PURE__*/new WeakSet();
var _onResize = /*#__PURE__*/new WeakSet();
var _onSwipeStart = /*#__PURE__*/new WeakSet();
var _onSwipeEnd = /*#__PURE__*/new WeakSet();
var _onTransitionStart = /*#__PURE__*/new WeakSet();
var _onTransitionEnd = /*#__PURE__*/new WeakSet();
var _onDragStart = /*#__PURE__*/new WeakSet();
var _onVisibilityChange = /*#__PURE__*/new WeakSet();
var _attachEvents = /*#__PURE__*/new WeakSet();
var _detachEvents = /*#__PURE__*/new WeakSet();
var _autoplay = /*#__PURE__*/new WeakSet();
var _balanceItems = /*#__PURE__*/new WeakSet();
var _updateClasses = /*#__PURE__*/new WeakSet();
var _move = /*#__PURE__*/new WeakSet();
var _moveTo = /*#__PURE__*/new WeakSet();
var _init = /*#__PURE__*/new WeakSet();
var _reset = /*#__PURE__*/new WeakSet();
var _updateExProperties = /*#__PURE__*/new WeakSet();
/**
 * @class ItcSlider
 * @version 1.0.1
 * @author https://github.com/itchief
 * @copyright Alexander Maltsev 2020 - 2023
 * @license MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)
 * @tutorial https://itchief.ru/javascript/slider
 */
var ItcSlider = /*#__PURE__*/function () {
  /**
   * @param {HTMLElement} el
   * @param {Object} config
   * @param {String} prefix
   */
  function ItcSlider(_el) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'itc-slider-';
    _classCallCheck(this, ItcSlider);
    _classPrivateMethodInitSpec(this, _updateExProperties);
    _classPrivateMethodInitSpec(this, _reset);
    // приватный метод для выполнения первичной инициализации
    _classPrivateMethodInitSpec(this, _init);
    _classPrivateMethodInitSpec(this, _moveTo);
    _classPrivateMethodInitSpec(this, _move);
    _classPrivateMethodInitSpec(this, _updateClasses);
    _classPrivateMethodInitSpec(this, _balanceItems);
    _classPrivateMethodInitSpec(this, _autoplay);
    _classPrivateMethodInitSpec(this, _detachEvents);
    _classPrivateMethodInitSpec(this, _attachEvents);
    _classPrivateMethodInitSpec(this, _onVisibilityChange);
    _classPrivateMethodInitSpec(this, _onDragStart);
    _classPrivateMethodInitSpec(this, _onTransitionEnd);
    _classPrivateMethodInitSpec(this, _onTransitionStart);
    _classPrivateMethodInitSpec(this, _onSwipeEnd);
    _classPrivateMethodInitSpec(this, _onSwipeStart);
    _classPrivateMethodInitSpec(this, _onResize);
    _classPrivateMethodInitSpec(this, _onMouseLeave);
    _classPrivateMethodInitSpec(this, _onMouseEnter);
    _classPrivateMethodInitSpec(this, _onClick);
    _classPrivateFieldInitSpec(this, _config, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _state, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _state, {
      prefix: prefix,
      // префикс для классов
      el: _el,
      // элемент который нужно активировать как ItcSlider
      elWrapper: _el.querySelector(".".concat(prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_WRAPPER))),
      // элемент с #CLASS_WRAPPER
      elItems: _el.querySelector(".".concat(prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_ITEMS))),
      // элемент, в котором находятся слайды
      elListItem: _el.querySelectorAll(".".concat(prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_ITEM))),
      // список элементов, являющиеся слайдами
      btnPrev: _el.querySelector(".".concat(prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _BTN_PREV))),
      // кнопка, для перехода к предыдущему слайду
      btnNext: _el.querySelector(".".concat(prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _BTN_NEXT))),
      // кнопка, для перехода к следующему слайду
      btnClassHide: prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _BTN_HIDE),
      // класс для скрытия кнопки
      exOrderMin: 0,
      exOrderMax: 0,
      exItemMin: null,
      exItemMax: null,
      exTranslateMin: 0,
      exTranslateMax: 0,
      direction: 'next',
      // направление смены слайдов
      intervalId: null,
      // id таймера
      isSwiping: false,
      swipeX: 0
    });
    _classPrivateFieldSet(this, _config, _objectSpread({
      loop: true,
      autoplay: false,
      interval: 5000,
      refresh: true,
      swipe: true
    }, config));
    _classPrivateMethodGet(this, _init, _init2).call(this);
    _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this);
  }

  /**
   * Статический метод, который возвращает экземпляр ItcSlider, связанный с DOM-элементом
   * @param {HTMLElement} elSlider
   * @returns {?ItcSlider}
   */
  _createClass(ItcSlider, [{
    key: "slideNext",
    value: function slideNext() {
      _classPrivateFieldGet(this, _state).direction = 'next';
      _classPrivateMethodGet(this, _move, _move2).call(this);
    }
  }, {
    key: "slidePrev",
    value: function slidePrev() {
      _classPrivateFieldGet(this, _state).direction = 'prev';
      _classPrivateMethodGet(this, _move, _move2).call(this);
    }
  }, {
    key: "slideTo",
    value: function slideTo(index) {
      _classPrivateMethodGet(this, _moveTo, _moveTo2).call(this, index);
    }
  }, {
    key: "reset",
    value: function reset() {
      _classPrivateMethodGet(this, _reset, _reset2).call(this);
    }
  }, {
    key: "autoplay",
    get: function get() {
      var _this = this;
      return {
        // Start autoplay
        start: function start() {
          _classPrivateFieldGet(_this, _config).autoplay = true;
          _classPrivateMethodGet(_this, _autoplay, _autoplay2).call(_this);
        },
        // Stop autoplay
        stop: function stop() {
          _classPrivateMethodGet(_this, _autoplay, _autoplay2).call(_this, 'stop');
          _classPrivateFieldGet(_this, _config).autoplay = false;
        }
      };
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _this2 = this;
      _classPrivateMethodGet(this, _detachEvents, _detachEvents2).call(this);
      var transitionNoneClass = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _TRANSITION_NONE);
      var activeClass = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_ITEM_ACTIVE);
      _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');
      _classPrivateFieldGet(this, _state).elItems.classList.add(transitionNoneClass);
      _classPrivateFieldGet(this, _state).elItems.style.transform = '';
      _classPrivateFieldGet(this, _state).elListItem.forEach(function (el) {
        el.style.transform = '';
        el.classList.remove(activeClass);
      });
      var selIndicators = "".concat(_classPrivateFieldGet(this, _state).prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_INDICATOR_ACTIVE));
      document.querySelectorAll(".".concat(selIndicators)).forEach(function (el) {
        el.classList.remove(selIndicators);
      });
      _classPrivateFieldGet(this, _state).elItems.offsetHeight;
      _classPrivateFieldGet(this, _state).elItems.classList.remove(transitionNoneClass);
      var index = _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _instances).findIndex(function (el) {
        return el.target === _classPrivateFieldGet(_this2, _state).el;
      });
      _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _instances).splice(index, 1);
    }
  }], [{
    key: "getInstance",
    value: function getInstance(elSlider) {
      var found = _classStaticPrivateFieldSpecGet(this, ItcSlider, _instances).find(function (el) {
        return el.target === elSlider;
      });
      if (found) {
        return found.instance;
      }
      return null;
    }

    /**
     * @param {String|HTMLElement} target
     * @param {Object} config
     * @param {String} prefix
     */
  }, {
    key: "getOrCreateInstance",
    value: function getOrCreateInstance(target) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'itc-slider-';
      var elSlider = typeof target === 'string' ? document.querySelector(target) : target;
      var result = this.getInstance(elSlider);
      if (result) {
        return result;
      }
      var slider = new this(elSlider, config, prefix);
      _classStaticPrivateFieldSpecGet(this, ItcSlider, _instances).push({
        target: elSlider,
        instance: slider
      });
      return slider;
    }

    // статический метод для активирования элементов как ItcSlider на основе data-атрибутов
  }, {
    key: "createInstances",
    value: function createInstances() {
      var _this3 = this;
      document.querySelectorAll('[data-slider="itc-slider"]').forEach(function (el) {
        var dataset = el.dataset;
        var params = {};
        Object.keys(dataset).forEach(function (key) {
          if (key === 'slider') {
            return;
          }
          var value = dataset[key];
          value = value === 'true' ? true : value;
          value = value === 'false' ? false : value;
          value = Number.isNaN(Number(value)) ? Number(value) : value;
          params[key] = value;
        });
        _this3.getOrCreateInstance(el, params);
      });
    }
  }]);
  return ItcSlider;
}();
function _onClick2(e) {
  if (!(e.target.closest('.itc-slider-btn') || e.target.closest('.itc-slider-indicators'))) {
    return;
  }
  e.preventDefault();
  var classBtnPrev = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _BTN_PREV);
  var classBtnNext = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _BTN_NEXT);
  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');
  if (e.target.closest(".".concat(classBtnPrev)) || e.target.closest(".".concat(classBtnNext))) {
    _classPrivateFieldGet(this, _state).direction = e.target.closest(".".concat(classBtnPrev)) ? 'prev' : 'next';
    _classPrivateMethodGet(this, _move, _move2).call(this);
  } else if (e.target.dataset.slideTo) {
    var index = parseInt(e.target.dataset.slideTo, 10);
    _classPrivateMethodGet(this, _moveTo, _moveTo2).call(this, index);
  }
  _classPrivateFieldGet(this, _config).loop ? _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this) : null;
}
function _onMouseEnter2() {
  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');
}
function _onMouseLeave2() {
  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this);
}
function _onResize2() {
  window.requestAnimationFrame(_classPrivateMethodGet(this, _reset, _reset2).bind(this));
}
function _onSwipeStart2(e) {
  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');
  var event = e.type.search('touch') === 0 ? e.touches[0] : e;
  _classPrivateFieldGet(this, _state).swipeX = event.clientX;
  _classPrivateFieldGet(this, _state).isSwiping = true;
}
function _onSwipeEnd2(e) {
  if (!_classPrivateFieldGet(this, _state).isSwiping) {
    return;
  }
  var event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
  var diffPos = _classPrivateFieldGet(this, _state).swipeX - event.clientX;
  if (diffPos > 50) {
    _classPrivateFieldGet(this, _state).direction = 'next';
    _classPrivateMethodGet(this, _move, _move2).call(this);
  } else if (diffPos < -50) {
    _classPrivateFieldGet(this, _state).direction = 'prev';
    _classPrivateMethodGet(this, _move, _move2).call(this);
  }
  _classPrivateFieldGet(this, _state).isSwiping = false;
  if (_classPrivateFieldGet(this, _config).loop) {
    _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this);
  }
}
function _onTransitionStart2() {
  if (_classPrivateFieldGet(this, _state).isBalancing) {
    return;
  }
  _classPrivateFieldGet(this, _state).isBalancing = true;
  window.requestAnimationFrame(_classPrivateMethodGet(this, _balanceItems, _balanceItems2).bind(this));
}
function _onTransitionEnd2() {
  _classPrivateFieldGet(this, _state).isBalancing = false;
}
function _onDragStart2(e) {
  e.preventDefault();
}
function _onVisibilityChange2() {
  if (document.visibilityState === 'hidden') {
    _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');
  } else if (document.visibilityState === 'visible' && _classPrivateFieldGet(this, _config).loop) {
    _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this);
  }
}
function _attachEvents2() {
  var _this4 = this;
  _classPrivateFieldGet(this, _state).events = {
    click: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _onClick, _onClick2).bind(this), true],
    mouseenter: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _onMouseEnter, _onMouseEnter2).bind(this), true],
    mouseleave: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _onMouseLeave, _onMouseLeave2).bind(this), true],
    resize: [window, _classPrivateMethodGet(this, _onResize, _onResize2).bind(this), _classPrivateFieldGet(this, _config).refresh],
    animating: [_classPrivateFieldGet(this, _state).elItems, _classPrivateMethodGet(this, _onTransitionStart, _onTransitionStart2).bind(this), _classPrivateFieldGet(this, _config).loop],
    transitionend: [_classPrivateFieldGet(this, _state).elItems, _classPrivateMethodGet(this, _onTransitionEnd, _onTransitionEnd2).bind(this), _classPrivateFieldGet(this, _config).loop],
    touchstart: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _onSwipeStart, _onSwipeStart2).bind(this), _classPrivateFieldGet(this, _config).swipe],
    mousedown: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _onSwipeStart, _onSwipeStart2).bind(this), _classPrivateFieldGet(this, _config).swipe],
    touchend: [document, _classPrivateMethodGet(this, _onSwipeEnd, _onSwipeEnd2).bind(this), _classPrivateFieldGet(this, _config).swipe],
    mouseup: [document, _classPrivateMethodGet(this, _onSwipeEnd, _onSwipeEnd2).bind(this), _classPrivateFieldGet(this, _config).swipe],
    dragstart: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _onDragStart, _onDragStart2).bind(this), true],
    visibilitychange: [document, _classPrivateMethodGet(this, _onVisibilityChange, _onVisibilityChange2).bind(this), true]
  };
  Object.keys(_classPrivateFieldGet(this, _state).events).forEach(function (type) {
    if (_classPrivateFieldGet(_this4, _state).events[type][2]) {
      var el = _classPrivateFieldGet(_this4, _state).events[type][0];
      var fn = _classPrivateFieldGet(_this4, _state).events[type][1];
      el.addEventListener(type, fn);
    }
  });
}
function _detachEvents2() {
  var _this5 = this;
  Object.keys(_classPrivateFieldGet(this, _state).events).forEach(function (type) {
    if (_classPrivateFieldGet(_this5, _state).events[type][2]) {
      var el = _classPrivateFieldGet(_this5, _state).events[type][0];
      var fn = _classPrivateFieldGet(_this5, _state).events[type][1];
      el.removeEventListener(type, fn);
    }
  });
}
function _autoplay2(action) {
  var _this6 = this;
  if (!_classPrivateFieldGet(this, _config).autoplay) {
    return;
  }
  if (action === 'stop') {
    clearInterval(_classPrivateFieldGet(this, _state).intervalId);
    _classPrivateFieldGet(this, _state).intervalId = null;
    return;
  }
  if (_classPrivateFieldGet(this, _state).intervalId === null) {
    _classPrivateFieldGet(this, _state).intervalId = setInterval(function () {
      _classPrivateFieldGet(_this6, _state).direction = 'next';
      _classPrivateMethodGet(_this6, _move, _move2).call(_this6);
    }, _classPrivateFieldGet(this, _config).interval);
  }
}
function _balanceItems2() {
  var _this7 = this;
  if (!_classPrivateFieldGet(this, _state).isBalancing) {
    return;
  }
  var wrapperRect = _classPrivateFieldGet(this, _state).elWrapper.getBoundingClientRect();
  var targetWidth = wrapperRect.width / _classPrivateFieldGet(this, _state).countActiveItems / 2;
  var countItems = _classPrivateFieldGet(this, _state).elListItem.length;
  if (_classPrivateFieldGet(this, _state).direction === 'next') {
    var exItemRectRight = _classPrivateFieldGet(this, _state).exItemMin.getBoundingClientRect().right;
    if (exItemRectRight < wrapperRect.left - targetWidth) {
      var elFound = _classPrivateFieldGet(this, _state).els.find(function (item) {
        return item.el === _classPrivateFieldGet(_this7, _state).exItemMin;
      });
      elFound.order = _classPrivateFieldGet(this, _state).exOrderMin + countItems;
      var translate = _classPrivateFieldGet(this, _state).exTranslateMin + countItems * _classPrivateFieldGet(this, _state).width;
      elFound.translate = translate;
      _classPrivateFieldGet(this, _state).exItemMin.style.transform = "translate3D(".concat(translate, "px, 0px, 0.1px)");
      _classPrivateMethodGet(this, _updateExProperties, _updateExProperties2).call(this);
    }
  } else {
    var exItemRectLeft = _classPrivateFieldGet(this, _state).exItemMax.getBoundingClientRect().left;
    if (exItemRectLeft > wrapperRect.right + targetWidth) {
      var _elFound = _classPrivateFieldGet(this, _state).els.find(function (item) {
        return item.el === _classPrivateFieldGet(_this7, _state).exItemMax;
      });
      _elFound.order = _classPrivateFieldGet(this, _state).exOrderMax - countItems;
      var _translate = _classPrivateFieldGet(this, _state).exTranslateMax - countItems * _classPrivateFieldGet(this, _state).width;
      _elFound.translate = _translate;
      _classPrivateFieldGet(this, _state).exItemMax.style.transform = "translate3D(".concat(_translate, "px, 0px, 0.1px)");
      _classPrivateMethodGet(this, _updateExProperties, _updateExProperties2).call(this);
    }
  }
  window.requestAnimationFrame(_classPrivateMethodGet(this, _balanceItems, _balanceItems2).bind(this));
}
function _updateClasses2() {
  var _this8 = this;
  var activeClass = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_ITEM_ACTIVE);
  _classPrivateFieldGet(this, _state).activeItems.forEach(function (item, index) {
    if (item) {
      _classPrivateFieldGet(_this8, _state).elListItem[index].classList.add(activeClass);
    } else {
      _classPrivateFieldGet(_this8, _state).elListItem[index].classList.remove(activeClass);
    }
    var elListIndicators = _classPrivateFieldGet(_this8, _state).el.querySelectorAll(".".concat(_classPrivateFieldGet(_this8, _state).prefix).concat(_classStaticPrivateFieldSpecGet(_this8.constructor, ItcSlider, _EL_INDICATOR)));
    if (elListIndicators.length && item) {
      elListIndicators[index].classList.add("".concat(_classPrivateFieldGet(_this8, _state).prefix).concat(_classStaticPrivateFieldSpecGet(_this8.constructor, ItcSlider, _EL_INDICATOR_ACTIVE)));
    } else if (elListIndicators.length && !item) {
      elListIndicators[index].classList.remove("".concat(_classPrivateFieldGet(_this8, _state).prefix).concat(_classStaticPrivateFieldSpecGet(_this8.constructor, ItcSlider, _EL_INDICATOR_ACTIVE)));
    }
  });
}
function _move2() {
  var widthItem = _classPrivateFieldGet(this, _state).direction === 'next' ? -_classPrivateFieldGet(this, _state).width : _classPrivateFieldGet(this, _state).width;
  var transform = _classPrivateFieldGet(this, _state).translate + widthItem;
  if (!_classPrivateFieldGet(this, _config).loop) {
    var limit = _classPrivateFieldGet(this, _state).width * (_classPrivateFieldGet(this, _state).elListItem.length - _classPrivateFieldGet(this, _state).countActiveItems);
    if (transform < -limit || transform > 0) {
      return;
    }
    if (_classPrivateFieldGet(this, _state).btnPrev) {
      _classPrivateFieldGet(this, _state).btnPrev.classList.remove(_classPrivateFieldGet(this, _state).btnClassHide);
      _classPrivateFieldGet(this, _state).btnNext.classList.remove(_classPrivateFieldGet(this, _state).btnClassHide);
    }
    if (_classPrivateFieldGet(this, _state).btnPrev && transform === -limit) {
      _classPrivateFieldGet(this, _state).btnNext.classList.add(_classPrivateFieldGet(this, _state).btnClassHide);
    } else if (_classPrivateFieldGet(this, _state).btnPrev && transform === 0) {
      _classPrivateFieldGet(this, _state).btnPrev.classList.add(_classPrivateFieldGet(this, _state).btnClassHide);
    }
  }
  if (_classPrivateFieldGet(this, _state).direction === 'next') {
    _classPrivateFieldGet(this, _state).activeItems = [].concat(_toConsumableArray(_classPrivateFieldGet(this, _state).activeItems.slice(-1)), _toConsumableArray(_classPrivateFieldGet(this, _state).activeItems.slice(0, -1)));
  } else {
    _classPrivateFieldGet(this, _state).activeItems = [].concat(_toConsumableArray(_classPrivateFieldGet(this, _state).activeItems.slice(1)), _toConsumableArray(_classPrivateFieldGet(this, _state).activeItems.slice(0, 1)));
  }
  _classPrivateMethodGet(this, _updateClasses, _updateClasses2).call(this);
  _classPrivateFieldGet(this, _state).translate = transform;
  _classPrivateFieldGet(this, _state).elItems.style.transform = "translate3D(".concat(transform, "px, 0px, 0.1px)");
  _classPrivateFieldGet(this, _state).elItems.dispatchEvent(new Event('animating', {
    bubbles: true
  }));
}
function _moveTo2(index) {
  var delta = _classPrivateFieldGet(this, _state).activeItems.reduce(function (acc, current, currentIndex) {
    var diff = current ? index - currentIndex : acc;
    return Math.abs(diff) < Math.abs(acc) ? diff : acc;
  }, _classPrivateFieldGet(this, _state).activeItems.length);
  if (delta !== 0) {
    _classPrivateFieldGet(this, _state).direction = delta > 0 ? 'next' : 'prev';
    for (var i = 0; i < Math.abs(delta); i++) {
      _classPrivateMethodGet(this, _move, _move2).call(this);
    }
  }
}
function _init2() {
  var _this9 = this;
  // состояние элементов
  _classPrivateFieldGet(this, _state).els = [];
  // текущее значение translate
  _classPrivateFieldGet(this, _state).translate = 0;
  // позиции активных элементов
  _classPrivateFieldGet(this, _state).activeItems = [];
  // состояние элементов
  _classPrivateFieldGet(this, _state).isBalancing = false;
  // получаем gap между слайдами
  var gap = parseFloat(getComputedStyle(_classPrivateFieldGet(this, _state).elItems).gap) || 0;
  // ширина одного слайда
  _classPrivateFieldGet(this, _state).width = _classPrivateFieldGet(this, _state).elListItem[0].getBoundingClientRect().width + gap;
  // ширина #EL_WRAPPER
  var widthWrapper = _classPrivateFieldGet(this, _state).elWrapper.getBoundingClientRect().width;
  // количество активных элементов
  _classPrivateFieldGet(this, _state).countActiveItems = Math.round(widthWrapper / _classPrivateFieldGet(this, _state).width);
  _classPrivateFieldGet(this, _state).elListItem.forEach(function (el, index) {
    el.style.transform = '';
    _classPrivateFieldGet(_this9, _state).activeItems.push(index < _classPrivateFieldGet(_this9, _state).countActiveItems ? 1 : 0);
    _classPrivateFieldGet(_this9, _state).els.push({
      el: el,
      index: index,
      order: index,
      translate: 0
    });
  });
  if (_classPrivateFieldGet(this, _config).loop) {
    var lastIndex = _classPrivateFieldGet(this, _state).elListItem.length - 1;
    var translate = -(lastIndex + 1) * _classPrivateFieldGet(this, _state).width;
    _classPrivateFieldGet(this, _state).elListItem[lastIndex].style.transform = "translate3D(".concat(translate, "px, 0px, 0.1px)");
    _classPrivateFieldGet(this, _state).els[lastIndex].order = -1;
    _classPrivateFieldGet(this, _state).els[lastIndex].translate = translate;
    _classPrivateMethodGet(this, _updateExProperties, _updateExProperties2).call(this);
  } else if (_classPrivateFieldGet(this, _state).btnPrev) {
    _classPrivateFieldGet(this, _state).btnPrev.classList.add(_classPrivateFieldGet(this, _state).btnClassHide);
  }
  _classPrivateMethodGet(this, _updateClasses, _updateClasses2).call(this);
  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this);
}
function _reset2() {
  var _this10 = this;
  var transitionNoneClass = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _TRANSITION_NONE);
  // получаем gap между слайдами
  var gap = parseFloat(getComputedStyle(_classPrivateFieldGet(this, _state).elItems).gap) || 0;
  // ширина одного слайда
  var widthItem = _classPrivateFieldGet(this, _state).elListItem[0].getBoundingClientRect().width + gap;
  var widthWrapper = _classPrivateFieldGet(this, _state).elWrapper.getBoundingClientRect().width;
  var countActiveEls = Math.round(widthWrapper / widthItem);
  if (widthItem === _classPrivateFieldGet(this, _state).width && countActiveEls === _classPrivateFieldGet(this, _state).countActiveItems) {
    return;
  }
  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');
  _classPrivateFieldGet(this, _state).elItems.classList.add(transitionNoneClass);
  _classPrivateFieldGet(this, _state).elItems.style.transform = 'translate3D(0px, 0px, 0.1px)';
  _classPrivateMethodGet(this, _init, _init2).call(this);
  window.requestAnimationFrame(function () {
    _classPrivateFieldGet(_this10, _state).elItems.classList.remove(transitionNoneClass);
  });
}
function _updateExProperties2() {
  var els = _classPrivateFieldGet(this, _state).els.map(function (item) {
    return item.el;
  });
  var orders = _classPrivateFieldGet(this, _state).els.map(function (item) {
    return item.order;
  });
  _classPrivateFieldGet(this, _state).exOrderMin = Math.min.apply(Math, _toConsumableArray(orders));
  _classPrivateFieldGet(this, _state).exOrderMax = Math.max.apply(Math, _toConsumableArray(orders));
  var min = orders.indexOf(_classPrivateFieldGet(this, _state).exOrderMin);
  var max = orders.indexOf(_classPrivateFieldGet(this, _state).exOrderMax);
  _classPrivateFieldGet(this, _state).exItemMin = els[min];
  _classPrivateFieldGet(this, _state).exItemMax = els[max];
  _classPrivateFieldGet(this, _state).exTranslateMin = _classPrivateFieldGet(this, _state).els[min].translate;
  _classPrivateFieldGet(this, _state).exTranslateMax = _classPrivateFieldGet(this, _state).els[max].translate;
}
var _EL_WRAPPER = {
  writable: true,
  value: 'wrapper'
};
var _EL_ITEMS = {
  writable: true,
  value: 'items'
};
var _EL_ITEM = {
  writable: true,
  value: 'item'
};
var _EL_ITEM_ACTIVE = {
  writable: true,
  value: 'item-active'
};
var _EL_INDICATOR = {
  writable: true,
  value: 'indicator'
};
var _EL_INDICATOR_ACTIVE = {
  writable: true,
  value: 'indicator-active'
};
var _BTN_PREV = {
  writable: true,
  value: 'btn-prev'
};
var _BTN_NEXT = {
  writable: true,
  value: 'btn-next'
};
var _BTN_HIDE = {
  writable: true,
  value: 'btn-hide'
};
var _TRANSITION_NONE = {
  writable: true,
  value: 'transition-none'
};
var _instances = {
  writable: true,
  value: []
};
ItcSlider.createInstances();

/***/ }),

/***/ "./src/modules/themeHandler.js":
/*!*************************************!*\
  !*** ./src/modules/themeHandler.js ***!
  \*************************************/
/***/ (() => {

// Toggle theme
var toggleThemeBtn = document.querySelector("#toggle-theme");
toggleThemeBtn.addEventListener("click", function () {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var newTheme = currentTheme === "dark" ? "custom" : currentTheme === "custom" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modules_slider_itc_slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./modules/slider/itc-slider.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/slider/itc-slider.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat-v23-latin_cyrillic-regular.woff2 */ "./src/fonts/montserrat-v23-latin_cyrillic-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat-v23-latin_cyrillic-regular.woff */ "./src/fonts/montserrat-v23-latin_cyrillic-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/checkMark.svg */ "./src/img/icons/checkMark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/slider/examples/images/5.jpg */ "./src/modules/slider/examples/images/5.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/woman4.jpg */ "./src/img/woman4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/quote.svg */ "./src/img/icons/quote.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/facebook-icon.svg */ "./src/img/icons/facebook-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/instagram-icon.svg */ "./src/img/icons/instagram-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/youtube-icon.svg */ "./src/img/icons/youtube-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modules_slider_itc_slider_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n:root[data-theme=light] {\n  --bg-color: rgb(255, 248, 229);\n  --bg-color-secondary: #ffddc6;\n  --text-color: #09272a;\n  --a-color: #616161;\n  --btn-text-color: #fff;\n  --btn-bg-color: #7a231a;\n  --btn-bg-color_hover: #962b1f;\n  --accent: #bb5044;\n}\n\n:root[data-theme=dark] {\n  --bg-color: #02030d;\n  --bg-color-secondary: #4c1313;\n  --text-color: #d7dbf9;\n  --a-color: #616161;\n  --btn-text-color: #000;\n  --btn-bg-color: #d1bc1f;\n  --btn-bg-color_hover: #c1ae1c;\n  --accent: #c5ae00;\n}\n\n:root[data-theme=custom] {\n  --bg-color: #fff7f5;\n  --bg-color-secondary: #fff88f;\n  --text-color: #0a0200;\n  --a-color: #616161;\n  --btn-text-color: #000;\n  --btn-bg-color: #fb8974;\n  --btn-bg-color_hover: #e47c69;\n  --accent: #fb9e8d;\n}\n\n:root {\n  --box-shadow: 1px 10px 22px -20px var(--accent);\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  color: var(--text-color);\n  padding: 0;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nh1 {\n  color: black;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  color: var(--text-color);\n  text-decoration: none;\n}\na:hover {\n  color: var(--a-color);\n}\na:target {\n  color: var(--a-color);\n}\n\n.nav {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  justify-content: space-between;\n  background-color: var(--bg-color);\n  padding: 1rem 2rem;\n  box-shadow: 1px 10px 22px -20px var(--accent);\n  box-shadow: var(--box-shadow);\n}\n.nav__menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.nav__burger {\n  display: none;\n}\n.btn {\n  background-color: var(--btn-bg-color);\n  color: var(--btn-text-color);\n  text-transform: uppercase;\n  padding: 1em;\n  border: none;\n  border-radius: 0.4em;\n  transition: -webkit-transform 0.2s linear;\n  transition: transform 0.2s linear;\n  transition: transform 0.2s linear, -webkit-transform 0.2s linear;\n}\n.btn:hover {\n  cursor: pointer;\n  background-color: var(--btn-bg-color_hover);\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03);\n}\n.btn:active {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n.btn:focus {\n  outline: 3px solid #4e89ff;\n}\n.btn[data-btn] {\n  border: 2px solid var(--btn-text-color);\n}\n.btn[data-btn=default] {\n  --btn-bg-color: #002727;\n  --btn-text-color: #8ce6e6;\n  --btn-bg-color_hover: #004242;\n}\n.btn[data-btn=warning] {\n  --btn-bg-color: #f4f1d8;\n  --btn-text-color: #d2c230;\n  --btn-bg-color_hover: #d2d0b9;\n}\n.btn[data-btn=succes] {\n  --btn-bg-color: #d1ded1;\n  --btn-text-color: #185c17;\n  --btn-bg-color_hover: #b9c8b9;\n}\n.btn[data-btn=danger] {\n  --btn-bg-color: #fff5f5;\n  --btn-text-color: #b21212;\n  --btn-bg-color_hover: #e4dada;\n}\n.btn[data-btn=info] {\n  --btn-bg-color: #d4dbea;\n  --btn-text-color: #284d97;\n  --btn-bg-color_hover: #c2c9d8;\n}\n\n.welcome {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 1rem;\n  height: 85vh;\n  padding: 5rem;\n  background-color: var(--accent);\n  color: var(--text-color);\n}\n.welcome__heading {\n  font-size: 3rem;\n}\n.welcome__text {\n  font-size: 1.5rem;\n  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\n}\n.welcome__btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.slider {\n  background-color: var(--bg-color);\n  padding: 3.5rem;\n}\n.slider__item {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.slider__item-img {\n  margin: 0 auto;\n  max-width: 75px;\n}\n.about-me {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 3rem;\n  gap: 2rem;\n  background-color: var(--bg-color);\n}\n.about-me__picture {\n  flex: 1 1 50%;\n}\n.about-me__picture-img {\n  max-width: 100%;\n}\n.about-me__content {\n  flex: 1 1 50%;\n}\n.about-me__content-title {\n  text-align: center;\n  font-size: 3rem;\n  margin-top: 0;\n}\n.about-me__content-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.about-me__content-list-title {\n  font-weight: bold;\n}\n.about-me__content-list-item {\n  margin-left: 1rem;\n  list-style: lower-roman url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") outside;\n}\n.about-me__content-btns-btn {\n  margin: 0 1rem 1rem 0;\n}\n\n.diary {\n  --diary-col: 4;\n  --diary-row: 1;\n  display: grid;\n  grid-template-columns: repeat(var(--diary-col), 1fr);\n  grid-template-rows: repeat(var(--diary-row), auto);\n  grid-gap: 1rem;\n  gap: 1rem;\n  padding: 2rem;\n  background-color: var(--bg-color-secondary);\n}\n.diary__item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n  color: var(--a-color);\n}\n.diary__item-step {\n  font-size: 0.7rem;\n}\n.diary__item-date {\n  font-size: 2.3rem;\n  font-weight: bold;\n  color: var(--accent);\n}\n.diary__item-title {\n  margin: 0.5em 0;\n}\n.diary__item-text {\n  margin: 0.5em 0;\n}\n.services {\n  padding: 2rem;\n  background-color: var(--bg-color);\n}\n.services__title {\n  font-size: 3rem;\n  font-weight: bold;\n  margin: 0.5em 0;\n}\n.services__text {\n  color: var(--a-color);\n  font-size: 0.9rem;\n}\n.services__hr {\n  color: var(--accent);\n  opacity: 0.3;\n  margin: 2rem 0;\n}\n.services__content {\n  --grid-col: 3;\n  --grid-row: auto;\n  display: grid;\n  grid-template-columns: repeat(var(--grid-col), 1fr);\n  grid-template-rows: repeat(var(--grid-row), auto);\n  grid-gap: 2rem;\n  gap: 2rem;\n  color: #fff;\n}\n.services__content-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  aspect-ratio: 1;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 150%;\n  transition: all 0.5s linear;\n}\n.services__content-card::after {\n  position: absolute;\n  top: 1;\n  right: 1;\n  bottom: 1;\n  left: 1;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n}\n.services__content-card:hover {\n  background-size: 160%;\n}\n.services__content-card:hover::after {\n  background-color: #000;\n  opacity: 0.3;\n}\n.services__content-card:hover .services__content-card-title {\n  opacity: 1;\n}\n.services__content-card:hover .services__content-card-design {\n  opacity: 1;\n}\n.services__content-card:hover .services__content-card-btn {\n  opacity: 1;\n}\n.services__content-card-title {\n  transition: all 0.5s linear;\n  font-size: 1.3rem;\n  opacity: 0;\n  margin: 0;\n  z-index: 5;\n}\n.services__content-card-design {\n  transition: all 0.5s linear;\n  opacity: 0;\n  font-size: 0.8rem;\n  margin: 1rem 0;\n  z-index: 5;\n}\n.services__content-card-btn {\n  transition: all 0.5s linear;\n  opacity: 0;\n  z-index: 5;\n}\n.feature {\n  padding: 2rem;\n  background-color: var(--bg-color-secondary);\n}\n.feature__title {\n  font-size: 3rem;\n  font-weight: bold;\n  margin: 0.5em 0;\n}\n.feature__text {\n  color: var(--a-color);\n  font-size: 0.9rem;\n}\n.feature__hr {\n  color: var(--a-color);\n  font-size: 0.9rem;\n  margin: 2rem 0;\n}\n.feature__content-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin: 2rem 0;\n  background-color: var(--bg-color);\n}\n.feature__content-item:nth-child(even) {\n  flex-direction: row-reverse;\n}\n.feature__content-item-picture {\n  flex: 1 1 50%;\n}\n.feature__content-item-picture-img {\n  width: 100%;\n  height: 100%;\n}\n.feature__content-item-content {\n  flex: 1 1 50%;\n  padding: 2rem 3rem;\n}\n.feature__content-item-content-date {\n  font-size: 0.8rem;\n}\n.feature__content-item-content-list-item::before {\n  content: \"•\"; /* Add content: \\2022 is the CSS Code/unicode for a bullet */\n  font-size: 1.2em;\n  color: var(--accent); /* Change the color */\n  font-weight: bold; /* If you want it to be bold */\n  display: inline-block; /* Needed to add space between the bullet and the text */\n  width: 1em; /* Also needed for space (tweak if needed) */\n  margin-left: -1em; /* Also needed for space (tweak if needed) */\n}\n.clients {\n  padding: 2rem 2rem 6rem;\n  background-color: var(--bg-color);\n}\n.clients__title {\n  font-size: 3rem;\n  font-weight: bold;\n  margin: 0.5em 0;\n}\n.clients__text {\n  color: var(--a-color);\n  font-size: 0.9rem;\n}\n.clients__hr {\n  color: var(--accent);\n  opacity: 0.3;\n  margin: 2rem 0;\n}\n.clients__slider {\n  padding: 0 4rem;\n}\n.clients__slider-item {\n  padding: 2rem;\n  background-color: var(--bg-color-secondary);\n}\n.clients__slider-item-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  margin-bottom: 1.5rem;\n}\n.clients__slider-item-title-avatar {\n  flex: 1 1 20%;\n  width: 75px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.clients__slider-item-title-about {\n  flex: 1 1 75%;\n}\n.clients__slider-item-title-about-name {\n  margin-top: 0;\n  margin-bottom: 0.8em;\n}\n.clients__slider-item-title-about-info {\n  font-size: 0.8rem;\n}\n.clients__slider-item-title-quote {\n  flex: 1 1 15%;\n  width: 75px;\n  aspect-ratio: 1;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.clients__slider .itc-slider .itc-slider-wrapper .itc-slider-items .itc-slider-item {\n  flex: 0 0 calc(50% - var(--gap) / 2);\n}\n.clients__slider .itc-slider .itc-slider-btn-prev {\n  left: -4rem;\n}\n.clients__slider .itc-slider .itc-slider-btn-next {\n  right: -4rem;\n}\n.footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 2rem;\n  background-color: var(--accent);\n  padding: 3rem;\n}\n.footer__links-list {\n  display: flex;\n  flex-direction: row;\n  gap: 2rem;\n}\n.footer__links-list-item {\n  text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.7);\n  font-size: 1.1rem;\n}\n.footer__social-icon {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 80%;\n  margin: 0 1rem;\n}\n.footer__social_vk {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.footer__social_inst {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.footer__social_youtube {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n\n@media (max-width: 600px){\n  .nav {\n    position: relative;\n    align-items: center;\n  }\n  .nav__menu[data-state=true] {\n    position: absolute;\n    top: 70%;\n    right: 0;\n    z-index: 50;\n    flex-direction: column;\n    gap: 2rem;\n    padding: 1rem 2rem;\n    background-color: var(--bg-color);\n  }\n  .nav__menu[data-state=false] {\n    display: none;\n  }\n  .nav__burger {\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    width: 50px;\n    height: 25px;\n  }\n  .nav__burger-line {\n    display: inline-block;\n    position: relative;\n    background-color: var(--accent);\n    width: 100%;\n    height: 3px;\n    transition: -webkit-transform 0.3s linear;\n    transition: transform 0.3s linear;\n    transition: transform 0.3s linear, -webkit-transform 0.3s linear;\n  }\n  .nav__burger-line::after, .nav__burger-line::before {\n    transition: -webkit-transform 0.3s linear;\n    transition: transform 0.3s linear;\n    transition: transform 0.3s linear, -webkit-transform 0.3s linear;\n    position: absolute;\n    content: \"\";\n    width: 100%;\n    height: 3px;\n    left: 0;\n    background-color: var(--accent);\n  }\n  .nav__burger-line::after {\n    top: 10px;\n  }\n  .nav__burger-line::before {\n    bottom: 10px;\n  }\n  .nav__burger[data-state=true] .nav__burger-line {\n    -webkit-transform: scale(0.8) rotate(90deg);\n            transform: scale(0.8) rotate(90deg);\n  }\n  .nav__burger[data-state=true] .nav__burger-line::after {\n    -webkit-transform: scale(0.7) translateX(19px) translateY(-31px) rotate(45deg);\n            transform: scale(0.7) translateX(19px) translateY(-31px) rotate(45deg);\n  }\n  .nav__burger[data-state=true] .nav__burger-line::before {\n    -webkit-transform: scale(0.7) translateX(19px) translateY(31px) rotate(135deg);\n            transform: scale(0.7) translateX(19px) translateY(31px) rotate(135deg);\n  }\n}\n\n@media (max-width: 855px){\n  .diary {\n    --diary-col: 2;\n    --diary-row: 2;\n  }\n}\n\n@media (max-width: 730px){\n  .services__content {\n    --grid-col: 2;\n  }\n}\n\n@media (max-width: 550px){\n  .services__content {\n    --grid-col: 1;\n  }\n}\n\n@media (max-width: 750px){\n  .feature__content-item,\n  .feature__content-item:nth-child(even) {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 950px){\n  .clients__slider .itc-slider .itc-slider-wrapper .itc-slider-items .itc-slider-item {\n    flex: 0 0 100%;\n  }\n}\n\n@media (max-width: 690px){\n  .footer {\n    flex-direction: column;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/style/_fonts.scss","webpack://./src/style/_style.scss","webpack://./src/modules/navbar/nav.scss","webpack://./src/modules/btn/btn.scss","webpack://./src/style/_welcome.scss","webpack://./src/style/_slider.scss","webpack://./src/style/_about-me.scss","webpack://./src/style/_diary.scss","webpack://./src/style/_services.scss","webpack://./src/style/_feature.scss","webpack://./src/style/_clients.scss","webpack://./src/style/_footer.scss","webpack://./<no source>"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,yBAAA;EACA,oHAAA;ADGF;AELA;EACE,8BAAA;EACA,6BAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,6BAAA;EACA,iBAAA;AFOF;;AELA;EACE,mBAAA;EACA,6BAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,6BAAA;EACA,iBAAA;AFQF;;AENA;EACE,mBAAA;EACA,6BAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,6BAAA;EACA,iBAAA;AFSF;;AEPA;EACE,+CAAA;AFUF;;AERA;EACE,uBAAA;AFWF;;AERA;EACE,sBAAA;AFWF;;AETA;EACE,wBAAA;EACA,UAAA;EACA,SAAA;EACA,qCAAA;AFYF;;AEVA;EACE,YAAA;AFaF;;AEXA;EACE,gBAAA;AFcF;;AEZA;EACE,wBAAA;EACA,qBAAA;AFeF;AEdE;EACE,qBAAA;AFgBJ;AEdE;EACE,qBAAA;AFgBJ;;AG3EA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,8BAAA;EAEA,iCAAA;EACA,kBAAA;EACA,6CAAA;EAAA,6BAAA;AH6EF;AG5EE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;AH8EJ;AG1EE;EACE,aAAA;AH4EJ;AI9FA;EACE,qCAAA;EACA,4BAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,yCAAA;EAAA,iCAAA;EAAA,gEAAA;AJ2JF;AI1JE;EACE,eAAA;EACA,2CAAA;EACA,8BAAA;UAAA,sBAAA;AJ4JJ;AI1JE;EACE,8BAAA;UAAA,sBAAA;AJ4JJ;AIzJE;EACE,0BAAA;AJ2JJ;AIxJE;EACE,uCAAA;AJ0JJ;AIvJE;EACE,uBAAA;EACA,yBAAA;EACA,6BAAA;AJyJJ;AIvJE;EACE,uBAAA;EACA,yBAAA;EACA,6BAAA;AJyJJ;AIvJE;EACE,uBAAA;EACA,yBAAA;EACA,6BAAA;AJyJJ;AIvJE;EACE,uBAAA;EACA,yBAAA;EACA,6BAAA;AJyJJ;AIvJE;EACE,uBAAA;EACA,yBAAA;EACA,6BAAA;AJyJJ;;AKzMA;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,SAAA;EAEA,YAAA;EACA,aAAA;EAEA,+BAAA;EACA,wBAAA;AL0MF;AKxME;EACE,eAAA;AL0MJ;AKxME;EACE,iBAAA;EACA,4CAAA;AL0MJ;AKxME;EACE,0BAAA;EAAA,uBAAA;EAAA,kBAAA;AL0MJ;;AM9NA;EACE,iCAAA;EACA,eAAA;ANiOF;AM/NE;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;ANiOJ;AM/NI;EACE,cAAA;EACA,eAAA;ANiON;AO5OA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,aAAA;EACA,SAAA;EAEA,iCAAA;AP4OF;AO1OE;EACE,aAAA;AP4OJ;AO1OI;EACE,eAAA;AP4ON;AOzOE;EACE,aAAA;AP2OJ;AO1OI;EACE,kBAAA;EACA,eAAA;EACA,aAAA;AP4ON;AOxOI;EACE,aAAA;EACA,eAAA;EACA,SAAA;AP0ON;AOzOM;EACE,iBAAA;AP2OR;AOzOM;EACE,iBAAA;EACA,uEAAA;AP2OR;AOvOM;EACE,qBAAA;APyOR;;AQjRA;EACE,cAAA;EACA,cAAA;EACA,aAAA;EACA,oDAAA;EACA,kDAAA;EACA,cAAA;EAAA,SAAA;EAEA,aAAA;EACA,2CAAA;ARmRF;AQlRE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;EAEA,qBAAA;ARmRJ;AQlRI;EACE,iBAAA;ARoRN;AQlRI;EACE,iBAAA;EACA,iBAAA;EACA,oBAAA;ARoRN;AQlRI;EACE,eAAA;ARoRN;AQlRI;EACE,eAAA;ARoRN;ASjTA;EACE,aAAA;EAEA,iCAAA;ATyTF;ASvTE;EACE,eAAA;EACA,iBAAA;EAEA,eAAA;ATwTJ;AStTE;EACE,qBAAA;EACA,iBAAA;ATwTJ;AStTE;EACE,oBAAA;EACA,YAAA;EACA,cAAA;ATwTJ;AStTE;EACE,aAAA;EACA,gBAAA;EAEA,aAAA;EACA,mDAAA;EACA,iDAAA;EACA,cAAA;EAAA,SAAA;EAEA,WAAA;ATsTJ;ASpTI;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EAEA,eAAA;EAEA,yDAAA;EACA,2BAAA;EACA,4BAAA;EACA,qBAAA;EAEA,2BAAA;ATmTN;ASjTM;EACE,kBAAA;EACA,MAAA;EAAA,QAAA;EAAA,SAAA;EAAA,OAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;ATmTR;AShTM;EACE,qBAAA;ATkTR;ASjTQ;EACE,sBAAA;EACA,YAAA;ATmTV;ASjTQ;EACE,UAAA;ATmTV;ASjTQ;EACE,UAAA;ATmTV;ASjTQ;EACE,UAAA;ATmTV;AS/SM;EACE,2BAAA;EAEA,iBAAA;EAEA,UAAA;EACA,SAAA;EAEA,UAAA;AT8SR;AS5SM;EACE,2BAAA;EAEA,UAAA;EAEA,iBAAA;EACA,cAAA;EAEA,UAAA;AT2SR;ASzSM;EACE,2BAAA;EAEA,UAAA;EAEA,UAAA;ATySR;AU3YA;EACE,aAAA;EAEA,2CAAA;AVuZF;AUrZE;EACE,eAAA;EACA,iBAAA;EAEA,eAAA;AVsZJ;AUpZE;EACE,qBAAA;EACA,iBAAA;AVsZJ;AUpZE;EACE,qBAAA;EACA,iBAAA;EAEA,cAAA;AVqZJ;AUlZI;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,cAAA;EAEA,iCAAA;AVkZN;AUjZM;EACE,2BAAA;AVmZR;AUjZM;EACE,aAAA;AVmZR;AUlZQ;EACE,WAAA;EACA,YAAA;AVoZV;AUjZM;EACE,aAAA;EAEA,kBAAA;AVkZR;AUhZQ;EACE,iBAAA;AVkZV;AU1YY;EACE,YAAA,EAAA,4DAAA;EACA,gBAAA;EACA,oBAAA,EAAA,qBAAA;EACA,iBAAA,EAAA,8BAAA;EACA,qBAAA,EAAA,wDAAA;EACA,UAAA,EAAA,4CAAA;EACA,iBAAA,EAAA,4CAAA;AV4Yd;AWzcA;EACE,uBAAA;EAEA,iCAAA;AXidF;AW/cE;EACE,eAAA;EACA,iBAAA;EAEA,eAAA;AXgdJ;AW9cE;EACE,qBAAA;EACA,iBAAA;AXgdJ;AW9cE;EACE,oBAAA;EACA,YAAA;EACA,cAAA;AXgdJ;AW9cE;EACE,eAAA;AXgdJ;AW9cI;EACE,aAAA;EAEA,2CAAA;AX+cN;AW9cM;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;EAEA,qBAAA;AX+cR;AW7cQ;EACE,aAAA;EACA,WAAA;EACA,eAAA;EAEA,kBAAA;EAEA,yDAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;AX6cV;AW3cQ;EACE,aAAA;AX6cV;AW5cU;EACE,aAAA;EACA,oBAAA;AX8cZ;AW5cU;EACE,iBAAA;AX8cZ;AW3cQ;EACE,aAAA;EACA,WAAA;EACA,eAAA;EAEA,yDAAA;EACA,2BAAA;EACA,4BAAA;EACA,wBAAA;AX4cV;AWtcI;EACE,oCAAA;AXwcN;AWrcM;EACE,WAAA;AXucR;AWrcM;EACE,YAAA;AXucR;AYvhBA;EACE,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,SAAA;EAEA,+BAAA;EAEA,aAAA;AZ6hBF;AY1hBI;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AZ4hBN;AY3hBM;EACE,4CAAA;EACA,iBAAA;AZ6hBR;AYrhBI;EACE,qBAAA;EACA,WAAA;EACA,YAAA;EAEA,2BAAA;EACA,4BAAA;EACA,oBAAA;EAEA,cAAA;AZqhBN;AYnhBI;EACE,yDAAA;AZqhBN;AYnhBI;EACE,yDAAA;AZqhBN;AYnhBI;EACE,yDAAA;AZqhBN;;AahkBA;EVuBE;IACE,kBAAA;IACA,mBAAA;EH2EF;EGzEI;IACE,kBAAA;IACA,QAAA;IACA,QAAA;IACA,WAAA;IAEA,sBAAA;IACA,SAAA;IACA,kBAAA;IAEA,iCAAA;EHyEN;EGvEI;IACE,aAAA;EHyEN;EGtEE;IACE,qBAAA;IACA,kBAAA;IACA,eAAA;IAEA,WAAA;IACA,YAAA;EHuEJ;EGrEI;IACE,qBAAA;IACA,kBAAA;IACA,+BAAA;IACA,WAAA;IACA,WAAA;IACA,yCAAA;IAAA,iCAAA;IAAA,gEAAA;EHuEN;EGtEM;IAEE,yCAAA;IAAA,iCAAA;IAAA,gEAAA;IACA,kBAAA;IACA,WAAA;IACA,WAAA;IACA,WAAA;IACA,OAAA;IAEA,+BAAA;EHsER;EGpEM;IACE,SAAA;EHsER;EGpEM;IACE,YAAA;EHsER;EGnEI;IACE,2CAAA;YAAA,mCAAA;EHqEN;EGnEM;IACE,8EAAA;YAAA,sEAAA;EHqER;EGnEM;IACE,8EAAA;YAAA,sEAAA;EHqER;AAyYF;;AajiBA;ELmCE;IACE,cAAA;IACA,cAAA;ERkRF;AAiPF;;AaxiBA;EJyGE;IACE,aAAA;ETsSF;AA8JF;;Aa9iBA;EJ8GE;IACE,aAAA;ETsSF;AA+JF;;AapjBA;EHuEE;;IAEE,sBAAA;EVsYF;AA4GF;;Aa3jBA;EFuFE;IAKE,cAAA;EXgcF;AAqCF;;AajkBA;EDiDE;IACE,sBAAA;EZmhBF;AAEF","sourcesContent":["@import \"style/fonts\";\n@import \"style/var\";\n@import \"style/style\";\n@import \"./modules/navbar/nav.scss\";\n@import \"./modules/btn/btn.scss\";\n@import \"style/welcome\";\n@import \"./modules/slider/itc-slider.css\"; //Slider\n@import \"./style/slider\"; // Slider section\n@import \"./style/about-me\";\n@import \"./style/diary\";\n@import \"./style/services\";\n@import \"./style/feature\";\n@import \"./style/clients\";\n@import \"./style/footer\";\n","@font-face {\n  font-family: 'Montserrat';\n  src: url('../fonts/montserrat-v23-latin_cyrillic-regular.woff2') format('woff2'),\n    url('../fonts/montserrat-v23-latin_cyrillic-regular.woff') format('woff');\n}\n",":root[data-theme=\"light\"] {\n  --bg-color: rgb(255, 248, 229);\n  --bg-color-secondary: #ffddc6;\n  --text-color: #09272a;\n  --a-color: #616161;\n  --btn-text-color: #fff;\n  --btn-bg-color: #7a231a;\n  --btn-bg-color_hover: #962b1f;\n  --accent: #bb5044;\n}\n:root[data-theme=\"dark\"] {\n  --bg-color: #02030d;\n  --bg-color-secondary: #4c1313;\n  --text-color: #d7dbf9;\n  --a-color: #616161;\n  --btn-text-color: #000;\n  --btn-bg-color: #d1bc1f;\n  --btn-bg-color_hover: #c1ae1c;\n  --accent: #c5ae00;\n}\n:root[data-theme=\"custom\"] {\n  --bg-color: #fff7f5;\n  --bg-color-secondary: #fff88f;\n  --text-color: #0a0200;\n  --a-color: #616161;\n  --btn-text-color: #000;\n  --btn-bg-color: #fb8974;\n  --btn-bg-color_hover: #e47c69;\n  --accent: #fb9e8d;\n}\n:root {\n  --box-shadow: 1px 10px 22px -20px var(--accent);\n}\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  box-sizing: border-box;\n}\nbody {\n  color: var(--text-color);\n  padding: 0;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n}\nh1 {\n  color: black;\n}\nli {\n  list-style: none;\n}\na {\n  color: var(--text-color);\n  text-decoration: none;\n  &:hover {\n    color: var(--a-color);\n  }\n  &:target {\n    color: var(--a-color);\n  }\n}\n",".nav {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  justify-content: space-between;\n\n  background-color: var(--bg-color);\n  padding: 1rem 2rem;\n  box-shadow: var(--box-shadow);\n  &__menu {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 1rem;\n    &-item {\n    }\n  }\n  &__burger {\n    display: none;\n  }\n}\n\n@media (max-width: 600px) {\n  .nav {\n    position: relative;\n    align-items: center;\n    &__menu {\n      &[data-state=\"true\"] {\n        position: absolute;\n        top: 70%;\n        right: 0;\n        z-index: 50;\n\n        flex-direction: column;\n        gap: 2rem;\n        padding: 1rem 2rem;\n\n        background-color: var(--bg-color);\n      }\n      &[data-state=\"false\"] {\n        display: none;\n      }\n    }\n    &__burger {\n      display: inline-block;\n      position: relative;\n      cursor: pointer;\n\n      width: 50px;\n      height: 25px;\n\n      &-line {\n        display: inline-block;\n        position: relative;\n        background-color: var(--accent);\n        width: 100%;\n        height: 3px;\n        transition: transform 0.3s linear;\n        &::after,\n        &::before {\n          transition: transform 0.3s linear;\n          position: absolute;\n          content: \"\";\n          width: 100%;\n          height: 3px;\n          left: 0;\n\n          background-color: var(--accent);\n        }\n        &::after {\n          top: 10px;\n        }\n        &::before {\n          bottom: 10px;\n        }\n      }\n      &[data-state=\"true\"] .nav__burger-line {\n        transform: scale(0.8) rotate(90deg);\n\n        &::after {\n          transform: scale(0.7) translateX(19px) translateY(-31px) rotate(45deg);\n        }\n        &::before {\n          transform: scale(0.7) translateX(19px) translateY(31px) rotate(135deg);\n        }\n      }\n    }\n  }\n}\n",".btn {\n  background-color: var(--btn-bg-color);\n  color: var(--btn-text-color);\n  text-transform: uppercase;\n  padding: 1em;\n  border: none;\n  border-radius: 0.4em;\n  transition: transform 0.2s linear;\n  &:hover {\n    cursor: pointer;\n    background-color: var(--btn-bg-color_hover);\n    transform: scale(1.03);\n  }\n  &:active {\n    transform: scale(0.95);\n  }\n\n  &:focus {\n    outline: 3px solid #4e89ff;\n  }\n\n  &[data-btn] {\n    border: 2px solid var(--btn-text-color);\n  }\n\n  &[data-btn=\"default\"] {\n    --btn-bg-color: #002727;\n    --btn-text-color: #8ce6e6;\n    --btn-bg-color_hover: #004242;\n  }\n  &[data-btn=\"warning\"] {\n    --btn-bg-color: #f4f1d8;\n    --btn-text-color: #d2c230;\n    --btn-bg-color_hover: #d2d0b9;\n  }\n  &[data-btn=\"succes\"] {\n    --btn-bg-color: #d1ded1;\n    --btn-text-color: #185c17;\n    --btn-bg-color_hover: #b9c8b9;\n  }\n  &[data-btn=\"danger\"] {\n    --btn-bg-color: #fff5f5;\n    --btn-text-color: #b21212;\n    --btn-bg-color_hover: #e4dada;\n  }\n  &[data-btn=\"info\"] {\n    --btn-bg-color: #d4dbea;\n    --btn-text-color: #284d97;\n    --btn-bg-color_hover: #c2c9d8;\n  }\n}\n",".welcome {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 1rem;\n\n  height: 85vh;\n  padding: 5rem;\n\n  background-color: var(--accent);\n  color: var(--text-color);\n\n  &__heading {\n    font-size: 3rem;\n  }\n  &__text {\n    font-size: 1.5rem;\n    text-shadow: 1px 1px 10px rgba(#000000, 0.3);\n  }\n  &__btn {\n    width: fit-content;\n  }\n}\n",".slider {\n  background-color: var(--bg-color);\n  padding: 3.5rem;\n\n  &__item {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n\n    &-img {\n      margin: 0 auto;\n      max-width: 75px;\n    }\n    &-title {\n    }\n    &-text {\n    }\n  }\n}\n",".about-me {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  padding: 3rem;\n  gap: 2rem;\n\n  background-color: var(--bg-color);\n\n  &__picture {\n    flex: 1 1 50%;\n\n    &-img {\n      max-width: 100%;\n    }\n  }\n  &__content {\n    flex: 1 1 50%;\n    &-title {\n      text-align: center;\n      font-size: 3rem;\n      margin-top: 0;\n    }\n    &-text {\n    }\n    &-list {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 1rem;\n      &-title {\n        font-weight: bold;\n      }\n      &-item {\n        margin-left: 1rem;\n        list-style: lower-roman url(\"../img/icons/checkMark.svg\") outside;\n      }\n    }\n    &-btns {\n      &-btn {\n        margin: 0 1rem 1rem 0;\n      }\n    }\n  }\n}\n",".diary {\n  --diary-col: 4;\n  --diary-row: 1;\n  display: grid;\n  grid-template-columns: repeat(var(--diary-col), 1fr);\n  grid-template-rows: repeat(var(--diary-row), auto);\n  gap: 1rem;\n\n  padding: 2rem;\n  background-color: var(--bg-color-secondary);\n  &__item {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n\n    color: var(--a-color);\n    &-step {\n      font-size: 0.7rem;\n    }\n    &-date {\n      font-size: 2.3rem;\n      font-weight: bold;\n      color: var(--accent);\n    }\n    &-title {\n      margin: 0.5em 0;\n    }\n    &-text {\n      margin: 0.5em 0;\n    }\n  }\n}\n\n@media (max-width: 855px) {\n  .diary {\n    --diary-col: 2;\n    --diary-row: 2;\n  }\n}\n",".services {\n  padding: 2rem;\n\n  background-color: var(--bg-color);\n\n  &__title {\n    font-size: 3rem;\n    font-weight: bold;\n\n    margin: 0.5em 0;\n  }\n  &__text {\n    color: var(--a-color);\n    font-size: 0.9rem;\n  }\n  &__hr {\n    color: var(--accent);\n    opacity: 0.3;\n    margin: 2rem 0;\n  }\n  &__content {\n    --grid-col: 3;\n    --grid-row: auto;\n\n    display: grid;\n    grid-template-columns: repeat(var(--grid-col), 1fr);\n    grid-template-rows: repeat((var(--grid-row), auto));\n    gap: 2rem;\n\n    color: #fff;\n\n    &-card {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n\n      aspect-ratio: 1;\n\n      background-image: url(\"../modules/slider/examples/images/5.jpg\");\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 150%;\n\n      transition: all 0.5s linear;\n\n      &::after {\n        position: absolute;\n        inset: 1;\n        content: \"\";\n        width: 100%;\n        height: 100%;\n      }\n\n      &:hover {\n        background-size: 160%;\n        &::after {\n          background-color: #000;\n          opacity: 0.3;\n        }\n        & .services__content-card-title {\n          opacity: 1;\n        }\n        & .services__content-card-design {\n          opacity: 1;\n        }\n        & .services__content-card-btn {\n          opacity: 1;\n        }\n      }\n\n      &-title {\n        transition: all 0.5s linear;\n\n        font-size: 1.3rem;\n\n        opacity: 0;\n        margin: 0;\n\n        z-index: 5;\n      }\n      &-design {\n        transition: all 0.5s linear;\n\n        opacity: 0;\n\n        font-size: 0.8rem;\n        margin: 1rem 0;\n\n        z-index: 5;\n      }\n      &-btn {\n        transition: all 0.5s linear;\n\n        opacity: 0;\n\n        z-index: 5;\n      }\n    }\n  }\n}\n\n@media (max-width: 730px) {\n  .services__content {\n    --grid-col: 2;\n  }\n}\n@media (max-width: 550px) {\n  .services__content {\n    --grid-col: 1;\n  }\n}\n",".feature {\n  padding: 2rem;\n\n  background-color: var(--bg-color-secondary);\n\n  &__title {\n    font-size: 3rem;\n    font-weight: bold;\n\n    margin: 0.5em 0;\n  }\n  &__text {\n    color: var(--a-color);\n    font-size: 0.9rem;\n  }\n  &__hr {\n    color: var(--a-color);\n    font-size: 0.9rem;\n\n    margin: 2rem 0;\n  }\n  &__content {\n    &-item {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n\n      margin: 2rem 0;\n\n      background-color: var(--bg-color);\n      &:nth-child(even) {\n        flex-direction: row-reverse;\n      }\n      &-picture {\n        flex: 1 1 50%;\n        &-img {\n          width: 100%;\n          height: 100%;\n        }\n      }\n      &-content {\n        flex: 1 1 50%;\n\n        padding: 2rem 3rem;\n\n        &-date {\n          font-size: 0.8rem;\n        }\n        &-title {\n        }\n        &-text {\n        }\n        &-list {\n          &-item {\n            &::before {\n              content: \"\\2022\"; /* Add content: \\2022 is the CSS Code/unicode for a bullet */\n              font-size: 1.2em;\n              color: var(--accent); /* Change the color */\n              font-weight: bold; /* If you want it to be bold */\n              display: inline-block; /* Needed to add space between the bullet and the text */\n              width: 1em; /* Also needed for space (tweak if needed) */\n              margin-left: -1em; /* Also needed for space (tweak if needed) */\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n@media (max-width: 750px) {\n  .feature__content-item,\n  .feature__content-item:nth-child(even) {\n    flex-direction: column;\n  }\n}\n",".clients {\n  padding: 2rem 2rem 6rem;\n\n  background-color: var(--bg-color);\n\n  &__title {\n    font-size: 3rem;\n    font-weight: bold;\n\n    margin: 0.5em 0;\n  }\n  &__text {\n    color: var(--a-color);\n    font-size: 0.9rem;\n  }\n  &__hr {\n    color: var(--accent);\n    opacity: 0.3;\n    margin: 2rem 0;\n  }\n  &__slider {\n    padding: 0 4rem;\n\n    &-item {\n      padding: 2rem;\n\n      background-color: var(--bg-color-secondary);\n      &-title {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        gap: 2rem;\n\n        margin-bottom: 1.5rem;\n\n        &-avatar {\n          flex: 1 1 20%;\n          width: 75px;\n          aspect-ratio: 1;\n\n          border-radius: 50%;\n\n          background-image: url(\"../img/woman4.jpg\");\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: cover;\n        }\n        &-about {\n          flex: 1 1 75%;\n          &-name {\n            margin-top: 0;\n            margin-bottom: 0.8em;\n          }\n          &-info {\n            font-size: 0.8rem;\n          }\n        }\n        &-quote {\n          flex: 1 1 15%;\n          width: 75px;\n          aspect-ratio: 1;\n\n          background-image: url(\"../img/icons/quote.svg\");\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: contain;\n        }\n      }\n      &-content {\n      }\n    }\n    & .itc-slider .itc-slider-wrapper .itc-slider-items .itc-slider-item {\n      flex: 0 0 calc(50% - var(--gap) / 2);\n    }\n    & .itc-slider {\n      & .itc-slider-btn-prev {\n        left: -4rem;\n      }\n      & .itc-slider-btn-next {\n        right: -4rem;\n      }\n    }\n  }\n}\n\n@media (max-width: 950px) {\n  .clients__slider\n    .itc-slider\n    .itc-slider-wrapper\n    .itc-slider-items\n    .itc-slider-item {\n    flex: 0 0 100%;\n  }\n}\n",".footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 2rem;\n\n  background-color: var(--accent);\n\n  padding: 3rem;\n\n  &__links {\n    &-list {\n      display: flex;\n      flex-direction: row;\n      gap: 2rem;\n      &-item {\n        text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.7);\n        font-size: 1.1rem;\n\n        &-link {\n        }\n      }\n    }\n  }\n  &__social {\n    &-icon {\n      display: inline-block;\n      width: 50px;\n      height: 50px;\n\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 80%;\n\n      margin: 0 1rem;\n    }\n    &_vk {\n      background-image: url(../img/icons/facebook-icon.svg);\n    }\n    &_inst {\n      background-image: url(../img/icons/instagram-icon.svg);\n    }\n    &_youtube {\n      background-image: url(../img/icons/youtube-icon.svg);\n    }\n  }\n}\n\n@media (max-width: 690px) {\n  .footer {\n    flex-direction: column;\n  }\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/slider/itc-slider.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/slider/itc-slider.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z%27/%3E%3C/svg%3E */ "data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z%27/%3E%3C/svg%3E */ "data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * ItcSlider\n * @version 1.0.1\n * @author https://github.com/itchief\n * @copyright Alexander Maltsev 2020 - 2023\n * @license MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)\n * @tutorial https://itchief.ru/javascript/slider\n */\n\n.itc-slider {\n  position: relative;\n}\n\n.itc-slider-wrapper {\n  overflow: hidden;\n}\n\n.itc-slider-items {\n  display: flex;\n  transition: transform 0.5s ease;\n  will-change: transform;\n}\n\n.itc-slider-transition-none {\n  transition: none;\n}\n\n.itc-slider-item {\n  flex: 0 0 100%;\n  max-width: 100%;\n  user-select: none;\n  will-change: transform;\n}\n\n/* кнопки влево и вправо */\n.itc-slider-btn {\n  position: absolute;\n  top: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 50px;\n  color: #fff;\n  text-align: center;\n  background: rgb(0 0 0 / 20%);\n  border: none;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n\n.itc-slider-btn-hide {\n  display: none;\n}\n\n.itc-slider-btn-prev {\n  left: 0;\n}\n\n.itc-slider-btn-next {\n  right: 0;\n}\n\n.itc-slider-btn:hover,\n.itc-slider-btn:focus {\n  color: #fff;\n  text-decoration: none;\n  background: rgb(0 0 0 / 30%);\n  outline: 0;\n}\n\n.itc-slider-btn::before {\n  content: \"\";\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%;\n}\n\n.itc-slider-btn-prev::before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.itc-slider-btn-next::before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n/* индикаторы */\n.itc-slider-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  margin: 0 15%;\n  padding-left: 0;\n  list-style: none;\n}\n\n.itc-slider-indicator {\n  flex: 0 1 auto;\n  box-sizing: content-box;\n  width: 30px;\n  height: 5px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  background-color: rgb(255 255 255 / 50%);\n  background-clip: padding-box;\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  cursor: pointer;\n}\n\n.itc-slider-indicator-active {\n  background-color: rgb(255 255 255 / 90%);\n}\n\n/* НАСТРОЙКИ */\n\n.itc-slider-items {\n  --gap: 1rem;\n  gap: var(--gap);\n}\n\n/* на маленьких устройствах 2 слайд */\n.itc-slider-item {\n  /* flex: 0 0 100%; */\n  flex: 0 0 calc(50% - var(--gap) / 2);\n}\n\n/* на средних экранах (ширина больше 768px) 4 слайда */\n@media (min-width: 768px) {\n  .itc-slider-item {\n    /* flex: 0 0 calc(50% - var(--gap) / 2); */\n    flex: 0 0 calc(25% - var(--gap) * 3 / 4);\n  }\n}\n\n/* на больших экранах (ширина больше 1200px) 5 слайдов */\n@media (min-width: 1200px) {\n  .itc-slider-item {\n    /* flex: 0 0 calc(33.3333333333% - var(--gap) * 2 / 3); */\n    flex: 0 0 calc(25% - var(--gap) * 4 / 5);\n  }\n}\n\n.itc-slider-btn-prev {\n  left: -3rem;\n}\n.itc-slider-btn-next {\n  right: -3rem;\n}\n", "",{"version":3,"sources":["webpack://./src/modules/slider/itc-slider.css"],"names":[],"mappings":"AAAA;;;;;;;EAOE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;EACE,kBAAkB;EAClB,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,4BAA4B;EAC5B,YAAY;EACZ,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,QAAQ;AACV;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,4BAA4B;EAC5B,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,+CAA+C;EAC/C,0BAA0B;AAC5B;;AAEA;EACE,yDAAgN;AAClN;;AAEA;EACE,yDAAgN;AAClN;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,OAAO;EACP,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,uBAAuB;EACvB,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,wCAAwC;EACxC,4BAA4B;EAC5B,kCAAkC;EAClC,qCAAqC;EACrC,eAAe;AACjB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA,cAAc;;AAEd;EACE,WAAW;EACX,eAAe;AACjB;;AAEA,qCAAqC;AACrC;EACE,oBAAoB;EACpB,oCAAoC;AACtC;;AAEA,sDAAsD;AACtD;EACE;IACE,0CAA0C;IAC1C,wCAAwC;EAC1C;AACF;;AAEA,wDAAwD;AACxD;EACE;IACE,yDAAyD;IACzD,wCAAwC;EAC1C;AACF;;AAEA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd","sourcesContent":["/**\n * ItcSlider\n * @version 1.0.1\n * @author https://github.com/itchief\n * @copyright Alexander Maltsev 2020 - 2023\n * @license MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)\n * @tutorial https://itchief.ru/javascript/slider\n */\n\n.itc-slider {\n  position: relative;\n}\n\n.itc-slider-wrapper {\n  overflow: hidden;\n}\n\n.itc-slider-items {\n  display: flex;\n  transition: transform 0.5s ease;\n  will-change: transform;\n}\n\n.itc-slider-transition-none {\n  transition: none;\n}\n\n.itc-slider-item {\n  flex: 0 0 100%;\n  max-width: 100%;\n  user-select: none;\n  will-change: transform;\n}\n\n/* кнопки влево и вправо */\n.itc-slider-btn {\n  position: absolute;\n  top: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 50px;\n  color: #fff;\n  text-align: center;\n  background: rgb(0 0 0 / 20%);\n  border: none;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n\n.itc-slider-btn-hide {\n  display: none;\n}\n\n.itc-slider-btn-prev {\n  left: 0;\n}\n\n.itc-slider-btn-next {\n  right: 0;\n}\n\n.itc-slider-btn:hover,\n.itc-slider-btn:focus {\n  color: #fff;\n  text-decoration: none;\n  background: rgb(0 0 0 / 30%);\n  outline: 0;\n}\n\n.itc-slider-btn::before {\n  content: \"\";\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%;\n}\n\n.itc-slider-btn-prev::before {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\n}\n\n.itc-slider-btn-next::before {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n}\n\n/* индикаторы */\n.itc-slider-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  margin: 0 15%;\n  padding-left: 0;\n  list-style: none;\n}\n\n.itc-slider-indicator {\n  flex: 0 1 auto;\n  box-sizing: content-box;\n  width: 30px;\n  height: 5px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  background-color: rgb(255 255 255 / 50%);\n  background-clip: padding-box;\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  cursor: pointer;\n}\n\n.itc-slider-indicator-active {\n  background-color: rgb(255 255 255 / 90%);\n}\n\n/* НАСТРОЙКИ */\n\n.itc-slider-items {\n  --gap: 1rem;\n  gap: var(--gap);\n}\n\n/* на маленьких устройствах 2 слайд */\n.itc-slider-item {\n  /* flex: 0 0 100%; */\n  flex: 0 0 calc(50% - var(--gap) / 2);\n}\n\n/* на средних экранах (ширина больше 768px) 4 слайда */\n@media (min-width: 768px) {\n  .itc-slider-item {\n    /* flex: 0 0 calc(50% - var(--gap) / 2); */\n    flex: 0 0 calc(25% - var(--gap) * 3 / 4);\n  }\n}\n\n/* на больших экранах (ширина больше 1200px) 5 слайдов */\n@media (min-width: 1200px) {\n  .itc-slider-item {\n    /* flex: 0 0 calc(33.3333333333% - var(--gap) * 2 / 3); */\n    flex: 0 0 calc(25% - var(--gap) * 4 / 5);\n  }\n}\n\n.itc-slider-btn-prev {\n  left: -3rem;\n}\n.itc-slider-btn-next {\n  right: -3rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/clock.svg */ "./src/img/icons/clock.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/slider/examples/images/2.jpg */ "./src/modules/slider/examples/images/2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/slider/examples/images/6.jpg */ "./src/modules/slider/examples/images/6.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/slider/examples/images/1.jpg */ "./src/modules/slider/examples/images/1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/slider/examples/images/4.jpg */ "./src/modules/slider/examples/images/4.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html>\n<html lang=\"ru\" data-theme=\"light\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Citynix</title>\n  </head>\n  <body>\n    <!-- NAVIGATION START -->\n\n    <nav class=\"nav\">\n      <ul data-state=\"false\" class=\"nav__menu\">\n        <li class=\"nav__menu-item\">\n          <a class=\"nav__menu-item-link\" href=\"#\">Home</a>\n        </li>\n        <li class=\"nav__menu-item\">\n          <a class=\"nav__menu-item-link\" href=\"#\">About</a>\n        </li>\n        <li class=\"nav__menu-item\">\n          <a class=\"nav__menu-item-link\" href=\"#\">Blog</a>\n        </li>\n      </ul>\n      <button id=\"toggle-theme\" class=\"btn nav__theme\">Change theme</button>\n      <div data-state=\"false\" class=\"nav__burger\">\n        <span class=\"nav__burger-line\"></span>\n      </div>\n    </nav>\n\n    <!-- NAVIGATION END -->\n\n    <!-- SECTION WELCOME START -->\n\n    <section class=\"welcome\">\n      <h1 class=\"welcome__heading\">Hello, I`m USER_NAME!</h1>\n      <p class=\"welcome__text\">Lorem ipsum dolor sit amet.</p>\n      <button class=\"btn welcome__btn\">Contact us!</button>\n    </section>\n\n    <!-- SECTION WELCOME END -->\n\n    <!-- SLIDER START -->\n\n    <section class=\"slider\">\n      <div class=\"itc-slider\" data-slider=\"itc-slider\">\n        <div class=\"itc-slider-wrapper\">\n          <div class=\"itc-slider-items\">\n            <div class=\"itc-slider-item\">\n              <!-- Контент 1 слайда -->\n              <div class=\"slider__item\">\n                <img\n                  class=\"slider__item-img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n                  alt=\"clock\"\n                />\n                <h4 class=\"slider__item-title\">Lorem, ipsum.</h4>\n                <p class=\"slider__item-text\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Aliquam, ratione.\n                </p>\n              </div>\n            </div>\n\n            <div class=\"itc-slider-item\">\n              <!-- Контент 2 слайда -->\n              <div class=\"slider__item\">\n                <img\n                  class=\"slider__item-img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n                  alt=\"clock\"\n                />\n                <h4 class=\"slider__item-title\">Lorem, ipsum.</h4>\n                <p class=\"slider__item-text\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Aliquam, ratione.\n                </p>\n              </div>\n            </div>\n\n            <div class=\"itc-slider-item\">\n              <!-- Контент 3 слайда -->\n              <div class=\"slider__item\">\n                <img\n                  class=\"slider__item-img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n                  alt=\"clock\"\n                />\n                <h4 class=\"slider__item-title\">Lorem, ipsum.</h4>\n                <p class=\"slider__item-text\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Aliquam, ratione.\n                </p>\n              </div>\n            </div>\n\n            <div class=\"itc-slider-item\">\n              <!-- Контент 3 слайда -->\n              <div class=\"slider__item\">\n                <img\n                  class=\"slider__item-img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n                  alt=\"clock\"\n                />\n                <h4 class=\"slider__item-title\">Lorem, ipsum.</h4>\n                <p class=\"slider__item-text\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Aliquam, ratione.\n                </p>\n              </div>\n            </div>\n\n            <div class=\"itc-slider-item\">\n              <!-- Контент 3 слайда -->\n              <div class=\"slider__item\">\n                <img\n                  class=\"slider__item-img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n                  alt=\"clock\"\n                />\n                <h4 class=\"slider__item-title\">Lorem, ipsum.</h4>\n                <p class=\"slider__item-text\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Aliquam, ratione.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Кнопки для перехода к предыдущему и следующему слайду -->\n        <button class=\"itc-slider-btn itc-slider-btn-prev\"></button>\n        <button class=\"itc-slider-btn itc-slider-btn-next\"></button>\n      </div>\n    </section>\n\n    <!-- SLIDER END -->\n\n    <!-- ABOUT ME START -->\n    <section class=\"about-me\">\n      <div class=\"about-me__picture\">\n        <img\n          class=\"about-me__picture-img\"\n          src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\n          alt=\"image\"\n        />\n      </div>\n\n      <div class=\"about-me__content\">\n        <h2 class=\"about-me__content-title\">Some words about me</h2>\n        <p class=\"about-me__content-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat\n          corporis qui quibusdam dolores facere deserunt sequi nisi soluta minus\n          consequatur.\n        </p>\n        <ul class=\"about-me__content-list\">\n          <span class=\"about-me__content-list-title\">My benefits are: </span>\n          <li class=\"about-me__content-list-item\">Lorem ipsum dolor sit.</li>\n          <li class=\"about-me__content-list-item\">Lorem ipsum dolor sit.</li>\n          <li class=\"about-me__content-list-item\">Lorem ipsum dolor sit.</li>\n          <li class=\"about-me__content-list-item\">Lorem ipsum dolor sit.</li>\n        </ul>\n        <p class=\"about-me__content-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat\n          corporis qui quibusdam dolores facere deserunt sequi nisi soluta minus\n          consequatur.\n        </p>\n        <div class=\"about-me__content-btns\">\n          <button class=\"btn about-me__content-btns-btn\">Portfolio</button>\n          <button class=\"btn about-me__content-btns-btn\">Contact me</button>\n        </div>\n      </div>\n    </section>\n\n    <!-- ABOUT ME END -->\n\n    <!-- DIARY START -->\n\n    <section class=\"diary\">\n      <div class=\"diary__item\">\n        <span class=\"diary__item-step\">01 / EDUCATION</span>\n        <span class=\"diary__item-date\">2000</span>\n        <h3 class=\"diary__item-title\">Lorem ipsum dolor sit amet.</h3>\n        <p class=\"diary__item-text\">\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,\n          numquam.\n        </p>\n      </div>\n\n      <div class=\"diary__item\">\n        <span class=\"diary__item-step\">02 \\ FIRST JOB</span>\n        <span class=\"diary__item-date\">2007</span>\n        <h3 class=\"diary__item-title\">Lorem ipsum dolor sit amet.</h3>\n        <p class=\"diary__item-text\">\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,\n          numquam.\n        </p>\n      </div>\n\n      <div class=\"diary__item\">\n        <span class=\"diary__item-step\">03 \\ UPGRADE</span>\n        <span class=\"diary__item-date\">2015</span>\n        <h3 class=\"diary__item-title\">Lorem ipsum dolor sit amet.</h3>\n        <p class=\"diary__item-text\">\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,\n          numquam.\n        </p>\n      </div>\n\n      <div class=\"diary__item\">\n        <span class=\"diary__item-step\">04 \\ AWARDS</span>\n        <span class=\"diary__item-date\">2022</span>\n        <h3 class=\"diary__item-title\">Lorem ipsum dolor sit amet.</h3>\n        <p class=\"diary__item-text\">\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,\n          numquam.\n        </p>\n      </div>\n    </section>\n\n    <!-- DIARY END -->\n\n    <!-- SERVICES START -->\n\n    <section class=\"services\">\n      <h2 class=\"services__title\">Top services</h2>\n      <span class=\"services__text\"\n        >Lorem ipsum dolor sit amet consectetur.</span\n      >\n      <hr class=\"services__hr\" />\n      <div class=\"services__content\">\n        <div class=\"services__content-card\">\n          <h4 class=\"services__content-card-title\">Card title</h4>\n          <span class=\"services__content-card-design\">design</span>\n          <button class=\"btn services__content-card-btn\">Learn more</button>\n        </div>\n\n        <div class=\"services__content-card\">\n          <h4 class=\"services__content-card-title\">Card title</h4>\n          <span class=\"services__content-card-design\">design</span>\n          <button class=\"btn services__content-card-btn\">Learn more</button>\n        </div>\n\n        <div class=\"services__content-card\">\n          <h4 class=\"services__content-card-title\">Card title</h4>\n          <span class=\"services__content-card-design\">design</span>\n          <button class=\"btn services__content-card-btn\">Learn more</button>\n        </div>\n\n        <div class=\"services__content-card\">\n          <h4 class=\"services__content-card-title\">Card title</h4>\n          <span class=\"services__content-card-design\">design</span>\n          <button class=\"btn services__content-card-btn\">Learn more</button>\n        </div>\n\n        <div class=\"services__content-card\">\n          <h4 class=\"services__content-card-title\">Card title</h4>\n          <span class=\"services__content-card-design\">design</span>\n          <button class=\"btn services__content-card-btn\">Learn more</button>\n        </div>\n\n        <div class=\"services__content-card\">\n          <h4 class=\"services__content-card-title\">Card title</h4>\n          <span class=\"services__content-card-design\">design</span>\n          <button class=\"btn services__content-card-btn\">Learn more</button>\n        </div>\n      </div>\n    </section>\n\n    <!-- SERVICES END -->\n\n    <!-- FEATURE START -->\n\n    <section class=\"feature\">\n      <h2 class=\"feature__title\">Top services</h2>\n      <span class=\"feature__text\">Lorem ipsum dolor sit amet consectetur.</span>\n      <hr class=\"feature__hr\" />\n\n      <div class=\"feature__content\">\n        <div class=\"feature__content-item\">\n          <div class=\"feature__content-item-picture\">\n            <img\n              class=\"feature__content-item-picture-img\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n              alt=\"picture\"\n            />\n          </div>\n          <div class=\"feature__content-item-content\">\n            <span class=\"feature__content-item-content-date\"\n              >01 / MAY,2021</span\n            >\n            <h3 class=\"feature__content-item-content-title\">\n              Paradise in the Woods\n            </h3>\n            <p class=\"feature__content-item-content-text\">\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere\n              voluptas nemo cupiditate voluptatem, qui architecto quaerat illo\n              fuga culpa ipsa.\n            </p>\n            <ul class=\"feature__content-item-content-list\">\n              <li class=\"feature__content-item-content-list-item\">Concept</li>\n              <li class=\"feature__content-item-content-list-item\">\n                3D Rendering\n              </li>\n              <li class=\"feature__content-item-content-list-item\">\n                Designer supervision\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"feature__content-item\">\n          <div class=\"feature__content-item-picture\">\n            <img\n              class=\"feature__content-item-picture-img\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n              alt=\"picture\"\n            />\n          </div>\n          <div class=\"feature__content-item-content\">\n            <span class=\"feature__content-item-content-date\"\n              >02 / SEPTEMBER 2021</span\n            >\n            <h3 class=\"feature__content-item-content-title\">Glass Peak</h3>\n            <p class=\"feature__content-item-content-text\">\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere\n              voluptas nemo cupiditate voluptatem, qui architecto quaerat illo\n              fuga culpa ipsa.\n            </p>\n            <ul class=\"feature__content-item-content-list\">\n              <li class=\"feature__content-item-content-list-item\">Concept</li>\n              <li class=\"feature__content-item-content-list-item\">\n                3D Rendering\n              </li>\n              <li class=\"feature__content-item-content-list-item\">\n                Designer supervision\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"feature__content-item\">\n          <div class=\"feature__content-item-picture\">\n            <img\n              class=\"feature__content-item-picture-img\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\n              alt=\"picture\"\n            />\n          </div>\n          <div class=\"feature__content-item-content\">\n            <span class=\"feature__content-item-content-date\"\n              >03 / APRIL 2022</span\n            >\n            <h3 class=\"feature__content-item-content-title\">Sun House</h3>\n            <p class=\"feature__content-item-content-text\">\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere\n              voluptas nemo cupiditate voluptatem, qui architecto quaerat illo\n              fuga culpa ipsa.\n            </p>\n            <ul class=\"feature__content-item-content-list\">\n              <li class=\"feature__content-item-content-list-item\">Concept</li>\n              <li class=\"feature__content-item-content-list-item\">\n                3D Rendering\n              </li>\n              <li class=\"feature__content-item-content-list-item\">\n                Designer supervision\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- FEATURE END  -->\n\n    <!-- CLIENTS START -->\n\n    <section class=\"clients\">\n      <h2 class=\"clients__title\">Words From My Clients</h2>\n      <span class=\"clients__text\">Lorem ipsum dolor sit amet consectetur.</span>\n      <hr class=\"clients__hr\" />\n\n      <div class=\"clients__slider\">\n        <div class=\"itc-slider\" data-slider=\"itc-slider\">\n          <div class=\"itc-slider-wrapper\">\n            <div class=\"itc-slider-items\">\n              <div class=\"itc-slider-item\">\n                <!-- Контент 1 слайда -->\n                <div class=\"clients__slider-item\">\n                  <div class=\"clients__slider-item-title\">\n                    <div class=\"clients__slider-item-title-avatar\"></div>\n                    <div class=\"clients__slider-item-title-about\">\n                      <h4 class=\"clients__slider-item-title-about-name\">\n                        Amada Peters\n                      </h4>\n                      <span class=\"clients__slider-item-title-about-info\"\n                        >Commertial property</span\n                      >\n                    </div>\n                    <span class=\"clients__slider-item-title-quote\"></span>\n                  </div>\n                  <div class=\"clients__slider-item-content\">\n                    <q\n                      >«Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                      Harum unde, suscipit mollitia facilis consequatur\n                      praesentium iusto iure doloribus aperiam dolorum aut\n                      consequuntur maxime blanditiis neque.»\n                    </q>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"itc-slider-item\">\n                <!-- Контент 1 слайда -->\n                <div class=\"clients__slider-item\">\n                  <div class=\"clients__slider-item-title\">\n                    <div class=\"clients__slider-item-title-avatar\"></div>\n                    <div class=\"clients__slider-item-title-about\">\n                      <h4 class=\"clients__slider-item-title-about-name\">\n                        Amada Peters\n                      </h4>\n                      <span class=\"clients__slider-item-title-about-info\"\n                        >Commertial property</span\n                      >\n                    </div>\n                    <span class=\"clients__slider-item-title-quote\"></span>\n                  </div>\n                  <div class=\"clients__slider-item-content\">\n                    <q\n                      >«Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                      Harum unde, suscipit mollitia facilis consequatur\n                      praesentium iusto iure doloribus aperiam dolorum aut\n                      consequuntur maxime blanditiis neque.»\n                    </q>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"itc-slider-item\">\n                <!-- Контент 1 слайда -->\n                <div class=\"clients__slider-item\">\n                  <div class=\"clients__slider-item-title\">\n                    <div class=\"clients__slider-item-title-avatar\"></div>\n                    <div class=\"clients__slider-item-title-about\">\n                      <h4 class=\"clients__slider-item-title-about-name\">\n                        Amada Peters\n                      </h4>\n                      <span class=\"clients__slider-item-title-about-info\"\n                        >Commertial property</span\n                      >\n                    </div>\n                    <span class=\"clients__slider-item-title-quote\"></span>\n                  </div>\n                  <div class=\"clients__slider-item-content\">\n                    <q\n                      >«Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                      Harum unde, suscipit mollitia facilis consequatur\n                      praesentium iusto iure doloribus aperiam dolorum aut\n                      consequuntur maxime blanditiis neque.»\n                    </q>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"itc-slider-item\">\n                <!-- Контент 1 слайда -->\n                <div class=\"clients__slider-item\">\n                  <div class=\"clients__slider-item-title\">\n                    <div class=\"clients__slider-item-title-avatar\"></div>\n                    <div class=\"clients__slider-item-title-about\">\n                      <h4 class=\"clients__slider-item-title-about-name\">\n                        Amada Peters\n                      </h4>\n                      <span class=\"clients__slider-item-title-about-info\"\n                        >Commertial property</span\n                      >\n                    </div>\n                    <span class=\"clients__slider-item-title-quote\"></span>\n                  </div>\n                  <div class=\"clients__slider-item-content\">\n                    <q\n                      >«Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                      Harum unde, suscipit mollitia facilis consequatur\n                      praesentium iusto iure doloribus aperiam dolorum aut\n                      consequuntur maxime blanditiis neque.»\n                    </q>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- Кнопки для перехода к предыдущему и следующему слайду -->\n          <button class=\"itc-slider-btn itc-slider-btn-prev\"></button>\n          <button class=\"itc-slider-btn itc-slider-btn-next\"></button>\n        </div>\n      </div>\n    </section>\n\n    <!-- CLIENTS END -->\n\n    <!-- FOOTER -->\n    <footer class=\"footer\">\n      <div class=\"footer__links\">\n        <ul class=\"footer__links-list\">\n          <li class=\"footer__links-list-item\">\n            <a class=\"footer__links-list-item-link\" href=\"#\">About me</a>\n          </li>\n\n          <li class=\"footer__links-list-item\">\n            <a class=\"footer__links-list-item-link\" href=\"#\">Contact me</a>\n          </li>\n\n          <li class=\"footer__links-list-item\">\n            <a class=\"footer__links-list-item-link\" href=\"#\">Testmonials</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"footer__social\">\n        <a class=\"footer__social-link\" href=\"#\">\n          <span class=\"footer__social-icon footer__social_vk\"></span\n        ></a>\n        <a class=\"footer__social-link\" href=\"#\"\n          ><span class=\"footer__social-icon footer__social_inst\"></span\n        ></a>\n        <a class=\"footer__social-link\" href=\"#\"\n          ><span class=\"footer__social-icon footer__social_youtube\"></span\n        ></a>\n      </div>\n    </footer>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "./src/fonts/montserrat-v23-latin_cyrillic-regular.woff":
/*!**************************************************************!*\
  !*** ./src/fonts/montserrat-v23-latin_cyrillic-regular.woff ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/montserrat-v23-latin_cyrillic-regular.woff";

/***/ }),

/***/ "./src/fonts/montserrat-v23-latin_cyrillic-regular.woff2":
/*!***************************************************************!*\
  !*** ./src/fonts/montserrat-v23-latin_cyrillic-regular.woff2 ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/montserrat-v23-latin_cyrillic-regular.woff2";

/***/ }),

/***/ "./src/img/icons/checkMark.svg":
/*!*************************************!*\
  !*** ./src/img/icons/checkMark.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/checkMark.svg";

/***/ }),

/***/ "./src/img/icons/clock.svg":
/*!*********************************!*\
  !*** ./src/img/icons/clock.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/clock.svg";

/***/ }),

/***/ "./src/img/icons/facebook-icon.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/facebook-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/facebook-icon.svg";

/***/ }),

/***/ "./src/img/icons/instagram-icon.svg":
/*!******************************************!*\
  !*** ./src/img/icons/instagram-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/instagram-icon.svg";

/***/ }),

/***/ "./src/img/icons/quote.svg":
/*!*********************************!*\
  !*** ./src/img/icons/quote.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/quote.svg";

/***/ }),

/***/ "./src/img/icons/youtube-icon.svg":
/*!****************************************!*\
  !*** ./src/img/icons/youtube-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/youtube-icon.svg";

/***/ }),

/***/ "./src/img/woman4.jpg":
/*!****************************!*\
  !*** ./src/img/woman4.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/woman4.jpg";

/***/ }),

/***/ "./src/modules/slider/examples/images/1.jpg":
/*!**************************************************!*\
  !*** ./src/modules/slider/examples/images/1.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1.jpg";

/***/ }),

/***/ "./src/modules/slider/examples/images/2.jpg":
/*!**************************************************!*\
  !*** ./src/modules/slider/examples/images/2.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2.jpg";

/***/ }),

/***/ "./src/modules/slider/examples/images/4.jpg":
/*!**************************************************!*\
  !*** ./src/modules/slider/examples/images/4.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4.jpg";

/***/ }),

/***/ "./src/modules/slider/examples/images/5.jpg":
/*!**************************************************!*\
  !*** ./src/modules/slider/examples/images/5.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5.jpg";

/***/ }),

/***/ "./src/modules/slider/examples/images/6.jpg":
/*!**************************************************!*\
  !*** ./src/modules/slider/examples/images/6.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_navbar_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navbar/nav */ "./src/modules/navbar/nav.js");
/* harmony import */ var _modules_navbar_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_navbar_nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_themeHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/themeHandler */ "./src/modules/themeHandler.js");
/* harmony import */ var _modules_themeHandler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_themeHandler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_btn_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/btn/btn */ "./src/modules/btn/btn.js");
/* harmony import */ var _modules_btn_btn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_btn_btn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_slider_itc_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider/itc-slider */ "./src/modules/slider/itc-slider.js");
/* harmony import */ var _modules_slider_itc_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_itc_slider__WEBPACK_IMPORTED_MODULE_5__);





 // Slider
})();

/******/ })()
;
//# sourceMappingURL=main.6a7344149c537a51a019.js.map