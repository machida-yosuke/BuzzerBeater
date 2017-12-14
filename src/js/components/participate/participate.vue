<template lang="pug">
 .participate
  h2.participate__title way to participate
  .participate__participate1
    .participate__participate1-description 1.タイミングを合わせてスマホを押し出そう
    .participate__participate1-image
  .participate__participate2
    .participate__participate2-description 2.指示に合わせて、スマホを回そう
    .participate__participate2-image
  nextbtn(@click.native='showApp')
</template>

<script>
import { mapMutations } from 'vuex';
import nextbtn from '../partial/nextbtn.vue';
export default {
  name: 'participate',
  components:{
    nextbtn
  },
  methods: {
    ...mapMutations([
      'showApp'
    ]),
  }
}
</script>

<style lang="scss" scoped>
.participate{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('img/partial/description_participate_bg.jpg') no-repeat center;
  background-size: cover;
  &__title{
    top: 50px;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 811 / 1080 * 100%;
    height: 84 / 1584 * 100%;
    background: url('img/participate/participate_title.png') no-repeat center;
    background-size: contain;
  }
  &__participate1 {
    top: 200px;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 685 / 1080 * 100%;
    height:550 / 1584 * 100%;
    &-description{
      text-indent: -9999px;
      width: 657 / 685 * 100%;
      height:126 / 590 * 100%;
      background: url('img/participate/participate1.svg') no-repeat center;
      background-size: contain;
      margin: 0 auto;
    }
    &-image{
      width: 611 / 685 * 100%;
      height:396 / 590 * 100%;
      background: url('img/participate/participate_try.png') no-repeat center;
      background-size: contain;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
  &__participate2 {
    top: 780px;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 685 / 1080 * 100%;
    height:550 / 1584 * 100%;
    &-description{
      text-indent: -9999px;
      width: 511 / 685 * 100%;
      height:123 / 590 * 100%;
      background: url('img/participate/participate2.svg') no-repeat center;
      background-size: contain;
    }
    &-image{
      width: 611 / 685 * 100%;
      height:396 / 590 * 100%;
      background: url('img/participate/participate_goal.png') no-repeat center;
      background-size: contain;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
}
</style>
