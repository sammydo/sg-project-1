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
      resetGame(); // Calls reset Game
    }
  });

// Sets all game paramters as empty
  function resetGame() {
    simon.currentGame = [];
    simon.attempts = [];
    console.log(simon.currentGame, simon.attempts);
    $('#score').html('0'); // Score 0
  }

// new Game sets game paramters as empty and level
  function newGame() {
    simon.currentGame = [];
    simon.attempts = [];
    level = 0;
    addLevel(); // Calls add level

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
    fadeNplay();
    playerMove();

  }


  function fadeNplay(callback){
    for (var i=0; i < simon.currentGame.length; i++) {
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
      var clickedSimonButton = simon.getButtonForColor(clickedBoxColor);
      simon.attempts.push(clickedSimonButton);
      console.log(simon.attempts);
      if(simon.attempts.length === simon.currentGame.length && JSON.stringify(simon.attempts) === JSON.stringify(simon.currentGame)){
        LevelCheck();
      }      else{
        simon.attempts.splice(-1 , 1);
      }
    });
  }


  function LevelCheck(){
    if(simon.attempts.length === simon.currentGame.length && JSON.stringify(simon.attempts) === JSON.stringify(simon.currentGame)){
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
    // console log won
    }
  }



/// ---------------------- Modal ---------------------

  (function modal() {
    'use strict';
    var dialogButton = document.querySelector('.mdl-button');
    var dialog = document.querySelector('#dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('button:not([disabled])')
  .addEventListener('click', function() {
    dialog.close();
  });
  }());

});

// ------------------ Modal ---------------
