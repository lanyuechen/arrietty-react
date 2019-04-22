"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

var Popover =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Popover, _Component);

  function Popover(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Popover);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Popover).call(this, props));
    _this.rect = {
      x: props.x,
      y: props.y
    };
    return _this;
  }

  (0, _createClass2.default)(Popover, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$rect = this.rect,
          x = _this$rect.x,
          y = _this$rect.y;
      return _react.default.createElement("div", {
        className: "popover",
        style: {
          left: x,
          top: y
        }
      }, children);
    }
  }]);
  return Popover;
}(_react.Component);

exports.default = Popover;
(0, _defineProperty2.default)(Popover, "defaultProps", {
  x: 0,
  y: 0
});