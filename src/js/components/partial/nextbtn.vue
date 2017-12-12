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
  width: 50px;
  height: 50px;
  transform: translate(-50%,0);
  left: 50%;
  bottom: 20px;
  background: red;
  &__image{
    width: 50px;
    height: 50px;
    position: absolute;
    width: 50px;
    height: 50px;
  }
}
</style>
