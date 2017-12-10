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
  }

  disable(){
    this.enableAcceleration = false;
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
      },1000)
      return ;
    }

    //加速度の判定
    if (z > 20 || z < -20) {
      this.emit('Shake1');
      this.enableAcceleration = false;
    }else if (x > 10 || y > 10 || x < -10 || y < -10) {
      this.emit('Shake2');
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
