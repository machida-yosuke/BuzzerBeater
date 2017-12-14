<template lang="pug">
.top
  .top__main-img
  h2.top__logo BUZZER BEATER
  nextbtn(@click.native='showDescription')
</template>

<script>
import { mapMutations } from 'vuex';
import nextbtn from '../partial/nextbtn.vue';
export default {
  name: 'top',
  components:{
    nextbtn
  },
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
    background: url('img/top/top_bg.jpg') no-repeat center;
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
    background: url('img/top/top_logo.png') no-repeat center;
    background-size: contain;
  }
}
</style>
