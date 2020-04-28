<template>
  <!-- 头部 -->
  <div class="music-header">
    <van-nav-bar title="Cloud Music" class="box">
      <template #left>
        <van-icon class="music-o" name="music-o" color="#fff" size="25" />
      </template>
      <template #right>
        <van-icon class="search" name="search" color="#fff" size="25" />
      </template>
    </van-nav-bar>

    <!-- 分栏 -->
    <van-tabs
      class="title-nav box1"
      v-model="activeName"
      background="#d44439"
      title-inactive-color="#eee"
      title-active-color="#fff"
      color="#fff"
    >
      <van-tab title="推荐" to="/recommend" name="recommend"></van-tab>

      <van-tab title="歌手" to="/singer" name="singer"></van-tab>

      <van-tab title="排行" to="/ranking" name="ranking"></van-tab>
    </van-tabs>
    <div class="ysbox"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MusicHeader",
  data() {
    return {
      activeName: this.$route.name
    };
  }
  // created(){
  //   console.log(this.$route.path)
  // }
};
</script>

<style lang="scss">
@import "@/style/topBar/topBar";
</style>