"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

/**
 * 宽高比固定的容器
 * ratio: 高度和宽度的比值
 */
var _default =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(_default, _Component);

  function _default(props) {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this, props));
  }

  (0, _createClass2.default)(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ratio = _this$props.ratio,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          width = _this$props.width,
          children = _this$props.children;
      return _react.default.createElement("div", {
        className: "ar-aspect-ratio-box",
        style: (0, _objectSpread2.default)({
          width: width
        }, style)
      }, _react.default.createElement("div", {
        className: "ar-aspect-ratio-box-bg",
        style: {
          paddingBottom: "".concat(ratio * 100, "%")
        }
      }, " "), _react.default.createElement("div", {
        className: "ar-aspect-ratio-box-container"
      }, children));
    }
  }]);
  return _default;
}(_react.Component);

exports.default = _default;
(0, _defineProperty2.default)(_default, "defaultProps", {
  ratio: 0.618
});