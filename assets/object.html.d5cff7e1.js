import{_ as e,r as o,o as l,c as t,a as n,b as i,d as s,e as c}from"./app.d5c6f758.js";const p={},d=n("h1",{id:"\u4F7F\u7528\u5BF9\u8C61",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u5BF9\u8C61","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u5BF9\u8C61")],-1),r={href:"https://zh.javascript.info/object-basics",target:"_blank",rel:"noopener noreferrer"},u=s("\u5BF9\u8C61\u53C2\u8003"),k=c(`<hr><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><ul><li>\u5BF9\u8C61\u91CC\u9762\u5B58\u7684\u662F\u5F15\u7528</li><li><code>o[k]</code> \u8BA1\u7B97\u5C5E\u6027</li><li><code>delete o.k</code></li><li><code>&#39;k&#39; in o</code> \u5C5E\u6027\u5B58\u5728\u5426 <ul><li>\u4E0D\u5B58\u5728\u4E3A<code>undefined</code></li><li>\u5E94\u7528<code>null</code>\u8868\u793A\u7A7A\u503C\u548C\u672A\u77E5</li><li><code>for(let key in o){}</code></li></ul></li><li>\u5C5E\u6027\u987A\u5E8F:\u5148\u6574\u6570\u7528\u5347\u5E8F,\u5176\u4ED6\u6309\u65F6\u95F4</li><li>\u514B\u9686\u4E0E\u5408\u5E76 <ul><li><code>Object.assign({},o1,o2...)</code></li><li><code>let clone = {...o1,...o2}</code></li><li>\u6DF1\u5EA6\u514B\u9686\u53EF\u4EE5\u7528lodash\u5E93</li></ul></li><li>\u7BAD\u5934\u51FD\u6570\u7684<code>this</code>\u662F\u51FD\u6570\u5916\u90E8\u7684<code>this</code></li><li>\u6784\u9020\u51FD\u6570 <ul><li>\u5927\u5199\u5F00\u5934</li><li>\u53EA\u7528new\u6267\u884C \u6CA1\u53C2\u6570\u53EF\u7701\u7565\u62EC\u53F7</li><li><code>function User(name){this.name=name}</code></li><li><code>new</code> \u4F7F(\u6784\u9020)\u51FD\u6570\u521B\u5EFA\u5E76\u8FD4\u56DE <code>this</code></li><li><code>return</code> \u4E00\u822C\u6CA1\u6709 \u5E26\u5BF9\u8C61\u7684\u8BDD\u5C31\u8FD4\u56DE\u8BE5\u5BF9\u8C61</li></ul></li><li>\u53EF\u9009\u94FE <code>?.</code><ul><li><code>a.b.c</code> \u82E5b\u4E0D\u5B58\u5728\u5C31\u4F1A\u62A5\u9519</li><li><code>a.b?.c</code> \u82E5b\u4E0D\u5B58\u5728\u5C31\u8FD4\u56DE<code>undefined</code></li><li>\u53D8\u4F53 <code>a.func?.()</code> <code>a?.[key]</code></li><li>\u53EA\u8BFB\u4E0D\u5199</li></ul></li><li><code>symbol</code><ul><li><code>let id = Symbol(&#39;description&#39;)</code></li><li>\u8F6C\u5B57\u7B26\u4E32 <code>id.toString()</code> <code>id.description</code></li><li>\u5E38\u7528\u4E8E\u5BF9\u8C61\u9690\u85CF\u5C5E\u6027</li><li>\u5168\u5C40 Symbol (\u76F8\u540C\u540D\u5B57\u76F8\u540C\u5B9E\u4F53) <ul><li><code>let id = Symbol.for(&#39;key&#39;)</code></li><li><code>Symbol.keyFor(id)</code> <code>=&gt;&#39;key&#39;</code></li></ul></li><li>\u7CFB\u7EDF symbol \u5FAE\u8C03\u5BF9\u8C61 <ul><li><code>Symbol.iterator</code></li><li><code>Symbol.toPrimitive</code></li><li>...</li></ul></li></ul></li><li>\u539F\u59CB\u503C\u8F6C\u6362 <ul><li>\u5728\u8FDB\u884C\u8FD0\u7B97\u65F6\u8F6C\u4E3A\u6570\u5B57</li><li>\u5728\u8F93\u51FA\u65F6\u65F6\u8F6C\u4E3A\u6587\u5B57</li><li><code>Symbol.toPrimitive</code> <code>obj.valueOf()</code> <code>obj.toString()</code></li><li>\u8FD4\u56DE\u539F\u59CB\u7C7B\u578B\u800C\u975E\u5BF9\u8C61</li></ul></li><li>\u8FED\u4EE3 <ul><li><code>Object.keys(obj)</code> \u8FD4\u56DE\u6240\u6709\u952E\u7684\u6570\u7EC4</li><li><code>Object.values(obj)</code> \u8FD4\u56DE\u6240\u6709\u503C\u7684\u6570\u7EC4</li><li><code>Object.entries(obj)</code> \u8FD4\u56DE\u6240\u6709<code>[\u952E,\u503C]</code>\u7684\u6570\u7EC4</li><li><code>Object.fromEntries(Object.entries(prices).map())</code> \u8FED\u4EE3\u64CD\u4F5C</li></ul></li></ul><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><ul><li><code>for(let i of arr){}</code> \u907F\u514D\u7528<code>for in</code></li><li><code>arr.length=0</code> \u6E05\u9664\u6570\u7EC4</li><li>\u4E00\u4E9B\u65B9\u6CD5 <ul><li><code>.at(pos)</code> \u652F\u6301\u8D1F\u6570</li><li><code>.pop() .push(data) .shift() .unshift(data)</code> \u9996\u5C3E\u589E\u5220</li><li><code>.splice(start[,num,add1,add2...])</code> \u652F\u6301\u8D1F\u6570</li><li><code>.slice([start],[end])</code> \u5207\u7247 \u8FD4\u56DE\u65B0\u6570\u7EC4</li><li><code>.concat([arr2,arg...])</code> \u5408\u5E76\u6570\u7EC4\u6216\u503C</li><li><code>.forEach((item,index,array)=&gt;{})</code> \u6BCF\u4E2A\u5143\u7D20\u8FD0\u884C\u4E00\u4E0B\u51FD\u6570</li><li><code>.indexOf(item,pos) .lastIndexOf() .includes()</code> \u68C0\u7D22</li><li><code>.find((item,index,array)=&gt;{}) .findIndex() .findLastIndex()</code> \u8FD4\u56DEtrue\u7684\u7B2C\u4E00\u4E2Aitem/undefined \u6216 index/-1</li><li><code>.filter((item,index,array)=&gt;{})</code> \u5339\u914D\u6240\u6709true\u7684\u5143\u7D20</li><li><code>.map((item,index,array)=&gt;{})</code> \u6BCF\u4E2A\u5143\u7D20\u8FD0\u884C\u540E\u8FD4\u56DE\u7ED3\u679C\u6570\u7EC4</li><li><code>.sort((a,b)=&gt;a-b)</code> \u5143\u7D20\u9ED8\u8BA4\u5F53\u5B57\u7B26\u4E32\u6765\u6392\u5E8F <ul><li><code>(a,b)=&gt;a.localeCompare(b)</code> \u6BD4\u8F83\u6587\u5B57</li></ul></li><li><code>.reverse()</code> \u98A0\u5012</li><li><code>.split(delim[,n])</code> <code>.join(glue)</code> \u8F6C\u6570\u7EC4\u548C\u8F6C\u5B57\u7B26\u4E32</li><li><code>.reduce((accumulator,item,index,array)=&gt;{}[,initial])</code> <code>.reduceRight()</code> \u6839\u636E\u6570\u7EC4\u8BA1\u7B97\u5355\u503C <ul><li><code>let res = arr.reduce((sum,i)=&gt;sum+i , 0)</code></li><li>\u521D\u59CB\u503C\u9ED8\u8BA4<code>arr[0]</code></li></ul></li><li><code>Array.isArray(arr)</code> \u662F\u5426\u6570\u7EC4</li><li><code>.some(func)</code> <code>.every(func)</code> \u6709\u51E0\u4E2A/\u6BCF\u4E2A\u90FD\u6EE1\u8DB3\u51FD\u6570</li><li><code>.fill(value,start,end)</code> \u586B\u5145</li><li><code>.copyWithin(target,start,end)</code> \u590D\u5236\u81EA\u8EAB\u90E8\u5206\u5230target</li><li><code>.flat(depth)</code> <code>.flatMap(func)</code> \u6241\u5E73\u5316</li><li><code>Array.of(7)</code> =&gt;<code>[7]</code></li><li><code>Array.from(obj)</code> \u7C7B\u6570\u7EC4\u548C\u53EF\u8FED\u4EE3\u8F6C\u6570\u7EC4 <code>[...obj]</code></li></ul></li><li><code>thisArg</code> \u7565</li></ul><h2 id="\u53EF\u8FED\u4EE3\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u53EF\u8FED\u4EE3\u5BF9\u8C61" aria-hidden="true">#</a> \u53EF\u8FED\u4EE3\u5BF9\u8C61</h2><ul><li><code>Symbol.iterator</code> \u65B9\u6CD5 \u8FD4\u56DE\u4E00\u4E2A\u6709<code>next()</code>\u65B9\u6CD5\u7684\u5BF9\u8C61(\u8FED\u4EE3\u5668)</li><li><code>next()</code>\u8FD4\u56DE<code>{done, value}</code> done=true\u65F6\u7ED3\u675F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u65B9\u6CD51</span>
<span class="token keyword">let</span> range <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

range<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>from<span class="token punctuation">,</span>
    <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>to<span class="token punctuation">,</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 4. \u5B83\u5C06\u4F1A\u8FD4\u56DE {done:.., value :...} \u683C\u5F0F\u7684\u5BF9\u8C61</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>last<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>current<span class="token operator">++</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//\u65B9\u6CD52</span>
<span class="token keyword">let</span> range <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>

  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>from<span class="token punctuation">;</span> <span class="token comment">//\u521D\u59CB</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>to<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>current<span class="token operator">++</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> range<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1, \u7136\u540E\u662F 2, 3, 4, 5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53EF\u8FED\u4EE3 \u652F\u6301<code>for of</code></li><li>\u7C7B\u6570\u7EC4 \u6709\u6570\u5B57\u7D22\u5F15\u548C<code>length</code></li><li>\u5B57\u7B26\u4E32\u53EF\u8FED\u4EE3\u4E5F\u662F\u7C7B\u6570\u7EC4</li><li><code>Array.from(obj[,mapfunc,thisArg])</code> \u5C06\u53EF\u8FED\u4EE3\u6216\u7C7B\u6570\u7EC4\u8F6C\u6210\u6570\u7EC4</li></ul><h2 id="map-weakmap" tabindex="-1"><a class="header-anchor" href="#map-weakmap" aria-hidden="true">#</a> Map &amp; WeakMap</h2><ul><li>Map\u7684\u952E\u652F\u6301\u4EFB\u4F55\u7C7B\u578B</li><li>\u652F\u6301 <code>for of</code> \u6309\u63D2\u5165\u987A\u5E8F</li><li>\u65B9\u6CD5 <ul><li><code>new Map()</code> \u521B\u5EFA map\u3002</li><li><code>.set(key, value)</code> \u6839\u636E\u952E\u5B58\u503C\u3002</li><li><code>.get(key)</code> \u6839\u636E\u952E\u8FD4\u56DE\u503C</li><li><code>.has(key)</code> key\u662F\u5426\u5B58\u5728</li><li><code>.delete(key)</code> \u5220\u9664</li><li><code>.clear()</code> \u6E05\u7A7A</li><li><code>.size</code> \u8FD4\u56DE\u5143\u7D20\u4E2A\u6570</li><li><code>.keys()</code> <code>.values()</code> <code>.entries()</code> \u8FD4\u56DE\u952E\\\u503C\\\u5168\u7684\u53EF\u8FED\u4EE3\u5BF9\u8C61</li><li><code>.forEach((value, key, map) =&gt; {})</code></li></ul></li><li>Map\u548C\u5BF9\u8C61\u4E92\u8F6C <ul><li>\u6570\u7EC4 <code>new Map([[k1,v1],[k2,v2]])</code></li><li>\u5BF9\u8C61 <code>new Map(Object.entries(obj))</code></li><li>\u6570\u7EC4 <code>Object.fromEntries([[],[]])</code></li><li>Map <code>Object.fromEntries(map)</code></li></ul></li></ul><br><ul><li><code>WeakMap</code> \u7684\u952E\u4E3A\u5BF9\u8C61</li><li><code>.get(key)</code> <code>.set(key,value)</code> <code>.delete(key)</code> <code>.has(key)</code></li><li>\u4E3B\u8981\u7528\u4E8E\u989D\u5916\u6570\u636E\u7684\u5B58\u50A8,\u7C7B\u4F3C\u7F13\u5B58</li><li>\u5F53\u5BF9\u8C61\u4E0D\u53EF\u8FBE\u65F6,\u952E\u503C\u5C31\u88AB\u6E05\u9664</li></ul><h2 id="set-weakset" tabindex="-1"><a class="header-anchor" href="#set-weakset" aria-hidden="true">#</a> Set &amp; WeakSet</h2><ul><li>\u4E0D\u91CD\u590D</li><li>\u652F\u6301 <code>for of</code> \u6309\u63D2\u5165\u987A\u5E8F</li><li>\u65B9\u6CD5 <ul><li><code>new Set(iterable)</code> \u7528\u53EF\u8FED\u4EE3\u5BF9\u8C61\u521B\u5EFA</li><li><code>.add(value)</code> \u6DFB\u52A0\u503C\uFF0C\u8FD4\u56DE set</li><li><code>.delete(value)</code> \u5220\u9664\u503C\uFF0C\u5B58\u5728 true \u5426\u5219 false</li><li><code>.has(value)</code> \u662F\u5426\u5B58\u5728</li><li><code>.clear()</code> \u6E05\u7A7A</li><li><code>.size</code> \u8FD4\u56DE\u4E2A\u6570</li><li><code>.forEach((value, valueAgain, set) =&gt; {}</code> \u4E3A\u4E86\u4E0E Map \u517C\u5BB9</li><li><code>.keys()</code> <code>.values()</code> <code>.entries()</code> \u8FD4\u56DE\u503C\\\u503C\\\u5168\u7684\u53EF\u8FED\u4EE3\u5BF9\u8C61</li></ul></li></ul><br><ul><li><code>WeakSet</code> \u53EA\u80FD\u6DFB\u52A0\u5BF9\u8C61</li><li>add has delete</li><li>\u4E0D\u53EF\u8FED\u4EE3</li><li>\u5BF9\u8C61\u4E0D\u53EF\u8FBE\u65F6,\u503C\u5C31\u88AB\u6E05\u9664</li></ul><h2 id="\u89E3\u6784\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6784\u8D4B\u503C" aria-hidden="true">#</a> \u89E3\u6784\u8D4B\u503C</h2><p><strong>\u6570\u7EC4\u89E3\u6784</strong></p><ul><li><code>let [a,b]=&quot;a b&quot;.split(&#39; &#39;)</code></li><li><code>let [a,,c]=&quot;abc&quot;</code></li><li><code>for(let [k,v] of Object.entries(obj)/Map){}</code></li><li><code>[a,b]=[b,a]</code></li><li><code>[a,b,...c]=&#39;abcdefg&#39;</code></li><li><code>[a=&#39;a&#39;,b=&#39;b&#39;]=[&#39;c&#39;]</code></li></ul><p><strong>\u5BF9\u8C61\u89E3\u6784</strong></p><ul><li><code>let {a,b}={a:1,b:2,c:3}</code></li><li><code>let {width:w=100}={}</code> key:\u6539\u540D=\u9ED8\u8BA4\u503C</li><li>\u652F\u6301<code>...</code>\u5269\u4F59\u6A21\u5F0F</li><li>\u6CA1\u6709let\u65F6 <code>({}={})</code></li></ul><p><strong>\u5D4C\u5957\u89E3\u6784</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">200</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Cake&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Donut&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">extra</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E3A\u4E86\u6E05\u6670\u8D77\u89C1\uFF0C\u89E3\u6784\u8D4B\u503C\u8BED\u53E5\u88AB\u5199\u6210\u591A\u884C\u7684\u5F62\u5F0F</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u628A size \u8D4B\u503C\u5230\u8FD9\u91CC</span>
    width<span class="token punctuation">,</span>
    height
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>item1<span class="token punctuation">,</span> item2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u628A items \u8D4B\u503C\u5230\u8FD9\u91CC</span>
  title <span class="token operator">=</span> <span class="token string">&quot;Menu&quot;</span> <span class="token comment">// \u5728\u5BF9\u8C61\u4E2D\u4E0D\u5B58\u5728\uFF08\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF09</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u667A\u80FD\u51FD\u6570\u53C2\u6570</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;My menu&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Item1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Item2&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">showMenu</span><span class="token punctuation">(</span><span class="token punctuation">{</span>title <span class="token operator">=</span> <span class="token string">&quot;Untitled&quot;</span><span class="token punctuation">,</span> pay <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token function">showMenu</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">showMenu</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5168\u90E8\u53D6\u9ED8\u8BA4\u503C </span>
<span class="token function">showMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u52A0\u4E86={}\u5C31\u80FD\u8FD9\u6837\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E5\u671F\u548C\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u548C\u65F6\u95F4" aria-hidden="true">#</a> \u65E5\u671F\u548C\u65F6\u95F4</h2><ul><li>\u521B\u5EFA <ul><li><code>new Date()</code> \u5F53\u524D\u65F6\u95F4</li><li><code>new Date(ms)</code> \u901A\u8FC7\u65F6\u95F4\u6233\u521B\u5EFA \u53EF\u8D1F</li><li><code>new Date(&#39;2022-08-08&#39;)</code> *\u540C\u4E0B\u6587<code>Date.parse()</code></li><li><code>new Date(y,m,d,h,m,s,ms)</code><ul><li>y\u56DB\u4F4D \u4E24\u4F4D\u4E3A19xx</li><li>m 0~11</li><li>d \u9ED8\u8BA41</li><li>h m s ms \u9ED8\u8BA40</li></ul></li></ul></li><li>\u67E5\u65B9\u6CD5 <ul><li><code>.getFullYear()</code></li><li><code>.getMonth()</code> 0-11</li><li><code>.getDate()</code></li><li><code>.getHours()</code></li><li><code>.getMinutes()</code></li><li><code>.getSeconds()</code></li><li><code>.getMilliseconds()</code></li><li><code>.getDay()</code> 0-6</li><li><code>.getTime()</code> \u65F6\u95F4\u6233</li><li><code>getTimezoneOffset()</code> \u65F6\u5DEE</li></ul></li><li>\u8BBE\u7F6E\u65B9\u6CD5 <ul><li><code>.setFullYear(year, [month], [date])</code></li><li><code>.setMonth(month, [date])</code></li><li><code>.setDate(date)</code></li><li><code>.setHours(hour, [min], [sec], [ms])</code></li><li><code>.setMinutes(min, [sec], [ms])</code></li><li><code>.setSeconds(sec, [ms])</code></li><li><code>.setMilliseconds(ms)</code></li><li><code>.setTime(milliseconds)</code></li></ul></li><li>\u4F7F\u7528\u67E5\u5199\u7EC4\u5408\u53EF\u4EE5\u4EFB\u610F\u52A0\u51CF</li><li>\u8FD0\u7B97\u8F6C\u6570\u5B57\u4E3A\u65F6\u95F4\u6233</li><li>\u7C7B\u65B9\u6CD5 <ul><li><code>Date.now()</code> \u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\u6233</li><li><code>Date.parse(str)</code> \u8FD4\u56DE\u65F6\u95F4\u6233 <ul><li>YYYY-MM-DDTHH:mm:ss.sssZ</li><li>&#39;2012-01-26T13:51:50.417-07:00&#39;</li></ul></li></ul></li></ul><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> Json</h2><ul><li><code>JSON.stringify(value[, replacer, space])</code> \u8F6Cjson <ul><li>\u5FFD\u7565 \u65B9\u6CD5 Symbol undefined</li><li><code>replacer</code> \u8981\u8F6C\u6362\u7684\u540D\u5355,\u53EF\u4E3A\u51FD\u6570</li><li><code>space</code> \u7F8E\u5316</li><li>\u53EF\u4EE5\u7528<code>toJSON(){}</code> \u81EA\u5B9A\u4E49</li></ul></li><li><code>JSON.parse(str[, reviver])</code>\u8F6C\u5BF9\u8C61 <ul><li>\u53EF\u4EE5\u8F6C\u6570\u7EC4</li><li><code>reviver</code> (key,value)=&gt;{} \u8FDB\u884C\u4E00\u4E9B\u989D\u5916\u64CD\u4F5C</li></ul></li></ul>`,30);function m(v,b){const a=o("ExternalLinkIcon");return l(),t("div",null,[d,n("p",null,[n("a",r,[u,i(a)])]),k])}const h=e(p,[["render",m],["__file","object.html.vue"]]);export{h as default};