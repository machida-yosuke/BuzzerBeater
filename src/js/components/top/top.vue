<template lang="pug">
.top
  .top__main-img
    h2.top__logo BUZZER BEATER
  //next(@click.native='next')
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'top',
  methods:{
    ...mapMutations([
      'showDescription'
    ]),
  }
}
</script>

<style lang="scss" scoped>
.top{
  position: absolute;
  width: 100%;
  height: 100%;
  &__main-img{
    background: url('img/top/top_bg.png');
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
    width: 1024px;
    height: 475px;
    background: url('img/top/top_logo.png');
  }
}
</style>
