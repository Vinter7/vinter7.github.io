# Promise

[Promise参考](https://zh.javascript.info/async)

---

## 回调

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src
  script.onload = () => callback(null,script) //加载成功事件
  script.onerror = () => callback(new Error(`error for ${src}`))
  document.head.append(script)
}

loadScript('/my/script.js', function(error, script) {
  if (error) {
    // 处理 error
  } else {
    // 脚本加载成功
  }
});
```

## Promise

- `let promise = new Promise(function(resolve,reject){...})` 状态只改一次
  - `resolve(...)` state改为`fulfilled`
  - `reject(new Error(message))` state改为`rejected`
- `promise.then(result=>{...},error=>{...})`
- `.catch(f)` `.then(null,f)` 只关心错误
- `.finally(f)` ~~`.then(f,f)`~~ 不关心结果(常用于清理)
  - 无参数
  - 透明
  - 无返回
- if promise is pending,the handler will waiting for its result. if it is settled,the handler will run immediately

```js
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
  });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);
```

## Promise 链

```js
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  alert(result); // 1
  return result * 2
}).then(function(result) {
  alert(result); // 2
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result) {
  alert(result); // 4
});
```


```js
loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/two.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"))
  .then(script => {
    // 脚本加载完成，我们可以在这儿使用脚本中声明的函数
    one();
    two();
    three();
  });
```

**`.then(f)` 总是返回一个promise**

1. 初始时pending+undifined
2. return value => fulfilled+value
3. return promise => the promise
4. throw error => reject+error


