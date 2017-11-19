import EventEmitter from 'events'
class Microphone extends EventEmitter{
  constructor() {
    super();
    this.getByteFrequencyDataAverage;
    this.elVolume;
    this.draw;
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
  }

  initAudioContext(){
    this.ctx = new AudioContext();;
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
      this.elVolume = Math.floor(this.getByteFrequencyDataAverage());
      if (this.elVolume < 5) {
        this.emit('support0')
      }
      if (this.elVolume > 10) {
          this.emit('support1')
      }
      if (this.elVolume > 20) {
          this.emit('support2')
      }
      if (this.elVolume > 30) {
          this.emit('support3')
      }
      if (this.elVolume > 40) {
          this.emit('support4')
      }
      requestAnimationFrame(this.draw);
    };
    this.draw();
  }
}


export const microphone = new Microphone();
