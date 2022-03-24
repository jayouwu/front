# Zlink react 公共组件及工具:

###### 项目引用 如：
```
import { Loading, auth }  from "zlink-front"; 
```

###### 导入新的组件或新的工具 需要执行
```
npm run compile
```


## desc

# 项目目录

```
├── components                 # 公共组件
├── lib                        # babel转译后的库
├── utils                      # 公共库
├── index                      # 入口
```

###### 公共组件
|  名称   | 用途  |
|  ----  | ----  |
| Loading  | 基于React、Ant Design 全局loading |
| ProTableCustom  | 基于React、Ant Design Pro Components二次封装表格 |


###### 公共工具库
|  名称   | 用途  |
|  ----  | ----  |
| auth  | web缓存 |
| position  | 中国区域 |
| file  | 文件转换、存储 |
| utils  | 工具 |
| rules  | 表单校验 |
| layout  | 基于React、Ant Design配置参数 |
| enums  | 枚举 |