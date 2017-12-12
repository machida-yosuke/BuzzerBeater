 <template lang="pug">
  .root
    top(v-if='isShow("top")')
    description(v-if='isShow("description")')
    participate(v-if='isShow("participate")')
    app(v-if='isShow("app")')
</template>

<script>
  import top from './top/top.vue'
  import description from './description/description.vue'
  import participate from './participate/participate.vue'
  import app from './app/app.vue'
  import {mapState} from "vuex"
  export default {
    name: 'root',
    components:{
      top,
      description,
      participate,
      app
    },
    computed: {
      ...mapState([
        'correntPage'
      ])
    },
    methods: {
      isShow(pageName){
        return pageName === this.correntPage;
      }
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
