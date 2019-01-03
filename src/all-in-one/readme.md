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