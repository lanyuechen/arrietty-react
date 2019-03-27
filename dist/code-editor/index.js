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

var _brace = _interopRequireDefault(require("brace"));

require("brace/mode/javascript");

require("brace/theme/monokai");

require("./style.css");

var _default =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(_default, _Component);

  function _default(props) {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this, props));
  }

  (0, _createClass2.default)(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.editor = _brace.default.edit(this.refs.container);
      this.editor.setTheme("ace/theme/monokai");
      this.editor.session.setMode("ace/mode/javascript");
      this.editor.session.on('change', function () {
        _this.props.onChange && _this.props.onChange(_this.editor.getValue());
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "f-c-code-editor",
        ref: "container"
      }, this.props.children);
    }
  }]);
  return _default;
}(_react.Component);

exports.default = _default;