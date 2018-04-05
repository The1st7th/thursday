// Business logic.
var playerturn = 0;
var dice;

function Player(){
  this.score = 0;
  this.totalscore = 0;
}

Player.prototype.rollscore = function(dice){
  this.score = this.score + dice;
  this.totalscore = this.totalscore + dice;


}

function rolldice(){
  if(playerturn == 0){
    dice = Math.floor((Math.random() * 6) + 1);
    $("#dicenumber").text(dice);
    if(dice == 1){
      console.log("dice is 1");
      player1.score = 0;
      player1.totalscore =0;
      $("#player1score").text(player1.score);
      $("#player1finalscore").text(player1.totalscore);
      playerturn = 1;
      return;
    }else{
    player1.rollscore(dice);
    console.log(player1.score);
    $("#player1score").text(player1.score);
    $("#player1finalscore").text(player1.totalscore);
  }
}
  if(playerturn == 1){
    dice = Math.floor((Math.random() * 6) + 1);
    $("#dicenumber").text(dice);
    if(dice == 1){
      player2.score = 0;
      player2.totalscore =0;
      $("#player2score").text(player2.score);
      $("#player2finalscore").text(player2.totalscore);
      playerturn = 0;
      return;
    }
    else {player2.rollscore(dice);
    $("#player2score").text(player2.score);
    $("#player2finalscore").text(player2.totalscore);
  }

}
}

// UI logic.
var player1 = new Player;
var player2 = new Player;


$(document).ready(function(){

  $("body").keypress(function(e){
    if(e.keyCode == 13){
      rolldice();
    }
      });
  $(".btn").on("click",function(){
    console.log("hello");

    player1.score = 0;
    player2.score = 0;

    $("#player1score").text(player1.score);
    $("#player2score").text(player2.score);

    if(playerturn == 0){

      playerturn = 1;
      console.log("the player turn is "+playerturn);
    }
    else if(playerturn == 1){

      playerturn = 0;
      console.log("the player turn is "+playerturn);
    }
  });

});
