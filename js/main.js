/* global Simon */

//creating an object with all the proroperties of the simon game
$(document).ready(function(){
  var simon = new Simon();
  var level = 0;

  $('#start-btn').on('click', function() {
    if ($(this).html() === 'Start') {
      newGame();
    }
  });


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


//new game function setting the game to level 0 with an empty array
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


  function flashElement($element) {
    $element.fadeOut(150).fadeIn(250);
  }


  function fadeNplay(){
    // console.log('fadeNplay: currentGame:', simon.currentGame);
    for (var i=0; i < simon.currentGame.length; i++) {
    console.log(simon.currentGame[i]);
      simon.playColor([i]);
      // flashElement(tot);
      if(simon.currentGame[i] === 'red'){
        flashElement($('#red'));
        console.log('red');
      } else if (simon.currentGame[i.color] === ('yellow')){
console.log('yellow');
        simon.playColor('yellow');
        flashElement($('#yellow'));
      } else if (simon.currentGame[i.color] === ('blue')){
        console.log('blue');
        simon.playColor('blue');
        flashElement($('#blue'));
      } else if (simon.currentGame[i.color] === ('green')){
         console.log('green');
        simon.playColor('green');
        flashElement($('#green'));
      }
    }




    // JSON.stringify(simon.currentGame).forEach(function(entry) {
    //     console.log(entry);
    // });

    // console.log( .currentGame);
    // console.log(Object.keys(simon.currentGame));

  }

  function playerMove(){
    $('.container').children().click(function(){
      var clickedBoxColor = $(this).attr('id');
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
    // for (var i=0,  tot=simon.currentGame.length; i < tot; i++) {
    //   console.log(simon.currentGame[i]);
    //   // flashElement(tot);
    // }
  }


  function LevelCheck(){
    if(JSON.stringify(simon.attempts) === JSON.stringify(simon.currentGame) && simon.attempts.length === simon.currentGame.length){
      setTimeout(function(){
        simon.attempts = [];
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
