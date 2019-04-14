"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

function _default() {
  var accepts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (widget) {
    function getData(e) {
      return JSON.parse(e.dataTransfer.getData("text"));
    }

    function handleDragEnter(e) {
      e.stopPropagation();
      e.preventDefault();
      props.onDragEnter && props.onDragEnter(e);
    }

    function handleDragLeave(e) {
      e.preventDefault();
      props.onDragLeave && props.onDragLeave(e);
    }

    function handleDragOver(e) {
      e.preventDefault();
      props.onDragOver && props.onDragOver(e);
    }

    function handleDrop(e) {
      e.preventDefault();
      var data = getData(e);

      if (accepts.indexOf(data.type) === -1) {
        return;
      }

      props.onDrop && props.onDrop(data, e);
    }

    return (0, _objectSpread2.default)({}, widget, {
      props: (0, _objectSpread2.default)({}, widget.props, {
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDragOver: handleDragOver,
        onDrop: handleDrop
      })
    });
  };
}