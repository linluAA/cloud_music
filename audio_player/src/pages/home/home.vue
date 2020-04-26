<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) of listMovie" :key="index">
          <van-image :src="item.imageUrl" />
        </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script>
import * as api from "@/request/api/home.js";
export default {
   data() {
    return {
      listMovie: [], //轮播图接口数据
    };
  },
  async created() {
    let val = await api.getIndexInfo();
    console.log(val)
    this.listMovie = val.data.banners;
    
    console.log(this.listMovie)
  }
};
</script>

<style>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>