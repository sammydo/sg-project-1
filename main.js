
//creating an object with all the proroperties of the simon game
$(document).ready(function(){

  var game = [];
  var level = 0;
  var colorIndex = '';
  var index = 0;
  var playerTurn = false;
  var boxColor = '';
  var attempt = [];
  var colorsArray = ['red', 'yellow', 'blue', 'green'];
  var CurrentGame = [];
  var testOne;
  var player = [];
  var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  var soundIndex;
  var soundsArray = [redAudio, yellowAudio, blueAudio, greenAudio];


  $('#start-btn').on('click', function() {
    if ($(this).html() === 'Start') {
      newGame();
      $(this).html('Reset');
    }else if($(this).html() === 'Reset'){
      $(this).html('Start');
      $('#score').html('0');

    }
  });

  function clearPlayer() {
    player = [];
}

  function nextLevel() {
    addLevel();
  }

  function clearGame() {
    game.CurrentGame = [];
    game.count = 0;
    addCount();
  }

//new game function setting the game to level 0 with an empty array
  function newGame() {
    CurrentGame = [];
    level = 0;
    addLevel();
  }

  function addLevel() {
    level++;
    setTimeout(function(){
      $('#score').removeClass('fadeOutDown').html(level).addClass('fadeInDown');
    }, 200);

    generateMove();

  }

  function generateMove(){

    for (var i = 0, l = 2; i < l; i++) {
      CurrentGame.push(colorsArray[(Math.floor(Math.random()*4))]);
      // $(this).fadeOut(150).fadeIn(250);

      if (CurrentGame[0] === ('red')){
        console.log('hi');

      }
      else{
        console.log('not work');
      }
      // $('.game_color').addClass('opacity');
      // setTimeout(function () {
      //   $('.game_color').removeClass('opacity');
      //   }, 500);
    }

    console.log(CurrentGame);
    if(CurrentGame[0] === 'red') {
      redAudio.play();
      $('#red').fadeOut(150).fadeIn(250);

    }        else if(CurrentGame[0] === 'yellow') {
      yellowAudio.play();
      $('#yellow').fadeOut(150).fadeIn(250);

    }        else if(CurrentGame[0] === 'blue') {
      blueAudio.play();
      $('#blue').fadeOut(150).fadeIn(250);

    }        else if(CurrentGame[0] === 'green') {
      greenAudio.play();
      $('#green').fadeOut(150).fadeIn(250);
    }
    playerMove();

  }

  function playerMove(){
    $('.container').children().click(function(){
      boxColor = $(this).attr('id');
      attempt.push(boxColor);
      console.log(attempt.length);
      $(this).fadeOut(150).fadeIn(250);
      colorIndex = colorsArray; //pushes value of boxcolor into Attempt array
      if(boxColor === 'red'){
        redAudio.play();
      }      else if (boxColor === 'blue'){
        blueAudio.play();
      }      else if (boxColor === 'yellow'){
        yellowAudio.play();
      }      else if (boxColor === 'green'){
        greenAudio.play();
      }
      // if(attempt.length !== CurrentGame.length){
      //
      //   console.log(attempt.attr.htm);
      // }
      // else{
      //   console.log(attempt.attr);
      // }
    });

  }




});
