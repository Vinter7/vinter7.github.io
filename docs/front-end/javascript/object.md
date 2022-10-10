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
  - 系统 symbol 微调对象
    - `Symbol.iterator`
    - `Symbol.toPrimitive`
    - ...
- 原始值转换
  - 在进行运算时转为数字
  - 在输出时时转为文字
  - `Symbol.toPrimitive` `obj.valueOf()` `obj.toString()`
  - 返回原始类型而非对象
- 迭代
  - `Object.keys(obj)` 返回所有键的数组
  - `Object.values(obj)` 返回所有值的数组
  - `Object.entries(obj)` 返回所有`[键,值]`的数组
  - `Object.fromEntries(Object.entries(prices).map())` 迭代操作

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
  - `Array.from(obj)` 类数组和可迭代转数组 `[...obj]`
- `thisArg` 略

## 可迭代对象

- `Symbol.iterator` 方法 返回一个有`next()`方法的对象(迭代器)
- `next()`返回`{done, value}` done=true时结束

```js
//方法1
let range = {
  from: 1,
  to: 5
};

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};
//方法2
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from; //初始
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}
```

- 可迭代 支持`for of`
- 类数组 有数字索引和`length`
- 字符串可迭代也是类数组
- `Array.from(obj[,mapfunc,thisArg])` 将可迭代或类数组转成数组


## Map & WeakMap

- Map的键支持任何类型
- 支持 `for of` 按插入顺序
- 方法
  - `new Map()` 创建 map。
  - `.set(key, value)` 根据键存值。
  - `.get(key)` 根据键返回值
  - `.has(key)` key是否存在
  - `.delete(key)` 删除
  - `.clear()` 清空
  - `.size` 返回元素个数
  - `.keys()` `.values()` `.entries()` 返回键\值\全的可迭代对象
  - `.forEach((value, key, map) => {})`
- Map和对象互转
  - 数组 `new Map([[k1,v1],[k2,v2]])`
  - 对象 `new Map(Object.entries(obj))`
  - 数组 `Object.fromEntries([[],[]])`
  - Map `Object.fromEntries(map)`


<br>

- `WeakMap` 的键为对象
- `.get(key)` `.set(key,value)` `.delete(key)` `.has(key)`
- 主要用于额外数据的存储,类似缓存
- 当对象不可达时,键值就被清除


## Set & WeakSet


- 不重复
- 支持 `for of` 按插入顺序
- 方法
  - `new Set(iterable)` 用可迭代对象创建
  - `.add(value)` 添加值，返回 set
  - `.delete(value)` 删除值，存在 true 否则 false
  - `.has(value)` 是否存在
  - `.clear()` 清空
  - `.size` 返回个数
  - `.forEach((value, valueAgain, set) => {}` 为了与 Map 兼容
  - `.keys()` `.values()` `.entries()` 返回值\值\全的可迭代对象

<br>

- `WeakSet` 只能添加对象
- add has delete
- 不可迭代
- 对象不可达时,值就被清除

## 解构赋值

**数组解构**

- `let [a,b]="a b".split(' ')`
- `let [a,,c]="abc"`
- `for(let [k,v] of Object.entries(obj)/Map){}`
- `[a,b]=[b,a]`
- `[a,b,...c]='abcdefg'`
- `[a='a',b='b']=['c']`


**对象解构**

- `let {a,b}={a:1,b:2,c:3}`
- `let {width:w=100}={}` key:改名=默认值
- 支持`...`剩余模式
- 没有let时 `({}={})`

**嵌套解构**

```javascript
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// 为了清晰起见，解构赋值语句被写成多行的形式
let {
  size: { // 把 size 赋值到这里
    width,
    height
  },
  items: [item1, item2], // 把 items 赋值到这里
  title = "Menu" // 在对象中不存在（使用默认值）
} = options;
```

**智能函数参数**


```js
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({title = "Untitled", pay = 100, items = []}={}){}

showMenu(options);
showMenu({}); //全部取默认值 
showMenu(); //加了={}就能这样了
```

## 日期和时间

- 创建
  - `new Date()` 当前时间
  - `new Date(ms)` 通过时间戳创建 可负
  - `new Date('2022-08-08')` *同下文`Date.parse()`
  - `new Date(y,m,d,h,m,s,ms)`
    - y四位 两位为19xx
    - m 0~11
    - d 默认1
    - h m s ms 默认0
- 查方法
  - `.getFullYear()`
  - `.getMonth()` 0-11
  - `.getDate()`
  - `.getHours()`
  - `.getMinutes()`
  - `.getSeconds()`
  - `.getMilliseconds()`
  - `.getDay()` 0-6
  - `.getTime()` 时间戳
  - `getTimezoneOffset()` 时差
- 设置方法
  - `.setFullYear(year, [month], [date])`
  - `.setMonth(month, [date])`
  - `.setDate(date)`
  - `.setHours(hour, [min], [sec], [ms])`
  - `.setMinutes(min, [sec], [ms])`
  - `.setSeconds(sec, [ms])`
  - `.setMilliseconds(ms)`
  - `.setTime(milliseconds)`
