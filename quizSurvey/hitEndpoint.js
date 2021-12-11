myURL="https://surveyapi.brianmurphy11.repl.co/write?";
function hitPoint(myVal){
  console.log("Hitting endpoint");
  console.log(myURL+"g="+myVal);
  fetch(myURL+"g="+myVal,{mode:'no-cors'});
  
}
