const display= document.getElementById("display");
function append(i){
display.value+=i;
}
function clearDis(){
 display.value = "";
}
function calculate(){
    try{
 display.value=eval(display.value);
}
catch(err){
    display.value="Error"
}
}