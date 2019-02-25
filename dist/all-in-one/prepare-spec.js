"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prepareSpec;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function isObject(obj) {
  return obj && (0, _typeof2.default)(obj) === 'object';
}
/**
 * 对象预处理，为每一级对象添加$update函数和$path属性
 * @param {*} obj 待处理的对象
 * @param {*} path 当前对象的路径
 * @param {*} cb 回调函数
 */


function prepareSpec(obj, path, cb) {
  if (!isObject(obj)) {
    return obj;
  }

  if (obj.$update) {
    return obj;
  }

  Object.defineProperties(obj, {
    $update: {
      value: function value(spec) {
        return cb(path, spec);
      },
      enumerable: false,
      configurable: false,
      writable: false
    },
    $path: {
      value: path,
      enumerable: false,
      configurable: false,
      writable: false
    }
  });
  Object.entries(obj).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return prepareSpec(v, "".concat(path, ".").concat(k), cb);
  });
}