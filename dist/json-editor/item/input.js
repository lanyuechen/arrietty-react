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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var Input =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Input, _Component);

  function Input(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Input);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Input).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (e) {
      var onChange = _this.props.onChange;
      onChange && onChange(e.target.value);
    });
    return _this;
  }

  (0, _createClass2.default)(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          value = _this$props.value;
      return _react.default.createElement("input", {
        name: name,
        value: value,
        onChange: this.handleChange
      });
    }
  }]);
  return Input;
}(_react.Component);

exports.default = Input;