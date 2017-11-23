import EventEmitter from 'events'
class Microphone extends EventEmitter{
  constructor() {
    super();
    this.enableMic = true;
    this.getByteFrequencyDataAverage;
    this.elVolume;
    this.draw;
    this.Timer = null;
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
  }

  initAudioContext(){
    const isApple = /iphone|ipod|ipad/i.test(navigator.userAgent);
    if (isApple) {
      console.log('isApple',isApple);
      return;
    }
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
    }).catch(function(err) {
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
        this.Timer = setTimeout(()=>{
          this.enableMic = true;
          this.Timer = null;
          requestAnimationFrame(this.draw);
          console.log('setTimeout',this.getByteFrequencyDataAverage());
        },2000)
        return ;
      }
      this.elVolume = Math.floor(this.getByteFrequencyDataAverage());
      if (this.elVolume < 90) {
        this.emit('support0')
      }else{
        this.emit('support1')
        this.enableMic = false;
      }
      //console.log(this.elVolume);
      requestAnimationFrame(this.draw);
    };
    this.draw();
  }
}


export const microphone = new Microphone();
