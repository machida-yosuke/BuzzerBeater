import EventEmitter from 'events'

class AccelerationManager extends EventEmitter {
  constructor() {
    super();
  }

  setAcceleration(){
    this.initHandle();
  }

  devicemotionHandler(event) {
    const x = event.acceleration.x;
    const y = event.acceleration.y;
    const z = event.acceleration.z;

    if (x < 5 || y <5 || z <5) {
      this.emit('Shake0');
    }
    if (x > 5 || y >5 || z >5) {
      this.emit('Shake1');
    }
    if (x > 10 || y >10 || z >10) {
      this.emit('Shake2');
    }
    if (x > 15 || y >15 || z >15) {
      this.emit('Shake3');
    }
    if (x > 20 || y >20 || z >20) {
      this.emit('Shake4');
    }
  }

  initHandle() {
    window.addEventListener("devicemotion", (event) => {
      this.devicemotionHandler(event);
    }, false);
  }
}

export const accelerationManager = new AccelerationManager();
