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
  if (!(i % 20)) {
    return [-20, 20, -19, 1, 21]
  } else if (!((i + 1) % 20)) {
    return [-21, -1, 19, -20, 20]
  } else {
    return [-21, -1, 19, -20, 20, -19, 1, 21]
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
    return (end.value = 1)
  }
  status.value[i] = 1
  if (!status.value.includes(0)) {
    alert('所有雷均已排除,恭喜你获得胜利')
    return (end.value = 1)
  }
  if (aroundArr[i] == 0) showAround(i)
}

let status = ref([...genNum(0, 400)])
let end = ref(0)
let record = []
let arr = [...genNum(1, 50), ...genNum(0, 350)]
arr.sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random())
let aroundArr = arr.map((i, index) => (i ? 9 : around(index)))
</script>



# 高枕枕的游戏仿写 - 扫雷

----

<div class="grid">
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
    <div v-if="end">
      {{ arr[index] ? `\u{1F4A3}` : '' }}
    </div>
    <!-- <div v-if="status[index] == 0">
      {{ index }}
    </div> -->
  </button>
</div>



<style scoped>

.grid {
  margin: auto;
  display: grid;
  width: 800px;
  height: 800px;
  grid-template-rows: repeat(20, 1fr);
  grid-template-columns: repeat(20, 1fr);
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
