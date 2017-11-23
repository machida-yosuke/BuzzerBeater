<template lang="pug">
.top-wrap(v-bind:style='[backgroundColor, {background}]')
  .top-wrap__main-img
    h2.top-wrap__logo BUZZER BEATER
      img(src='img/top/top_logo.svg')
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'top',
  data(){
    return{
      background:'#000'
    }
  }
}
</script>

<style lang="scss">
.top-wrap{
  position: absolute;
  width: 100%;
  height: 100%;
  &__main-img{
    background: url('img/top/main.png');
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  &__logo{
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    width: 782px;
    height: 438px;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
