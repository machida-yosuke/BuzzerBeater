<template lang="pug">
 .next-btn
   .next-btn__image
</template>

<script>
export default {
  name: 'nextbtn',
}
</script>

<style lang="scss" scoped>
.next-btn{
  position: absolute;
  width: 217px;
  height: 217px;
  transform: translate(-50%,0);
  left: 50%;
  bottom: 20px;
  &__image{
    width: 217px;
    height: 217px;
    position: absolute;
    background: url('img/partial/next.png') no-repeat center;
    background-size: contain;
  }
}
</style>