- 使用查写组合可以任意加减
- 运算转数字为时间戳
- 类方法
  - `Date.now()` 返回当前时间戳
  - `Date.parse(str)` 返回时间戳
    - YYYY-MM-DDTHH:mm:ss.sssZ
    - '2012-01-26T13:51:50.417-07:00'


## Json

- `JSON.stringify(value[, replacer, space])` 转json
  - 忽略 方法 Symbol undefined
  - `replacer` 要转换的名单,可为函数
  - `space` 美化
  - 可以用`toJSON(){}` 自定义
- `JSON.parse(str[, reviver])`转对象
  - 可以转数组
  - `reviver` (key,value)=>{} 进行一些额外操作

## 深入对象

### 属性

**属性标志**

- 属性标志 默认true
  - `writable` 可读写 false只读
  - `enumerable` 可枚举
  - `configurable` 可更改和删除属性标志
- 属性标识相关方法 默认false
  - `Object.getOwnPropertyDescriptor(obj, propertyName)` 查
  - `Object.getOwnPropertyDescriptors(obj)` 查全部属性描述符
  - `Object.defineProperty(obj, propertyName, descriptor)` 改
  - `Object.defineProperties(obj, descriptors)` 设置多个属性
  - 克隆对象`let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj))`
- 全局限制访问的方法 略


**访问器属性**(与数据属性相对)

```js
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
alert(user.fullName);
user.fullName = "Alice Cooper";
alert(user.name); // Alice
alert(user.surname); // Cooper
```

得到一个可读可写的虚拟属性,可以用`_prop`来存储(内部属性),有时可以用来为已废弃的属性提供兼容性(通过新属性计算产生)

- 访问器属性描述符
  - `get` 函数
  - `set` 函数
  - `enumerable` 可枚举
  - `configurable` 可配置

### 原型和继承

在 JavaScript 中，对象有一个特殊的隐藏属性 `[[Prototype]]`（如规范中所命名的），它要么为 null，要么就是对另一个对象的引用。该对象被称为“原型”, 当读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。这被称为“原型继承”,但写入时不使用原型(访问器属性除外)。设置时使用特殊的名字 `__proto__`, `__proto__` 的值可以是对象，也可以是 null。而其他的类型都会被忽略。只能有一个 `[[Prototype]]`。一个对象不能从其他两个对象获得继承。`__proto__` 是 `[[Prototype]]` 的 getter/setter。`__proto__` 属性已有些过时, 可以使用`Object.getPrototypeOf/Object.setPrototypeOf` 来取代 `__proto__` 去 get/set 原型

```js
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith

admin.fullName = "Alice Cooper"; 
// 这时方法中的this为admin,因此name和surname都存在admin对象中
alert(admin.fullName); // Alice Cooper，admin 的内容被修改了
alert(user.fullName);  // John Smith，user没有变化
//因此我们可以说方法是共享的 但对象状态不是
```

**遍历**

- `Object.keys(son)` 只有son的属性
- `for(let prop in son){}` 先son后parent
- `son.hasOwnProperty(key)` key是否为son自己的属性
- 其实用`{...}`定义的对象 默认继承自`Object.prototype` 其`[[Prototype]]` 为null,在这里面有许多方法,它们都是不可枚举的
- 除了for...in的方法 几乎所有其他键/值获取方法都忽略继承的属性


**F.prototype**

- 用构造函数创建new 对象的`[[Prototype]]`来自`Func.prototype`
- F.prototype 指的是 F 的一个名为 "prototype" 的常规属性

```js
let animal = {
  eats: true
}
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
alert( rabbit.eats ); // true
```
 
- 实际上每个函数都有`prototype`属性
- 默认为`{constrauctor: Func}`
- 属性 constructor 指向函数自身
- 最好通过添加的方式往`prototype`里面加属性 而不是覆盖
- new对象其实就类同继承了函数的`prototype`属性对应的`{...}`(也可以是null)


**原生原型**

::: tip Object.prototype
`{}`等同于`new Object()`<br>`Object()`是一个构造函数<br>其`prototype`属性是一个巨大的对象<br>因此可以理解`{}`就继承了`Object.prototype`这个大对象<br>也就是说`{...}`默认的`[[Prototype]]`为`Object.prototype`<br>而`Object.prototype`的`[[Prototype]]`为null
:::

所有的内建原型顶端都是 Object.prototype, 其他内建对象(构造函数)，像 Array、Date、Function 及其他，都在 prototype 上挂载了方法。原生原型可以修改但不要去做除非polyfilling

- [].__proto__ === Array.prototype
- [].__proto__.__proto__ === Object.prototype
- [].__proto__.__proto__.__proto__ === null


**原型方法**

- `Object.getPrototypeOf(obj)` 读
- `Object.setPrototypeOf(obj, proto)` 写
- `Object.create(proto, [descriptors])` 生(可加属性标志)
  - `let clone = Object.create(Object.getPrototypeOf(obj),Object.getOwnPropertyDescriptors(obj))` 克隆
  - `let obj = Object.create(null);` 真空对象用于纯粹的存储键/值对(无原型)

### 类

pass
