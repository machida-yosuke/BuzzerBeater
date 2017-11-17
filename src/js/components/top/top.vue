<template lang="pug">
 .top-wrap
   .aaa
</template>

<script>

 import { mapGetters, mapActions } from 'vuex';

 export default {
     name: 'top',
     computed: {
         ...mapGetters([ 'sampleMessage' ])
     },
     methods: {
         ...mapActions([ 'changeSampleName' ])
     }
 }
</script>

<style lang="scss">
.top-wrap{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
}
</style>
