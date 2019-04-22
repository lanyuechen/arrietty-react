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

require("./style.css");

var Editable =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Editable, _Component);

  function Editable(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Editable);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Editable).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (e) {
      e.stopPropagation();
      e.preventDefault();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyUp", function (e) {
      if (e.key === 'Enter') {
        var _this$props$onSubmit, _this$props;

        (_this$props$onSubmit = (_this$props = _this.props).onSubmit) === null || _this$props$onSubmit === void 0 ? void 0 : _this$props$onSubmit.call(_this$props, e.target.value);
      } else if (e.key === 'Escape') {
        var _this$props$onCancel, _this$props2;

        (_this$props$onCancel = (_this$props2 = _this.props).onCancel) === null || _this$props$onCancel === void 0 ? void 0 : _this$props$onCancel.call(_this$props2);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCancel", function (e) {
      var _this$props$onCancel2, _this$props3;

      (_this$props$onCancel2 = (_this$props3 = _this.props).onCancel) === null || _this$props$onCancel2 === void 0 ? void 0 : _this$props$onCancel2.call(_this$props3);
    });
    return _this;
  }

  (0, _createClass2.default)(Editable, [{
    key: "render",
    value: function render() {
      var editing = this.props.editing;

      if (editing) {
        return _react.default.createElement("span", {
          className: "ar-editable"
        }, _react.default.createElement("input", {
          type: "text",
          spellCheck: false,
          defaultValue: this.props.children,
          onClick: this.handleClick,
          onKeyUp: this.handleKeyUp,
          onBlur: this.handleCancel
        }));
      }

      return _react.default.createElement("span", {
        className: "ar-editable"
      }, this.props.children);
    }
  }]);
  return Editable;
}(_react.Component);

exports.default = Editable;