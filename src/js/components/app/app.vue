<template lang="pug">
 .app-wrap
</template>

<script>

 import { mapGetters, mapActions } from 'vuex';

 export default {
     name: 'app',
     computed: {
         ...mapGetters([ 'sampleMessage' ])
     },
     methods: {
         ...mapActions([ 'changeSampleName' ])
     }
 }
</script>

<style lang="scss">
.app-wrap{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
}
</style>
