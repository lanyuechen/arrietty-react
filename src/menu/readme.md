## Menu组件

- 多级菜单展示
- 类似文件管理器
- 支持文件夹折叠展开

| 属性 | 类型 | 描述 | 默认值 | 是否必须 |
|----|----|----|----|----|
| data | array(tree) | 菜单数据 | - | 是 |
| onClick | function(e, d) | 菜单项点击事件 | - | 否 |
| onContextMenu | function(e, d) | 菜单项快捷菜单事件 | - | 否 |

### data结构

```js
[
  {
    "name": "文件夹1",     //文件/文件夹名称
    "isFile": false,      //是否为文件，true：文件；false：文件夹
    "path": "/foo",       //文件/文件夹路径
    "render": function(d) {   //菜单项渲染方式，为空时渲染为{d.name},否则渲染为该函数返回值
      return (
        <Item />
      );
    },
    "children": [         //当isFile==false时，children数组表示子文件/文件夹
      //...
    ]
  },
  //...
]
```