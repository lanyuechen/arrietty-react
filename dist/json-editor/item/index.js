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

var _react = _interopRequireWildcard(require("react"));

var _input = _interopRequireDefault(require("./input"));

var _checkbox = _interopRequireDefault(require("./checkbox"));

var _radio = _interopRequireDefault(require("./radio"));

var _select = _interopRequireDefault(require("./select"));

var COMPONENTS = {
  checkbox: _checkbox.default,
  //复选框
  radio: _radio.default,
  //单选框
  select: _select.default //下拉框

};

var _default =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(_default, _Component);

  function _default(props) {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this, props));
  }

  (0, _createClass2.default)(_default, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.value !== this.props.value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          value = _this$props.value,
          onChange = _this$props.onChange,
          _this$props$describe = _this$props.describe,
          describe = _this$props$describe === void 0 ? {
        type: 'input'
      } : _this$props$describe;
      console.log('[render form item]', name, describe, value);
      var C = COMPONENTS[describe.type] || _input.default;
      return _react.default.createElement("label", null, name, ":", _react.default.createElement(C, {
        name: name,
        value: value,
        describe: describe,
        onChange: onChange
      }));
    }
  }]);
  return _default;
}(_react.Component);

exports.default = _default;