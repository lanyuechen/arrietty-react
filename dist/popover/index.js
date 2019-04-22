"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _popover = _interopRequireDefault(require("./popover"));

function _default(config) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    if (_reactDom.default.unmountComponentAtNode(div) && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    if (config.onCancel) {
      config.onCancel.apply(config, arguments);
    }
  }

  var content = (0, _objectSpread2.default)({}, config.content, {
    props: (0, _objectSpread2.default)({}, config.content.props, {
      onBlur: close
    })
  });

  _reactDom.default.render(_react.default.createElement(_popover.default, {
    x: config.x,
    y: config.y
  }, content), div);

  return {
    destroy: close
  };
}