<template>
  <div>
    <van-index-bar :index-list="indexList" :sticky="bool">
      <van-index-anchor :index="item" v-for="(item,id) in indexList" :key="id">
        {{item}}
        <div v-for="(items,id) in singer" :key="id">
          <router-link :to="{path:'/detailsTwo',query:{id:items.id}}">
            <van-card
              v-if="items.hotid === item ||items.singerid === item"
              lazy-load
              class="singerdiv"
            >
              <template #thumb>
                <van-image width="100%" height="100%" fit="contain" :src="items.picUrl" lazy-load>
                  <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                  </template>
                </van-image>
              </template>
              <template #desc>
                <p>{{items.name}}</p>
              </template>
            </van-card>
          </router-link>
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
      bool: false
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
.singerdiv {
  border-bottom: 1px solid #d3d1d1;
}
.singerdiv p {
  text-align: center;
  line-height: 22vw;
  font-size: 20px;
}
</style>