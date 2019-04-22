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

var ContextMenu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ContextMenu, _Component);

  function ContextMenu(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ContextMenu);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ContextMenu).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (cb) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      cb && cb.apply(void 0, params);

      _this.props.onBlur();
    });
    return _this;
  }

  (0, _createClass2.default)(ContextMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refs.menu.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          onBlur = _this$props.onBlur;
      return _react.default.createElement("div", {
        className: "context-menu"
      }, _react.default.createElement("ul", {
        tabindex: "1",
        ref: "menu",
        onBlur: onBlur
      }, data.map(function (d, i) {
        return _react.default.createElement("li", {
          key: i,
          onClick: function onClick() {
            for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              params[_key2] = arguments[_key2];
            }

            return _this2.handleClick.apply(_this2, [d.onClick].concat(params));
          }
        }, d.name);
      })));
    }
  }]);
  return ContextMenu;
}(_react.Component);

exports.default = ContextMenu;