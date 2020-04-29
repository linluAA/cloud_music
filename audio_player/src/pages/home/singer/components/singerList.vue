<template>
  <div>
    <van-index-bar :index-list="indexList" :sticky="bool">
      <van-index-anchor :index="item" v-for="(item,id) in indexList" :key="id">
        {{item}}
        <div v-for="(items,idx) in singer" :key="idx" >
          <van-card v-if="items.hotid === item ||items.singerid === item" lazy-load class="singerdiv">
            <template #thumb>
              <van-image width="100%" height="100%" fit="contain" :src="items.picUrl" />
            </template>
            <template #desc>
              <p>{{items.name}}</p>
            </template>
          </van-card>
        </div>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import * as api from "@/request/api/singer.js";
export default {
  data() {
    return {
      singer: [],
      indexList: [
        "热",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "Q",
        "R",
        "S",
        "T",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      bool:false
    };
  },
  async created() {
    let list = await api.artists();
    if (list.data.code === 200) {
      this.singer = list.data.artists;
    }
  }

};
</script>

<style>
.singerdiv{
  border-bottom: 1px solid #d3d1d1;
}
.singerdiv p{
  text-align: center;
  line-height: 22vw;
  font-size: 20px;
  /* vertical-align: text-top; */
}
</style>