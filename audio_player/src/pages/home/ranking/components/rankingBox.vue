<template>
  <div>
    <template v-if="list" class="rankingbox">
    <van-card v-for="(item,idx) in list" :key="idx" lazy-load>
      <template #thumb>
        <van-image width="100%" height="100%"  :src="item.data.playlist.coverImgUrl" />
      </template>
      <template #title>
        <li>1.{{item.data.playlist.tracks[0].name}}</li>
        <li>2.{{item.data.playlist.tracks[1].name}}</li>
        <li>3.{{item.data.playlist.tracks[3].name}}</li>
      </template>
    </van-card>
    </template>
  </div>
</template>

<script>
import * as api from "@/request/api/ranking";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getRankIng();
  },
  methods: {
    async getRankIng() {
      //获取排行榜详情信息的接口
      let arr = [0, 1, 2, 3, 4, 22, 23];
      arr.forEach(async item => {
        let res = await api.getRankIng({
          params: {
            idx: item
          }
        });
        this.list.push(res);
      });
    }
  }

 
};
</script>

<style lang="scss">
@import "@/style/ranking/ranking";
</style>