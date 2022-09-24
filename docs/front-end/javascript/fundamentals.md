#  基础语法

[JavaScript参考](https://zh.javascript.info/)

---

## 数据类型

- 种类
  - number bigint string boolean null undefined symbol object
  - `typeof x`
- 转换
  - 转字符串
    - `String(value)`
    - `num+''`
  - 转数字
    - `Number(str)`
    - `+str`
    - undefined	-> NaN
    - null -> 0
    - true/false -> 1/0
    - str -> number 0 NaN
  - 转布尔
    - `Boolean()`
    - `!!value`
    - 0/null/undefined/NaN/'' -> false
- 运算
  - `+ - * / % **`
  - `+= ++i i++ ,`
  - `boolean ? true() : false()`
  - `|| && ! ??`
    - `||` 运算到第一个真值返回
    - `&&` 运算到第一个假值返回
    - `??` 返回第一个已定义值
      - 类似`||`
      - 常用于设定默认值
- 比较
  - 0 == false √
  - null==undefined √ 他们只等于对方和自己
  - null >= 0 √
  - NaN 和谁都是 false


## 流程控制

- `if(){}else if{}else{}`
- `while(){}`
- `do{}while()`
- `for(;;){}`
- `break` `continue`
- `labelNAme:while(for(){break labelNAme})` 直接跳出嵌套循环到标签处

```js
switch (arg) {
  case '0':
  case '1':
    break;
  case '2':
    break;
  default:
    func()
}
```

- `function func(a=1){}` 最初时创建
- `let func = function(){}` 执行时创建
- `() =>{}`


## 调试和测试

1. `debugger`命令 类似断点 当然也可以手调
2. 使用 `Eslint` 规范代码风格
3. 那些[忍者代码](https://zh.javascript.info/ninja-code)
4. 使用 `Mocha` 进行自动化测试
   1. `describe('title', ()=>{})`
   2. `it('content',()=>{})`
   3. `assert.equal(func(...arg), result)`
      - (严格)(不)相等 检查NaN True false 等等
   4. `before/after(()=>{})`
   5. `beforeEach/afterEach(()=>{})`

```js
let pow = (x,y) => x**y

describe("pow", function() {

  it("2 ^ 3 is 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3 ^ 4 is 81", function() {
    assert.equal(pow(3, 4), 81);
  });

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} ^ 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});
```


