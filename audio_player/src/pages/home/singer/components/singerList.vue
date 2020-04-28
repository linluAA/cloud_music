<template>
  <div>
    <van-index-bar :index-list="indexList" sticky="flase">
      <van-index-anchor :index="item" v-for="(item,id) in indexList" :key="id">
        {{item}}
        <div v-for="(items,idx) in singer" :key="idx">
          <van-card v-if="items.hotid === item ||items.singerid === item" lazy-load>
            <template #thumb>
              <van-image width="100%" height="100%" fit="contain" :src="items.picUrl" />
            </template>
            <template #title>
              <van-tag plain type="danger">{{items.name}}</van-tag>
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
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      sticky:false
    };
  },
  async created() {
    let list = await api.artists();
    if (list.data.code === 200) {
      this.singer = list.data.artists;
      //   console.log(this.singer);
    }
    // this.getSinger();
  }
  //   methods: {
  //     async getSinger() {
  //       let arr = [];
  //       this.indexList.forEach(item => {
  //         this.singer.forEach(async items => {
  //           if (items.singerid === item) {
  //             arr = await arr.push(items);
  //           }
  //         });
  //       });
  //       this.singer = arr;
  //       console.log(this.singer);
  //     }
  //   }
};
</script>

<style>
</style>