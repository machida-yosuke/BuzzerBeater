import EventEmitter from 'events'

class AccelerationManager extends EventEmitter {
  constructor() {
    super();
    this.enableAcceleration = true;
    this.Timer = null;
  }
  setAcceleration(){
    this.initHandle();
  }

  enable(){
    this.enableAcceleration = true;
    console.log(this.enableAcceleration);
  }

  disable(){
    this.enableAcceleration = false;
    console.log(this.enableAcceleration);
  }

  devicemotionHandler(event) {
    const x = event.acceleration.x;
    const y = event.acceleration.y;
    const z = event.acceleration.z;

    if (this.enableAcceleration == false) {
      if (this.Timer !== null) {
        return;
      }
      this.Timer = setTimeout(()=>{
        this.enableAcceleration = true;
        this.Timer = null;
      },2000)
      return ;
    }

    //加速度の判定
    if (x > 10 || y > 10 || z > 10 || x < -10 || y < -10 || z < -10) {
      console.log('加速した');
      this.emit('Shake1');
      this.enableAcceleration = false;
    }else {
      this.emit('Shake0');
    }
  }

  initHandle() {
    window.addEventListener("devicemotion", (event) => {
      this.devicemotionHandler(event);
    }, false);
  }
}

export const accelerationManager = new AccelerationManager();
