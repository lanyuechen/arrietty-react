"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

function _default(type, data) {
  return function (widget) {
    function handleDragStart(e) {
      e.dataTransfer.setData('text', JSON.stringify({
        type: type,
        data: data
      }));
    }

    function handleDrag(e) {}

    function handleDragEnd(e) {}

    return (0, _objectSpread2.default)({}, widget, {
      props: (0, _objectSpread2.default)({}, widget.props, {
        draggable: true,
        onDragStart: handleDragStart //onDrag: handleDrag,
        //ondragend: handleDragEnd

      })
    });
  };
}