<template>
  <div class="music-header">
    <van-nav-bar title="Cloud Music">
      <template #left>
       <van-icon class="music-o" name="music-o" color="#fff" size="25" />
      </template>
      <template #right>
       <van-icon class="search" name="search" color="#fff" size="25" />
      </template>
    </van-nav-bar>

    
    
    <van-tabs
      class="title-nav"
      v-model="active"
      background="#d44439"
      title-inactive-color="#eee"
      title-active-color="#fff"
      color="#fff"
    >
      <van-tab title="推荐"></van-tab>
      <van-tab title="歌手"></van-tab>
      <van-tab title="排行"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "MusicHeader",
  data() {
    return {
      active: 2
    };
  }
};
</script>

<style lang="scss">
@import "@/style/topBar/topBar";
</style>