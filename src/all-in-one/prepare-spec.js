function isObject(obj) {
  return obj && typeof(obj) === 'object';
}

/**
 * 对象预处理，为每一级对象添加$update函数和$path属性
 * @param {*} obj 待处理的对象
 * @param {*} path 当前对象的路径
 * @param {*} cb 回调函数
 */
export default function prepareSpec(obj, path, cb) {
  //包含以‘@’或‘$’起始的key不做处理
  if (!isObject(obj) || path.indexOf('.@') > -1 || path.indexOf('.$') > -1) {
    return obj;
  }

  if (obj.$update) {
    return obj;
  }

  Object.defineProperties(obj, {
    $update: {
      value: spec => cb(path, spec),
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

  Object.entries(obj).map(([k, v]) => prepareSpec(v, `${path}.${k}`, cb));
}