<template>
  <div id="app">
    <!-- 路由视图 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
 
}

</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
