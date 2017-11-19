 <template lang="pug">
  .root
    top(v-if='isShow == "top"')
    description(v-if='isShow == "description"')
    app(v-if='isShow == "app"')
</template>

<script>
  import top from './top/top.vue'
  import description from './description/description.vue'
  import app from './app/app.vue'
  import { mapGetters, mapMutations, mapState } from 'vuex';

  export default {
    name: 'root',
    components:{
      top,
      description,
      app
    },
    mounted(){
      // setTimeout(()=>{
      //   this.showDescription();
      // },5000)
    },
    computed: {
      ...mapState([
        'isShow'
      ])
    },
    methods: {
      ...mapMutations([
        'showDescription'
      ])
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
