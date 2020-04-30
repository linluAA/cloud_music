<template>
  <div id="app">
    <!-- 路由视图 -->
    <keep-alive>
      <!-- <transition :name="transitionName" mode="out-in"> -->
        <router-view class="view"></router-view>
      <!-- </transition> -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  // data () {
  //   return {
  //     transitionName: 'fold-left'
  //   }
  // },
  // components: {},
  // watch: {
  //   // watch $route 决定使用哪种过渡
  //   '$route' (to, from) {
  //     // console.log(to)
  //     // console.log(from)
  //     if(to.path==="/collection"){
  //       // console.log(11111);
  //       //to、from是最基本的路由对象，分别表示从(from)某个页面跳转到(to)另一个页面,to.path（表示要跳转到的路由地址），from.path同理。
  //       const routerDeep = ['/recommend', '/collection'];
  //       //找到to.path和from.path在routerDeep数组中的下标
  //       const toDepth = routerDeep.indexOf(to.path);
  //       const fromDepth = routerDeep.indexOf(from.path);
  //       this.transitionName = toDepth > fromDepth ?  'fold-right' : 'fold-left' ;
  //     }
      
  //   }
  // }
};
</script>

<style>
/* .app-view {
  background: yellow;
} */
/* .fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .2s;
  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .2s;
  } */
  /* @keyframes fold-left-in {
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  } */
  /* @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      opacity: 0;
    }
  } */

  /* .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .2s;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .2s;
  }

  @keyframes fold-right-in{
    0% {
      width: 100%;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      opacity: 0;
    }
    100% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  } */
  /* @keyframes fold-right-out  {
    100% {
      width: 100%;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    0% {
      width: 100%;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  } */
</style>
