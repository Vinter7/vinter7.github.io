# 面向对象

[面向对象参考](https://zh.javascript.info/object-basics)

---

## 基础

- 对象里面存的是引用
- `o[k]` 计算属性
- `delete o.k`
- `'k' in o` 属性存在否
  - 不存在为`undefined`
  - 应用`null`表示空值和未知
  - `for(let key in o){}`
- 属性顺序:先整数用升序,其他按时间
- 克隆与合并
  - `Object.assign({},o1,o2...)`
  - `let clone = {...o1,...o2}`
  - 深度克隆可以用lodash库
- 箭头函数的`this`是函数外部的`this`
- 构造函数
  - 大写开头
  - 只用new执行 没参数可省略括号
  - `function User(name){this.name=name}`
  - `new` 使(构造)函数创建并返回 `this`
  - `return` 一般没有 带对象的话就返回该对象
- 可选链 `?.`
  - `a.b.c` 若b不存在就会报错
  - `a.b?.c` 若b不存在就返回`undefined`
  - 变体 `a.func?.()` `a?.[key]`
  - 只读不写








