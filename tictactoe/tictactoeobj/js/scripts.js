
function Player(name) {
  this.name = name;
  this.position = [];
}

var results=[[1,2,3],[4,5,6],[7,8,9],[2,4,8],[1,4,7],[7,5,3],[1,5,9]];

function (playerW){
for (var i = 0; i < results.length; i++){
  if(playerW[0] == results[i][0]){

    for (var j = 1; j < playerW.length;j++){
      if ( playerW.position[j]== results[i][1]){


        for (var j = 1; j < playerW.length;j++){
          if ( playerW.position[j] == results[i][2] ){
            $(".playerTurn").text("it is the player "+ player +" won");

      }
    }
  }
}
}
}
}


function play(box){
  if (box.innerHTML == ""){
  if (player === "X"){
  box.innerHTML = player;

  $(".playerTurn").text("it is the player "+player+" turn");
  playerX.push(parseInt(box.id));
  playerX.sort(function(a, b){return a - b});
  winner(playerX);

  /player = "O";




}
 else if (player === "O"){
box.innerHTML = player;

$(".playerTurn").text("it is the player "+player+" turn");
playerO.push(parseInt(box.id));
playerX.sort(function(a, b){return a - b});
winner(playerO);

player = "X";


}
}
else {
alert("not allowed to replace a box");
}
}

//''|| player[0]== 4 ||player[0] == 7||player[0] == 2 ||player[0] ==3
