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
  if (!isObject(obj)) {
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