<template>
  <div>
 <h1>推荐歌曲</h1>
    <van-grid :border="false" :column-num="2" class="list" >
      <van-grid-item v-for="item in song" :key="item.id" :gutter="30">
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
      song: []
    };
  },
  async created() {
    let list = await api.newsong();
    if (list.data.code === 200) {
      this.song = list.data.result;
      console.log(this.song);
    }
  }
};
</script>

<style>

</style>