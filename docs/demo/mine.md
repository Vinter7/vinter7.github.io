<script setup>
import { ref } from 'vue'

//生成数字
function* genNum(num, n) {
  for (let i = 0; i < n; i++) {
    yield num
  }
}
//邻居格子相对位置
function neighbor(i) {
  if (!(i % w)) {
    return [-w, w, 1-w, 1, w+1]
  } else if (!((i + 1) % w)) {
    return [-w-1, -1, w-1, -w, w]
  } else {
    return [-w-1, -1, w-1, -w, w, 1-w, 1, w+1]
  }
}
// 周围几个雷
function around(i) {
  let sum = 0
  for (let j of neighbor(i)) {
    sum += arr[i + j] ?? 0
  }
  return sum
}

function showAround(i) {
  if (!record.includes(i)) {
    record.push(i)
    for (let j of neighbor(i)) {
      let ij = i + j
      if (aroundArr[ij] === 0) {
        status.value[ij] = 1
        showAround(ij) //递归
      } else if (aroundArr[ij] && aroundArr[ij] != 9) {
        status.value[ij] = 1
      }
    }
  }
}

//点击事件
function ok(i) {
  if (arr[i] === 1) {
    alert('此处是雷,游戏结束')
    return (end.value = true)
  }
  status.value[i] = 1
  if (!status.value.includes(0)) {
    alert('所有雷均已排除,恭喜你获得胜利')
    return (end.value = true)
  }
  if (aroundArr[i] == 0) showAround(i)
}

let h = 15
let w = 15
let m = 20
let status = ref([...genNum(0, h*w)])
let end = ref(false)
let record = []
let arr = [...genNum(1, m), ...genNum(0, h*w-m)]
arr.sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random())
let aroundArr = arr.map((i, index) => (i ? 9 : around(index)))
</script>



# 扫雷

----

<div class="grid" :style="{'--w':w}">
  <button
    v-for="(i, index) in aroundArr"
    @click="status[index] == 2 ? (status[index] = 0) : ok(index)"
    @contextmenu.prevent="status[index] = status[index] ? 0 : 2"
    :disabled="status[index] == 1"
    class="btn"
  >
    <!-- 数字 -->
    <div v-if="status[index] == 1">
      <b>{{ i ? i : '' }}</b>
    </div>
    <!-- 排雷旗 -->
    <div v-if="status[index] == 2">
      {{ `\u{1F6A9}` }}
    </div>
    <!-- 地雷 -->
    <div v-if="end && status[index] != 2">
      {{ arr[index] ? `\u{1F4A3}` : '' }}
    </div>
  </button>
</div>



<style scoped>

.grid {
  display: grid;
  width: 500px;
  height: 500px;
  grid-template-rows: repeat(var(--w), 1fr);
  grid-template-columns: repeat(var(--w), 1fr);
  border: solid black;
}
.btn {
  background-color: skyblue;
  border: dashed 1px;
}
.btn:hover {
  background-color: rgb(98, 201, 241);
}
.btn:disabled {
  color: black;
  background-color: #eeeeee;
}
</style>
