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
    console.log(simon.currentGame);

    console.log(simon.attempts);
    $('#score').html('0');
  }
//new game function setting the game to level 0 with an empty array
  function newGame() {
    simon.currentGame = [];
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
    for (var i = 0, l = 1; i < l; i++) {
      simon.currentGame.push(simon.getRandomButton());
    }
    fadeNplay();
    playerMove();
  }

  function flashElement($element) {
    $element.fadeOut(150).fadeIn(250);
  }

  function fadeNplay(){
    console.log('fadeNplay: currentGame:', simon.currentGame);
    if(simon.currentGame[0].color === ('red')){
      simon.playColor('red');
      flashElement($('#red'));
    } else if (simon.currentGame[0].color === ('yellow')){
      simon.playColor('yellow');
      flashElement($('#yellow'));
    } else if (simon.currentGame[0].color === ('blue')){
      simon.playColor('blue');
      flashElement($('#blue'));
    } else if (simon.currentGame[0].color === ('green')){
      simon.playColor('green');
      flashElement($('#green'));
    }
  }

  function playerMove(){
    $('.container').children().click(function(){
      var clickedBoxColor = $(this).attr('id');
      var clickedSimonButton = simon.getButtonForColor(clickedBoxColor);

      simon.attempts.push(clickedSimonButton);
      console.log('attempts:', simon.attempts, 'currentGame:', simon.currentGame);
      flashElement($(this));
      console.log(simon.areAttemptsCorrect());    // Returns true
      // if(JSON.stringify(simon.attempts) === 'red'){
      //   simon.playColor('red');
      // } else if (JSON.stringify(simon.attempts) === 'blue'){
      //   simon.playColor('blue');
      // } else if (JSON.stringify(simon.attempts) === 'yellow'){
      //   simon.playColor('yellow');
      // } else if (JSON.stringify(simon.attempts) === 'green'){
      //   simon.playColor('green');
      // }

      if(JSON.stringify(simon.attempts) === JSON.stringify(simon.currentGame)){
        console.log('yes');
      }
      else{
        console.log('nooo');
      }
    });

  }




});
