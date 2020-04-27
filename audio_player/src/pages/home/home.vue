<template>
  <div>
    <home-banner></home-banner>
    <home-song-list></home-song-list>
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