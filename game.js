var options=["rock","scissors","paper","lizard","spock"];
var user, house;
var points=0;
//console.log(options[0]);
$(".game-obj").on("click",function(){
  user = $(this).attr("id");
  house = newTurn();
    //console.log(options[user]+"and"+options[house]);
  let result = checkWinner();
  //console.log(result);
  var message;
  if(result===0){message="DRAW"}
  else if(result===1){message="YOU WIN"}
  else{message="YOU LOSE"}

  print(message);

  $(".score").text(points);
});


function newTurn(){
  let idx = Math.floor(Math.random()*5);
  let houseChoice = options[idx];
  return houseChoice;
}


function checkWinner(){
  let result=0;
  if(user===house)
  {
    result=0;
    return result;
  }
  if(user==="rock")
  {
    if(house==="paper" || house==="spock")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(user==="scissors")
  {
    if(house==="rock" || house==="spock")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(user==="paper")
  {
    if(house==="scissors" || house==="lizard")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(user==="spock")
  {
    if(house==="paper" || house==="lizard")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(user==="lizard")
  {
    if(house==="scissors" || house==="rock")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(result===-1){points--;}
  else if(result===1){points++;}
  //console.log("Points:"+points);
  return result;
}

function print(msg){
  $("#play-game").addClass("hide");
  $("#result").removeClass("hide");

  $(".message h1").text(msg);

  let userImg = "images/icon-"+user+".svg";
  let houseImg = "images/icon-"+house+".svg";

  $(".you-chose img").attr("src",userImg);
  $(".user-choice").addClass(user);

  $(".i-chose img").attr("src",houseImg);
  $(".house-choice").addClass(house);
}

$(".play-again").on("click", function(){
  $("#play-game").removeClass("hide");
  $("#result").addClass("hide");

  $(".user-choice").removeClass(user);
  $(".house-choice").removeClass(house);
});

$(".rules").on("click", function(){
  $(".rules-disp").removeClass("hide");
  $(".toggle-rules").addClass("blackout");
});
$(".closebt").on("click", function(){
  $(".rules-disp").addClass("hide");
  $(".toggle-rules").removeClass("blackout");
});
