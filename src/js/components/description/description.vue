<template lang="pug">
 .description
  h1.description__logo BUZZER BEATER
  h2.description__title What’s ‘BUZZER BEATER’
  .description__description1 試合終了直前に放たれたシュートは、ボールが空中にある間に残り時間が00:00になっても、決まれば得点にカウントされる。
  .description__description2 ビッグサイトにマッピングされたゴールへ放たれるブザービーターに、スマホで参加して、逆転勝利しよう！
  nextbtn(@click.native='showParticipate')
</template>

<script>
import { mapMutations } from 'vuex';
import nextbtn from '../partial/nextbtn.vue';
export default {
  name: 'description',
  components:{
    nextbtn
  },
  methods: {
    ...mapMutations([
      'showParticipate'
    ]),
  }
}
</script>

<style lang="scss" scoped>
.description{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('img/partial/description_participate_bg.jpg') no-repeat center;
  background-size: cover;
  &__logo{
    top: 50px;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 687 / 1080 * 100%;
    height:319 / 1584 * 100%;
    background: url('img/description/description_logo.png') no-repeat center;
    background-size: contain;
  }
  &__title{
    top: 420px;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 811 / 1080 * 100%;
    height:84 / 1584 * 100%;
    background: url('img/description/whats_bb.png') no-repeat center;
    background-size: contain;
  }
  &__description1 {
    top: 600px;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 872 / 1080 * 100%;
    height: 329 / 1584 * 100%;
    background: url('img/description/description1.svg') no-repeat center;
    background-size: contain;
  }
  &__description2 {
    top: 1030px;
    text-indent: -9999px;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    width: 876 / 1080 * 100%;
    height: 236 / 1584 * 100%;
    background: url('img/description/description2.svg') no-repeat center;
    background-size: contain;
  }
}
</style>
