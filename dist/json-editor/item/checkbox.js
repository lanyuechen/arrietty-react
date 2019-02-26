"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _default =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(_default, _Component);

  function _default(props) {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (e) {
      var _this$props = _this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;

      if (e.target.checked) {
        value = [].concat((0, _toConsumableArray2.default)(value), [e.target.value]);
      } else {
        value = value.filter(function (v) {
          return v !== e.target.value;
        });
      }

      onChange && onChange(value);
    });
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          name = _this$props2.name,
          value = _this$props2.value,
          describe = _this$props2.describe;
      return _react.default.createElement("div", null, describe.data && describe.data.map(function (d) {
        return _react.default.createElement("label", {
          key: d.key
        }, _react.default.createElement("input", {
          type: "checkbox",
          name: name,
          value: d.key,
          checked: value.indexOf(d.key) > -1,
          onChange: _this2.handleChange
        }), d.name);
      }));
    }
  }]);
  return _default;
}(_react.Component);

exports.default = _default;