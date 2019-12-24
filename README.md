# vue-h5-awsome

## 相关技术

|     | 技术         | 类型          | 参考文档                                           时间 |
| --- | ------------ | ------------- | ------------------------------------------------------- |
| 1   | vue          | mvvm 框架     | https://cn.vuejs.org/index.html                         |
| 2   | vue-cli4     | 脚手架        | https://github.com/vuejs/vue-cli/tree/v3#vue-cli--      |
| 3   | vue-devtools | 调试工具      | https://github.com/vuejs/vue-devtools                   |
| 4   | vue-router   | 路由          | https://router.vuejs.org/zh/                            |
| 5   | vuex         | 状态管理      | https://vuex.vuejs.org/zh/                              |
| 6   | sass         | CSS 预编译    | https://www.sasscss.com/getting-started/                |
| 7   | vant         | 组件库        | https://youzan.github.io/vant/#/zh-CN/intro             |
| 8   | axios        | 获取 API 数据 | https://github.com/axios/axios                          |
| 9   | eslint       | 静态检查      | https://eslint.org/                                     |
| 9   | pug          | 模版          | 自行研究                                                |
| 9   | rem&pxToRem  | 屏幕适配      | https://github.com/suoyuesmile/suo-blog/blob/master/articals/h5/0002.md                                                |
| 9   | jest         | 自动化测试    | 自行研究                                                |

## 模版默认功能配置

根据不同分支进行不同配置

### master：所有分支的配置集合
- adapt 动态更改 `html` 根字体大小
- pxToRem 插件
- sass
- vue-router
- vuex
- eslint
- pug
- jest
- vant

### base: 基本 H5 响应式布局配置（rem）
- adapt 动态更改 `html` 根字体大小
- pxToRem 插件
- sass
- vue-router
- vuex
- eslint

### feat-pug：在基础的功能上增加 pug 模版引擎

### feat-jest：在基础的功能上增加 jest 单元测试，并增加 demo

### feat-vant：在基础上增加 vant 组件库，并增加 demo




## 项目启动
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Run your tests
```
yarn test
```

### Lints and fixes files
```
yarn lint
```



