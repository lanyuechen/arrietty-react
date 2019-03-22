## json表单

- 将json数据映射为表单
- 通过“@{name}”的方式对表单进行描述，其中name为json中属性名称

```js
{
  "foo": "xxx",
  "@foo": {
    ...
  },
  "bar": {
    "foo": "xxx",
    "@foo": {
      ...
    }
  },
  ...
}
```

### 输入框

```js
{
  "foo": "文本|数字|密码",
  "@foo": {
    "type": "text(默认)|number|password"
  }
}
```

### 复选框|单选框|下拉框

```js
{
  "foo": "a",
  "@foo": {
    "type": "checkbox|radio|select",
    "data": [
      {"key": "a", "name": "A"},
      {"key": "b", "name": "B"},
      ...
    ]
  }
}
```

### 文件上传

```js
{
  "foo": {
    "_id": "资源id",
    "ext": "png",
    "pathname": "/upload",
    "host" : "localhost:3000",
    "protocol": "http"
  },
  "@foo": {
    "type": "file",
    "config": {
      "name": "bin(默认)",
      "url": "",
    }
  }
}
```