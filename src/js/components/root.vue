 <template lang="pug">
  .root
    top
    description
    app
</template>

<script>
  import top from './top/top.vue'
  import description from './description/description.vue'
  import app from './app/app.vue'
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'root',
    components:{
      top,
      description,
      app
    },
    computed: {
      ...mapGetters([ 'sampleMessage' ])
    },
    methods: {
      ...mapActions([ 'changeSampleName' ])
    }
  }
</script>

<style lang="scss">
.root{
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
