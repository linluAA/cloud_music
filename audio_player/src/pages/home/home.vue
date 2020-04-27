<template>
  <div>
    <!-- 全局组件 -->
    <top-bar></top-bar>
    <!-- 轮播图 -->
    <home-banner></home-banner>
    <!-- 推荐歌单 -->
    <home-song-list></home-song-list>
    <!-- 推荐歌曲 -->
    <home-song></home-song>
  </div>
</template>

<script>

import homeBanner from "./components/homeBanner";
import homeSongList from "./components/homeSongList";
import homeSong from "./components/homeSong";
export default {
  components: {
    homeBanner,
    homeSongList,
    homeSong
  }
};
</script>

<style>
</style>