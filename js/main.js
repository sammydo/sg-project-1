/* global Simon */

//creating an object with all the proroperties of the simon game
$(document).ready(function(){
  var simon = new Simon();
  var level = 0;

// Start Button
  $('#start-btn').on('click', function() {
    if ($(this).html() === 'Start') {
      newGame(); //Runs new Game functions
    }
  });

// Reset Button
  $('#reset-btn').on('click', function() {
    if ($(this).html() === 'Reset') {
      resetGame();
    }
  });


  function resetGame() {
    simon.currentGame = [];
    simon.attempts = [];
    console.log(simon.currentGame, simon.attempts);
    $('#score').html('0');
  }


  function newGame() {
    simon.currentGame = [];
    simon.attempts = [];
    level = 0;
    addLevel();

  }

  function addLevel() {
    level++;
    wonGame();
    $('#score').addClass('animated fadeOutDown');
    setTimeout(function(){
      $('#score').removeClass('fadeOutDown').html(level).addClass('fadeInDown');
    }, 200);
    generateMove();
  }

  function generateMove(){
    simon.currentGame.push(simon.getRandomButton());
    console.log(simon.currentGame);
    fadeNplay();
    playerMove();

  }


  function fadeNplay(callback){
    // console.log('fadeNplay: currentGame:', simon.currentGame);
    for (var i=0; i < simon.currentGame.length; i++) {
    // console.log(simon.currentGame[i]);
      (function(i) {
        window.setTimeout(function () {

          var currentColorName = simon.currentGame[i].color;
          simon.playColor(currentColorName);
        }, 1000 * i);
      })(i);
    }
  }


  function playerMove(){
    $('.container .game_color').click(function(){

      var clickedBoxColor = $(this).attr('id');
      // simon.playColor(clickedBoxColor)
      var clickedSimonButton = simon.getButtonForColor(clickedBoxColor);
      simon.attempts.push(clickedSimonButton);

      console.log('attempts:', simon.attempts, 'currentGame:', simon.currentGame);
      if(JSON.stringify(simon.attempts) === JSON.stringify(simon.currentGame)){
        LevelCheck();
      }      else{
        simon.attempts.splice(-1 , 1);
        console.log('nooo');
      }
    });
  }


  function LevelCheck(){
    if(JSON.stringify(simon.attempts) === JSON.stringify(simon.currentGame) && simon.attempts.length === simon.currentGame.length){
      setTimeout(function(){
        addLevel();
      }, 1000);
    }    else{
      playerMove();
    }
  }


  function wonGame(){
    if(level === 21){
      setTimeout(function(){
        $('#score').removeClass('fadeOutDown').html('I win').addClass('fadeInDown');
      }, 201);
      console.log('wonnn');
    }
  }

});
