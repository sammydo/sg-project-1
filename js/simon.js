function Simon() {
  this.redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  this.yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  this.blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  this.greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  this.buttons = {
    red: {
      color: 'red',
      audio: this.redAudio
    },
    yellow: {
      color: 'yellow',
      audio: this.yellowAudio
    },
    blue: {
      color: 'blue',
      audio: this.blueAudio
    },
    green: {
      color: 'green',
      audio: this.greenAudio
    }

  };
  this.attempts = [];
  this.currentGame = [];
}


Simon.prototype.playColor = function (color, callback) {
  if (this.buttons[color]) {
    console.log(color);
    this.buttons[color].audio.play();
    $('#' + color)
       .animate({
         opacity: 1,
         duration: 200
       })
       .animate({
         opacity: 0.29,
         duration: 200
       }, callback);
  }
};

Simon.prototype.buttonColors = function () {
  return Object.keys(this.buttons);
};

Simon.prototype.getRandomButton = function () {
  var colors = this.buttonColors();
  var randomColor = colors[(Math.floor(Math.random()*colors.length))];

  return this.buttons[randomColor];
};

Simon.prototype.getButtonForColor = function (color) {
  return this.buttons[color];
};

Simon.prototype.areAttemptsCorrect = function () {
  return JSON.stringify(this.attempts) === JSON.stringify(this.currentGame);
};
