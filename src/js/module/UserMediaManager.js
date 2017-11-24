import EventEmitter from 'events'
class Microphone extends EventEmitter{
  constructor() {
    super();
    this.enableMic = true;
    this.getByteFrequencyDataAverage;
    this.elVolume;
    this.draw;
    this.Timer = null;
    this.animefreame = null;
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
  }

  enable(){
    this.enableMic = true;
    console.log(this.enableMic);
  }

  disable(){
    this.enableMic = false;
    console.log(this.enableMic);
  }

  initAudioContext(){
    console.log('initAudioContext');
    const isApple = /iphone|ipod|ipad/i.test(navigator.userAgent);
    // if (isApple) {
    //   console.log('isApple',isApple);
    //   return;
    // }
    this.ctx = new AudioContext();
    this.analyser = this.ctx.createAnalyser();
    this.frequencies = new Uint8Array(this.analyser.frequencyBinCount);
    this.getVolume();
  }

  getVolume(){
    navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
      window.hackForMozzila = stream;
      this.ctx.createMediaStreamSource(stream)
        .connect(this.analyser);
    }).catch((err) => {
      console.log('getVolumeだめです');
      console.log(err.message);
    });

    this.getByteFrequencyDataAverage = ()=> {
      this.analyser.getByteFrequencyData(this.frequencies);
      return this.frequencies.reduce(function(previous, current) {
        return previous + current;
      }) / this.analyser.frequencyBinCount;
    };

    this.draw = () => {
      if (this.enableMic == false) {
        if (this.Timer !== null) {
          return;
        }
        cancelAnimationFrame(this.animefreame);
        //this.ctx.suspend();
        this.Timer = setTimeout(()=>{
          this.enableMic = true;
          this.Timer = null;
          //this.ctx.resume();
          this.animefreame = requestAnimationFrame(this.draw);
        },2000)
        return;
      }

      //音量の判定
      this.elVolume = Math.floor(this.getByteFrequencyDataAverage());
      if (this.elVolume < 20) {
        console.log('elVolume', this.elVolume);
        this.emit('support0')
      }else{
        this.emit('support1')
        console.log('this.emit("support1")', this.elVolume);
        this.enableMic = false;
      }

      this.animefreame = requestAnimationFrame(this.draw);
    };
    this.draw();
  }
}
export const microphone = new Microphone();
