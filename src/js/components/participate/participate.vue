<template lang="pug">
 .participate
  h2.participate__title way to participate
  .participate__participate1
    .participate__participate1-description 1.タイミングを合わせてスマホを押し出そう
    .participate__participate1-image
  .participate__participate2
    .participate__participate2-description 2.指示に合わせて、スマホを回そう
    .participate__participate2-image
  //next(@click.native='next')
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'participate',
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
  background: url('img/partial/description_participate_bg.png') no-repeat center;
  background-size: cover;
  &__title{
    top: 50px;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 811px;
    height:84px;
    background: url('img/participate/participate_title.png') no-repeat center;
    background-size: cover;
  }
  &__participate1 {
    top: 200px;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    &-description{
      text-indent: -9999px;
      width: 657px;
      height:126px;
      background: url('img/participate/participate1.svg') no-repeat center;
      background-size: cover;
      margin: 0 auto;
    }
    &-image{
      width: 611px;
      height:396px;
      background: url('img/participate/participate_try.png') no-repeat center;
      background-size: cover;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
  &__participate2 {
    top: 820px;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    &-description{
      text-indent: -9999px;
      width: 511px;
      height:123px;
      background: url('img/participate/participate2.svg') no-repeat center;
      background-size: cover;
    }
    &-image{
      width: 611px;
      height:396px;
      background: url('img/participate/participate_goal.png') no-repeat center;
      background-size: cover;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
}
</style>
