const display = document.getElementById("display")
var isPointed = false;
var justCalc = false;
var isOpperator = false;

function appendToDisplay(input){
if(!justCalc){display.value += input
isOpperator = false;}
}






function appendOpperatorToDisplay(input){
  isPointed = false;
  justCalc = false;
  if(!isOpperator){
  display.value += input;
  isOpperator = true;}

}

function appendPointToDisplay(input){
if(!isPointed){
    display.value += input;
    isPointed = true;
}



}

function clearDisplay(){
display.value = "";
justCalc = false;
isPointed = false;
isOpperator = false;
}



function calculate(){
    try{display.value = eval(display.value)
    justCalc = true;
    isPointed = true;
    isOpperator = false;
    }
 
    catch{
        display.value = "Error"
    }

}

function deleteDisplay(){
    var displayValue = display.value

    if(displayValue.length > 0){
        displayValue = displayValue.slice(0, -1)
    }

    display.value = displayValue
}