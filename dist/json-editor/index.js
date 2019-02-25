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

var _allInOne = _interopRequireDefault(require("../all-in-one"));

var _form = _interopRequireDefault(require("./form"));

var _default =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(_default, _Component);

  function _default(props) {
    var _dec, _class;

    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this, props)); //Aio做装饰器，所以暂时这么处理，todo需要修改

    var AioForm = (_dec = (0, _allInOne.default)({
      name: props.name,
      value: props.value
    }, function (spec) {
      props.onChange && props.onChange(spec);
    }), _dec(_class =
    /*#__PURE__*/
    function (_Component2) {
      (0, _inherits2.default)(AioForm, _Component2);

      function AioForm(props) {
        (0, _classCallCheck2.default)(this, AioForm);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AioForm).call(this, props));
      }

      (0, _createClass2.default)(AioForm, [{
        key: "render",
        value: function render() {
          var _this$props$spec = this.props.spec,
              name = _this$props$spec.name,
              value = _this$props$spec.value;
          return _react.default.createElement("div", null, _react.default.createElement(_form.default, {
            name: name,
            value: value
          }));
        }
      }]);
      return AioForm;
    }(_react.Component)) || _class);
    _this.aioForm = _react.default.createElement(AioForm, {
      name: props.name,
      value: props.value
    });
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "render",
    value: function render() {
      return this.aioForm;
    }
  }]);
  return _default;
}(_react.Component);

exports.default = _default;