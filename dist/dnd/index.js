"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dropTarget = _interopRequireDefault(require("./drop-target"));

var _dragSource = _interopRequireDefault(require("./drag-source"));

var _default = {
  DropTarget: _dropTarget.default,
  DragSource: _dragSource.default
};
exports.default = _default;