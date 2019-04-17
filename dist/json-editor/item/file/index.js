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
          onChange = _this$props.onChange,
          describe = _this$props.describe;
      var _describe$config = describe.config,
          url = _describe$config.url,
          _describe$config$name = _describe$config.name,
          name = _describe$config$name === void 0 ? 'bin' : _describe$config$name;
      console.log('==', name);
      var file = e.target.files[0];
      var body = new FormData();
      body.append(name, file);
      console.log('describe', describe);
      fetch(url, {
        method: 'POST',
        body: body // 注！加headers会导致上传失败，原因未知
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }

      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (res.code === 200) {
          onChange && onChange(res.msg);
        }
      });
    });
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          value = _this$props2.value,
          describe = _this$props2.describe;
      return _react.default.createElement("div", {
        className: "ar-img-upload"
      }, value && value._id ? _react.default.createElement("img", {
        src: "http://localhost:3721/upload/".concat(value._id, ".").concat(value.ext),
        alt: "IMG"
      }) : 'IMG', _react.default.createElement("input", {
        type: "file",
        onChange: this.handleChange
      }));
    }
  }]);
  return _default;
}(_react.Component);

exports.default = _default;