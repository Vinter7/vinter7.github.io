# Others

[参考](https://zh.javascript.info/)

---

## Generator

- generator 可以按需一个接一个地返回（“yield”）多个值,可与 iterable 配合使用，从而创建数据流
  - `function* gen(){yield 1;yield 2;return 3}`
  - 调用时返回一个`Generator` 对象
  - 调用`.next()`方法时运行到下一个`yield`并返回结果`{value,done:false}`
  - 当运行到`return`时 `{value,done:true}`
- 可迭代(for...of)
  - `for(let value of gen())){...}` (不包含return值)
  - `let arr = [...gen()]` (1,2)
  - `*[Symbol.iterator](){for(let i = this.from; value <= this.to; value++)yeild i}` 创建可迭代对象
- 组合 `yield*`
- 输入值 `gen().next(arg)` 
  - 下一次`next(arg)`时 arg作为yeild的结果
  - 实现交互效果
  - 输入错误 `.throw(new Error(message))`
- `.return(arg)` 直接完成并返回arg

```js
//组合
function* genRange(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* gen() {
  yield* genRange(48, 57);// 0..9
  yield* genRange(65, 90);// A..Z
  yield* genRange(97, 122);// a..z
}

let str = '';
for(let code of gen()) {
  str += String.fromCharCode(code);
}
alert(str); // 0..9A..Za..z
```

```js
//输入
function* gen() {
  let ask1 = yield "2 + 2 = ?";
  alert(ask1); // 4
  let ask2 = yield "3 * 3 = ?"
  alert(ask2); // 9
}

let generator = gen();
alert( generator.next().value ); // "2 + 2 = ?"
alert( generator.next(4).value ); // "3 * 3 = ?"
alert( generator.next(9).done ); // true
```

```js
//抛出错误
function* gen() {
  try {
    let result = yield "2 + 2 = ?"
  } catch(e) {
    alert(e); // 显示这个 error
  }
}

gen().next().value
gen().throw(new Error("error"))
```




## module

