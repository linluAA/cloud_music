<template>
  <div id="app">
    <!-- 路由视图 -->
    <keep-alive>
        <router-view class="view"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

</style>
