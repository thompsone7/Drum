var numberofDrumbuttons= document.querySelectorAll(".drum").length;

for (var i = 0; i<numberofDrumbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

  function handleclick(){


var buttoninnerHTML =this.innerHTML;
makesound(buttoninnerHTML);
buttonAnimation(buttoninnerHTML);
    // this.style.color="white";
  }

}
document.addEventListener("keydown",function(event){
makesound(event.key);
buttonAnimation(event.key);
});


function makesound(key){
  switch (key) {
    case "g":
    var audio= new Audio("sounds/crash.mp3")
    audio.play();
      break;

        case "a":
        var audioA= new Audio("sounds/kick-bass.mp3")
        audioA.play();
          break;

            case "b":
            var audio= new Audio("sounds/snare.mp3")
            audio.play();
              break;

              case "r":
              var audio= new Audio("sounds/tom-1.mp3")
              audio.play();
                break;

                case "i":
                var audio= new Audio("sounds/tom-2.mp3")
                audio.play();
                  break;

                  case "e":
                  var audio= new Audio("sounds/tom-3.mp3")
                  audio.play();
                    break;

                    case "l":
                    var audio= new Audio("sounds/tom-4.mp3")
                    audio.play();
                      break;

    default:console.log(buttoninnerHTML);

  }
}

function buttonAnimation(currentkey){
  var activeButton =document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);
}
