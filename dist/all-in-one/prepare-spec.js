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
  //包含以‘@’或‘$’起始的key不做处理
  if (!isObject(obj) || path.indexOf('.@') > -1 || path.indexOf('.$') > -1) {
    return obj;
  }

  Object.defineProperties(obj, {
    $update: {
      value: function value(spec) {
        return cb(path, spec);
      },
      enumerable: false,
      configurable: false,
      writable: true
    },
    $path: {
      value: path,
      enumerable: false,
      configurable: false,
      writable: true
    }
  });
  Object.entries(obj).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return prepareSpec(v, "".concat(path, ".").concat(k), cb);
  });
}