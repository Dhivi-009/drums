
document.addEventListener("keypress", drum1);

function drum1()
{
var x=event.key;

switch (x) {
    case "q":
    var con1="sound/6.mp3";
    var audio1= new Audio(con1);
    audio1.play();
    break;

    case "w":
    var con2="sound/4.mp3";
    var audio2= new Audio(con2);
    audio2.play();
    break;

    case "e":
    var con3="sound/5.mp3";
    var audio3= new Audio(con3);
    audio3.play();
    break;

    case "r":
    var con4="sound/6.mp3";
    var audio4= new Audio(con4);
    audio4.play();
    break;

    case "t":
    var con5="sound/1.mp3";
    var audio5= new Audio(con5);
    audio5.play();
    break;

    case "y":
    var con6="sound/3.mp3";
    var audio6= new Audio(con6);
    audio6.play();
    break;

    case "u":
    var con7="sound/6.mp3";
    var audio7= new Audio(con7);
    audio7.play();
    break;

    default:
        break;
}
}


var len=document.querySelectorAll(".key").length;
for (var i = 0; i < len; i++) 
{
    document.querySelectorAll(".key")[i].addEventListener("click", drum);
}
function drum()
{
    var g=this.getAttribute("id");
    var con="sound/"+g;
    var audio= new Audio(con);
    audio.play();
}


