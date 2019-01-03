## all in one

解决问题
- 解决系统状态不统一的问题

规范
- 所有状态均通过spec指定
- 入口通过@Aio(spec)包装
- 任意一级spec均提供spec.$update(newSpec)方法，调用即会造成组件的重新渲染

使用方法
```js
import Aio from 'all-in-one';

@Aio(spec)
class Foo extends React.Component {
  ...
  func = () => {
    spec.$update({...});
    spec.foo.$update({...});
    spec.foo.bar.$update({...});
  };
}

```

### $update 参数规范

  * `{$push: array}` `push()` all the items in `array` on the target.
  * `{$unshift: array}` `unshift()` all the items in `array` on the target.
  * `{$splice: array of arrays}` for each item in `arrays` call `splice()` on
  the target with the parameters provided by the item. ***Note:** The items in
  the array are applied sequentially, so the order matters. The indices of the
  target may change during the operation.*
  * `{$set: any}` replace the target entirely.
  * `{$toggle: array of strings}` toggles a list of boolean fields from the
  target object.
  * `{$unset: array of strings}` remove the list of keys in `array` from the
  target object.
  * `{$merge: object}` merge the keys of `object` with the target.
  * `{$apply: function}` passes in the current value to the function and
  updates it with the new returned value.
  * `{$add: array of objects}` add a value to a `Map` or `Set`. When adding to a
  `Set` you pass in an array of objects to add, when adding to a Map, you pass
  in `[key, value]` arrays like so:
  `update(myMap, {$add: [['foo', 'bar'], ['baz', 'boo']]})`
  * `{$remove: array of strings}` remove the list of keys in array from a `Map`
  or `Set`.

> 具体参照 [immutability-helper](https://github.com/kolodny/immutability-helper)