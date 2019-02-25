"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var Flex =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Flex, _Component);

  function Flex(props) {
    (0, _classCallCheck2.default)(this, Flex);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Flex).call(this, props));
  }

  (0, _createClass2.default)(Flex, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          vertical = _this$props.vertical,
          width = _this$props.width,
          height = _this$props.height,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;
      return _react.default.createElement("div", {
        className: "an-layout",
        style: (0, _objectSpread3.default)({}, style, {
          display: 'flex',
          width: width || '100%',
          height: height || '100%',
          flexFlow: vertical ? 'column' : 'row',
          flexShrink: width || height ? 0 : 1
        })
      }, _react.default.Children.map(children, function (child) {
        var isFlex = child.type && child.type.name === 'Flex';
        var type = vertical ? 'height' : 'width';

        if (isFlex) {
          return (0, _objectSpread3.default)({}, child, {
            props: (0, _objectSpread3.default)({}, child.props, (0, _defineProperty2.default)({
              size: undefined
            }, type, child.props.size))
          });
        }

        return child;
      }));
    }
  }]);
  return Flex;
}(_react.Component);

exports.default = Flex;