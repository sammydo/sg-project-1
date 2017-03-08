/* global Simon */

//creating an object with all the proroperties of the simon game
$(document).ready(function(){
  var simon = new Simon();
  var level = 0;
  var index = 0;

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

  function clearGame() {
    simon.currentGame = [];
    level = 0;
    addLevel();
  }
//new game function setting the game to level 0 with an empty array
  function newGame() {
    clearGame();
  }

  function resetGame() {
    simon.currentGame = [];
    simon.attempts = [];
    console.log(simon.currentGame);

    console.log(simon.attempts);
    $('#score').html('0');
  }




  function generateMove(){
    // for (var i = 10; i > simon.currentGame.length; i++) {
    simon.currentGame.push(simon.getRandomButton());
    // }
    showMoves();
    fadeNplay();
    playerMove();
  }
  function showMoves() {
    var i = 0;
    var moves = setInterval(function(){
      i++;
      if (i >= simon.currentGame.length) {
        clearInterval(moves);
      }
    }, 600);

    clearAttempt();
  }

  function clearAttempt() {
    simon.attempts = [];
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
      // console.log('attempts:', simon.attempts, 'currentGame:', simon.currentGame);
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
      // if(JSON.stringify(simon.attempts) === JSON.stringify(simon.currentGame)){
      //   generateMove();
      // }      else{
      //   simon.currentGame = [];
      //   simon. attempts = [];
      // }
      if(simon.areAttemptsCorrect()=== false){
        simon.attempts = [];
        console.log('wrong');
      } else {
        var check = simon.attempts.length === simon.currentGame.length;
        if (check) {
          if(level === 20){
            alert('You won! Congrats.');
          } else {
            alert('Next round!');
            nextLevel();
          }
        }
      }
    });

  }


  function nextLevel() {
    addLevel();
  }

  function addLevel() {
    level++;
    $('#score').addClass('animated fadeOutDown');

    setTimeout(function(){
      $('#score').removeClass('fadeOutDown').html(level).addClass('fadeInDown');
    }, 200);

    generateMove();

  }

  newGame();
});
