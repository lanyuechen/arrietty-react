"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _item = _interopRequireDefault(require("./item"));

require("./style.css");

var Form =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Form, _Component);
  (0, _createClass2.default)(Form, null, [{
    key: "isObj",
    value: function isObj(obj) {
      return obj && (0, _typeof2.default)(obj) === 'object';
    }
  }]);

  function Form(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Form);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Form).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (k, v) {
      var value = _this.props.value;
      value.$update({
        $merge: (0, _defineProperty2.default)({}, k, v)
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Form, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          name = _this$props.name,
          value = _this$props.value;
      return _react.default.createElement("div", {
        className: "form-group"
      }, name, _react.default.createElement("ul", null, Object.entries(value).map(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return _react.default.createElement("li", {
          key: k
        }, Form.isObj(v) ? _react.default.createElement(Form, {
          value: v,
          name: k
        }) : _react.default.createElement(_item.default, {
          name: k,
          value: v,
          onChange: function onChange(v) {
            return _this2.handleChange(k, v);
          }
        }));
      })));
    }
  }]);
  return Form;
}(_react.Component);

exports.default = Form;