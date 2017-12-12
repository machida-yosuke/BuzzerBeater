 <template lang="pug">
  .root
    transition(name='top' mode="out-in")
      top(v-if='isShow("top")')
    transition(name='description' mode="out-in")
      description(v-if='isShow("description")')
    transition(name='participate' mode="out-in")
      participate(v-if='isShow("participate")')
    transition(name='app' mode="out-in")
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
@import '../../scss/keyframes.scss';
.root{
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
}
.top-leave-active{
  animation: fadeOut 500ms both ease-out;
}

.description-enter-active{
  animation: fadeIn 500ms both ease-out;
  animation-delay: 200ms;
}

.description-leave-active{
  animation: fadeOut 500ms both ease-out;
}


.participate-enter-active{
  animation: fadeIn 500ms both ease-out;
  animation-delay: 200ms;
}

.participate-leave-active{
  animation: fadeOut 500ms both ease-out;
}

.app-enter-active{
  animation: fadeIn 500ms both ease-out;
  animation-delay: 200ms;
}

</style>
