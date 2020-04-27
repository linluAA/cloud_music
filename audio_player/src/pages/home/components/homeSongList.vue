<template>
  <div class="songlist">
      <h1>推荐歌单</h1>
    <van-grid :border="false" :column-num="2" class="list">
      <van-grid-item v-for="item in songlist" :key="item.id">
        <router-link :to="{path:'/details',query:{id:item.id}}">
          <van-image :src="item.picUrl" />
          <p>{{item.name}}</p>
        </router-link>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import * as api from "@/request/api/home.js";
export default {
  data() {
    return {
      songlist: []
    };
  },
  async created() {
    let list = await api.personalized();
    if (list.data.code === 200) {
      this.songlist = list.data.result;
    //   console.log(this.songlist);
    }
  }
};
</script>

<style lang="scss">
@import "@/style/home/homeSongList";
</style>