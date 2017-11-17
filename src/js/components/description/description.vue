<template lang="pug">
 .description-wrap
   .aaa
</template>

<script>

 import { mapGetters, mapActions } from 'vuex';

 export default {
     name: 'description',
     computed: {
         ...mapGetters([ 'sampleMessage' ])
     },
     methods: {
         ...mapActions([ 'changeSampleName' ])
     }
 }
</script>

<style lang="scss">
.description-wrap{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
}
</style>
