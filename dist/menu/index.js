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

var Menu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Menu, _Component);

  function Menu(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Menu);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Menu).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (e, d) {
      var _this$props$onClick, _this$props;

      (_this$props$onClick = (_this$props = _this.props).onClick) === null || _this$props$onClick === void 0 ? void 0 : _this$props$onClick.call(_this$props, e, d);

      if (!d.isFile) {
        var item = e.currentTarget.parentNode;

        if (item.hasAttribute('active')) {
          item.removeAttribute('active');
        } else {
          item.setAttribute('active', true);
        }
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          _onContextMenu = _this$props2.onContextMenu,
          onClick = _this$props2.onClick;
      return _react.default.createElement("ul", {
        className: "ar-menu"
      }, data.map(function (d) {
        return _react.default.createElement("li", {
          className: "ar-menu-item".concat(d.isFile ? ' ar-menu-item-file' : ''),
          key: d.name
        }, _react.default.createElement("span", {
          className: "ar-menu-item-head",
          onClick: function onClick(e) {
            return _this2.handleClick(e, d);
          },
          onContextMenu: function onContextMenu(e) {
            return _onContextMenu === null || _onContextMenu === void 0 ? void 0 : _onContextMenu(e, d);
          }
        }, d.render ? d.render(d) : d.name), !d.isFile && _react.default.createElement("div", {
          className: "ar-submenu"
        }, _react.default.createElement(Menu, {
          key: d.name,
          data: d.children,
          onClick: onClick,
          onContextMenu: _onContextMenu
        })));
      }));
    }
  }]);
  return Menu;
}(_react.Component);

exports.default = Menu;