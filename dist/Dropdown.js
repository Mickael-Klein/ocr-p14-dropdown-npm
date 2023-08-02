"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DropdownWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  z-index: ", ";\n  cursor: pointer;\n"])), function (props) {
  return props.zIndex || 0;
});
var InputBtn = _styledComponents["default"].input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 6px 10px 5px 25px;\n  background-color: white;\n  border: solid 1px black;\n  border-radius: 5px;\n  cursor: pointer;\n  text-align: left;\n"])));
var DropdownMenu = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  max-height: 25vh;\n  box-shadow: 0px 0px 0px 1px #242424 inset;\n  border-radius: 10px;\n  position: absolute;\n  top: 30px;\n  background-color: #242424;\n  overflow: auto;\n  display: flex;\n  flex-flow: column;\n  padding-top: 20px;\n  padding-bottom: 10px;\n"])));
var DropdownSelectionContainer = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 1em 0em;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  padding-left: 0.3em;\n  background-color: #242424;\n  &:hover,\n  &:focus {\n    background-color: #2d2d2d;\n  }\n"])));
var DropdownSelection = _styledComponents["default"].p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-block-start: 0;\n  margin-block-end: 0;\n  padding-left: 15px;\n  color: white;\n"])));
var SearchBar = _styledComponents["default"].input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 40%;\n  height: 15px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: solid 1px #242424;\n  border-radius: 0 0px 0px 10px;\n  background-color: #babbbe;\n  color: black;\n  padding: 5px;\n"])));
var Dropdown = function Dropdown(_ref) {
  var dropdownData = _ref.dropdownData,
    onChange = _ref.onChange,
    _ref$onReset = _ref.onReset,
    onReset = _ref$onReset === void 0 ? false : _ref$onReset;
  Dropdown.propTypes = {
    dropdownData: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])).isRequired
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    dropdownIsOpen = _useState2[0],
    setDropdownIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(dropdownData[0]),
    _useState4 = _slicedToArray(_useState3, 2),
    dropdownSelection = _useState4[0],
    setDropdownSelection = _useState4[1];
  var _useState5 = (0, _react.useState)(_toConsumableArray(dropdownData)),
    _useState6 = _slicedToArray(_useState5, 2),
    filteredDropdownData = _useState6[0],
    setFilteredDropdownData = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    dropdownZIndex = _useState8[0],
    setDropdownZIndex = _useState8[1];
  var dropdownRef = (0, _react.useRef)(null);
  function toogleDropdown() {
    setDropdownIsOpen(function (state) {
      return !state;
    });
    setDropdownZIndex(function (dropdownZIndex) {
      return dropdownZIndex === 0 ? 10 : 0;
    });
    if (filteredDropdownData.length < dropdownData.length) {
      setFilteredDropdownData(_toConsumableArray(dropdownData));
    }
  }
  function handleSelectionClick(e) {
    var tagName = e.target.tagName.toLowerCase();
    if (tagName && tagName === "p") {
      setDropdownSelection(e.target.innerText);
    }
    if (tagName && tagName === "div") {
      var p = e.target.querySelector("p");
      setDropdownSelection(p.innerText);
    }
    toogleDropdown();
  }
  function filterData(e) {
    var search = e.target.value;
    if (typeof search === "string") {
      search = search.toLowerCase();
    }
    setFilteredDropdownData(dropdownData.filter(function (elem) {
      if (typeof elem === "string") {
        elem = elem.toLowerCase();
      }
      return elem.includes(search);
    }));
  }
  (0, _react.useEffect)(function () {
    onChange(dropdownSelection);
  }, [dropdownSelection]);
  (0, _react.useEffect)(function () {
    if (onReset) {
      setDropdownIsOpen(false);
      setDropdownSelection(dropdownData[0]);
      setFilteredDropdownData(_toConsumableArray(dropdownData));
      setDropdownZIndex(0);
    }
  }, [onReset]);
  var handleOutsideClick = function handleOutsideClick(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      toogleDropdown();
    }
  };
  (0, _react.useEffect)(function () {
    if (dropdownIsOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return function () {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownIsOpen]);
  return /*#__PURE__*/_react["default"].createElement(DropdownWrapper, {
    zIndex: dropdownZIndex,
    className: "dropdownWrapper",
    ref: dropdownRef
  }, /*#__PURE__*/_react["default"].createElement(InputBtn, {
    type: "button",
    value: dropdownSelection,
    onClick: function onClick() {
      toogleDropdown();
    }
  }), dropdownIsOpen ? /*#__PURE__*/_react["default"].createElement(DropdownMenu, {
    className: "dropdownMenu"
  }, /*#__PURE__*/_react["default"].createElement(SearchBar, {
    type: "text",
    placeholder: "Search",
    onChange: function onChange(e) {
      return filterData(e);
    }
  }), filteredDropdownData.length && filteredDropdownData.length > 0 ? filteredDropdownData.map(function (elem, index) {
    return /*#__PURE__*/_react["default"].createElement(DropdownSelectionContainer, {
      className: "dropdownMenu__selectionContainer",
      key: "dropdownMenu__selectionContainer" + index,
      onClick: function onClick(e) {
        return handleSelectionClick(e);
      }
    }, /*#__PURE__*/_react["default"].createElement(DropdownSelection, {
      className: "drodownMenu__selection"
    }, elem));
  }) : "No content to display after search") : "");
};
var _default = Dropdown;
exports["default"] = _default;