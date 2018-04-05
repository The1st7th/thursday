
var player = "X";
var playerX=[];
var playerO=[];
var check;
var results=[[1,2,3],[4,5,6],[7,8,9],[2,4,8],[1,4,7],[7,5,3],[1,5,9]];

function winner(playerW){
for (var i = 0; i < results.length; i++){
  if(playerW[0] == results[i][0]){

    for (var j = 1; j < playerW.length;j++){
      if ( playerW[j]== results[i][1]){


        for (var j = 1; j < playerW.length;j++){
          if ( playerW[j] == results[i][2] ){
            $(".playerTurn").text("it is the player "+ player +" won");
            check = true;

      }
    }
  }
}
}
}
}


function play(box){
  check = false
  if (box.innerHTML == ""){
  if (player === "X"){
  box.innerHTML = player;


  playerX.push(parseInt(box.id));
  playerX.sort(function(a, b){return a - b});
  console.log("playerX "+ playerX);

winner(playerX);
if( check == false){
player = "O";
$(".playerTurn").text("it is the player "+ player+" turn");
}else{
  return;
}


}
 else if (player === "O"){
box.innerHTML = player;


playerO.push(parseInt(box.id));
playerO.sort(function(a, b){return a - b});
console.log("playerO "+ playerO);

winner(playerO);
if(check == false){
player = "X";
$(".playerTurn").text("it is the player "+player+" turn");
}else{
  return;
}

}
}
else {
alert("not allowed to replace a box");
}
}

//''|| player[0]== 4 ||player[0] == 7||player[0] == 2 ||player[0] ==3
