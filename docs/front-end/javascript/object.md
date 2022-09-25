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
- `symbol`
  - `let id = Symbol('description')`
  - 转字符串 `id.toString()` `id.description`
  - 常用于对象隐藏属性
  - 全局 Symbol (相同名字相同实体)
    - `let id = Symbol.for('key')`
    - `Symbol.keyFor(id)` `=>'key'`
  - 系统 symbol
    - `Symbol.iterator`
    - `Symbol.toPrimitive`
    - ...
- 原始值转换
  - 在进行运算时转为数字
  - 在输出时时转为文字
  - `Symbol.toPrimitive` `obj.valueOf()` `obj.toString()`
  - 返回原始类型而非对象

## 数组


- `for(let i of arr){}` 避免用`for in`
- `arr.length=0` 清除数组
- 一些方法
  - `.at(pos)` 支持负数
  - `.pop() .push(data) .shift() .unshift(data)` 首尾增删
  - `.splice(start[,num,add1,add2...])` 支持负数
  - `.slice([start],[end])` 切片 返回新数组
  - `.concat([arr2,arg...])` 合并数组或值
  - `.forEach((item,index,array)=>{})` 每个元素运行一下函数
  - `.indexOf(item,pos) .lastIndexOf() .includes()` 检索
  - `.find((item,index,array)=>{}) .findIndex() .findLastIndex()` 返回true的第一个item/undefined  或 index/-1
  - `.filter((item,index,array)=>{})` 匹配所有true的元素
  - `.map((item,index,array)=>{})` 每个元素运行后返回结果数组
  - `.sort((a,b)=>a-b)` 元素默认当字符串来排序
    - `(a,b)=>a.localeCompare(b)` 比较文字
  - `.reverse()` 颠倒
  - `.split(delim[,n])` `.join(glue)` 转数组和转字符串
  - `.reduce((accumulator,item,index,array)=>{}[,initial])` `.reduceRight()` 根据数组计算单值
    - `let res = arr.reduce((sum,i)=>sum+i , 0)`
    - 初始值默认`arr[0]`
  - `Array.isArray(arr)` 是否数组
  - `.some(func)` `.every(func)` 有几个/每个都满足函数
  - `.fill(value,start,end)` 填充
  - `.copyWithin(target,start,end)` 复制自身部分到target
  - `.flat(depth)` `.flatMap(func)` 扁平化
  - `Array.of(7)` =>`[7]`
- `thisArg` 略


