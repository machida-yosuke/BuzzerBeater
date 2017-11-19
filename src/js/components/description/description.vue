<template lang="pug">
 .description-wrap(v-bind:style='[backgroundColor, {background}]')
  h2.description-wrap__logo BUZZER BEATER
  .description-wrap__description ブザーがなったらインタラクションスタート!スマホを横に降ってブザービターが決まるようにみんなでサポートしよう
  .description-wrap__icon Shake
</template>

<script>
 import { mapGetters, mapActions } from 'vuex';
 export default {
     name: 'description',
     data(){
       return{
         background:'#e61e2c'
       }
     },
     computed: {

     },
     methods: {

     }
 }
</script>

<style lang="scss">
.description-wrap{
  position: absolute;
  width: 100%;
  height: 100%;
  &__logo{
    top: 100 / 1920 * 100%;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 416 / 1080 * 100%;
    height: 230 / 1920 * 100%;
    background: url('../img/description/description_logo.svg') no-repeat center;
    background-size: contain;
  }
  &__description {
    top: 461 / 1920 * 100%;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 886 / 1080 * 100%;
    height: 502 / 1920 * 100%;
    background: url('../img/description/description.svg') no-repeat center;
    background-size: contain;
  }
  &__icon{
    top: 1060 / 1920 * 100%;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 691 / 1080 * 100%;
    height: 677 / 1920 * 100% ;
    background: url('../img/description/icon.svg') no-repeat center;
    background-size: contain;
  }
}
</style>
