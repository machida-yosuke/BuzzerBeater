<template lang="pug">
  .app
    .app__ball
      <svg v-bind:data-color='ballColor' version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1080.5 1237" style="enable-background:new 0 0 1080.5 1237;" xml:space="preserve">
      <g>
        <path class="st0" d="M387.1,337.4c3.9,74.9-13.3,170-86.1,272.8C135.2,844.2,115.2,1030.8,112.8,1066c109.1,104.4,250,164.5,400.5,170.9l1.6-910.5C471.6,327.5,428.9,331.1,387.1,337.4z"/>
        <path class="st0" d="M363.4,223.9c6.3,16.8,12.8,37.6,17.4,61.7c43.9-6.5,88.8-10.3,134.2-11.3L515.5,0c-93,3.7-182.6,28.2-262.9,70.4C292.8,99.5,336.6,153.1,363.4,223.9z"/>
        <path class="st0" d="M700,338.8c-43.4-6.9-87.8-11-132.9-12.2l-1.6,910.4c153.3-6.1,297.4-68.8,405.9-174c-3.7-44.9-28.2-227.2-186.2-451.9C713,508.4,696,413.5,700,338.8z"/>
        <path class="st0" d="M724.1,224.5c26.6-69.5,69.6-122.4,109.4-151.6C752.3,29.1,661.9,4.1,567.7,0l-0.5,274.4c47.1,1.1,93.7,5.4,139.1,12.5C711.1,262.5,717.7,241.5,724.1,224.5z"/>
        <path class="st0" d="M1080.5,315.3c-27.3-48.4-61.3-93.3-101.5-133.8c-29.5-29.6-61.5-55.8-95.4-78.5c-31.6,14.3-82.1,65.3-110.7,140.1c-6.1,15.9-11.5,33.6-15.4,53.1c118.2,24.5,228.3,68.9,323,130.3V315.3z"/>
        <path class="st0" d="M1080.5,489.6c-94.2-67.2-206.9-115.4-329.2-141.4c-2.4,66.2,15.3,145.8,76.5,232.8c133.4,189.7,176.2,349.3,189.9,431.7c12.4-15,24.2-30.7,35.2-47c9.9-14.5,19-29.4,27.6-44.5V489.6z"/>
        <path class="st0" d="M0,425.4c96.6-62.4,209-107,329.6-131c-3.9-19-9.1-36.5-15-52.1c-29.3-77.3-81.9-129.4-113.2-141.8C133.9,144.7,74.8,202.3,28.1,271.1C18,285.9,8.7,301,0,316.5V425.4z"/>
        <path class="st0" d="M335.8,346.5C211.1,371.8,96,420.2,0,488.4v432.4c18.9,33.6,41,65.6,66.2,95.6c13.1-80.8,55.4-243,192.2-436.2C320.4,492.8,338.2,412.9,335.8,346.5z"/>
      </g>
      </svg>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { accelerationManager } from '../../module/accelerationManager';
export default {
  name: 'app',
  mounted(){
    accelerationManager.setAcceleration();
    accelerationManager.on('Shake0',()=>{
      this.changeColor0();
    });

    accelerationManager.on('Shake1',()=>{
      this.changeColor1();
      setTimeout(()=>{
      },1000)
    });

    accelerationManager.on('Shake2',()=>{
      this.changeColor2();
      setTimeout(()=>{
      },1000)
    });
  },
  data(){
    return{
      background:'#000',
    }
  },
  computed: {
    ...mapState([
      'ballColor'
    ])
  },
  methods: {
    ...mapMutations([
      'changeColor0',
      'changeColor1',
      'changeColor2'
    ])
  }
}
</script>

<style lang="scss" scoped>
.app{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  &__ball{
    position: absolute;
    width: 100%;
    height: 1237 / 1584 * 100%;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
  }
}
[data-color='0']{
  fill:#bfbfbf;
}

[data-color='1']{
  fill:#12ff18;
}

[data-color='2']{
  fill:#0000FF;
}
</style>
