"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _prepareSpec = _interopRequireDefault(require("./prepare-spec"));

var _default = function _default(spec) {
  return function (C) {
    return (
      /*#__PURE__*/
      function (_Component) {
        (0, _inherits2.default)(_class2, _Component);

        function _class2(props) {
          var _this;

          (0, _classCallCheck2.default)(this, _class2);
          _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class2).call(this, props));
          (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleUpdate", function (path, spec) {
            spec = path.split('.').reverse().reduce(function (p, n) {
              return (0, _defineProperty2.default)({}, n, p);
            }, spec);
            var state = (0, _immutabilityHelper.default)(_this.state, spec);
            (0, _prepareSpec.default)(state.spec, 'spec', _this.handleUpdate);

            _this.setState(state);
          });
          (0, _prepareSpec.default)(spec, 'spec', _this.handleUpdate);
          _this.state = {
            spec: spec
          };
          return _this;
        }

        (0, _createClass2.default)(_class2, [{
          key: "render",
          value: function render() {
            console.log('[render]', this.state.spec);
            return _react.default.createElement(C, (0, _extends2.default)({}, this.props, {
              spec: this.state.spec
            }));
          }
        }]);
        return _class2;
      }(_react.Component)
    );
  };
};

exports.default = _default;