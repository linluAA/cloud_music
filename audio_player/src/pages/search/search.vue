<template>
  <transition name="slide" mode="out-in">
    <div class="search">
      <div class="top">
        <van-icon class="arrow-left" name="arrow-left" @click="goBack" color="#fff" size="6.5vw" />
        <input type="text" class="input" placeholder="搜索歌曲，歌手，专辑" ref="inputs">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/style/search/search.scss";
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
