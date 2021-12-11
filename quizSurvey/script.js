// Guess,Actual,image, type[1=bag,2=coat,3=normal]
let authImages=[
      [-1,0,"images/02-bg1-90.gif","Bag"],
      [-1,0,"images/03-bg1-90.gif","Bag"],
      [-1,0,"images/01-bg1-90.gif","Bag"],
      [-1,0,"images/04-bg1-90.gif","Bag"],
      [-1,0,"images/05-cl1-90.gif","Coat"],

      [-1,0,"images/06-cl1-90.gif","Coat"],
      [-1,0,"images/07-nm1-90.gif","Normal"],
      [-1,0,"images/08-nm1-90.gif","Normal"],
      [-1,0,"images/09-cl1-90.gif","Coat"],
      [-1,0,"images/10-nm1-90.gif","Normal"],

      [-1,0,"images/11-bg1-90.gif","Bag"],
      [-1,0,"images/12-bg1-90.gif","Bag"],
      [-1,0,"images/13-bg1-90.gif","Bag"],
      [-1,0,"images/14-bg1-90.gif","Bag"],
      [-1,0,"images/15-cl1-90.gif","Coat"],

      [-1,0,"images/16-cl1-90.gif","Coat"],
      [-1,0,"images/17-cl1-90.gif","Coat"],
      [-1,0,"images/18-cl1-90.gif","Coat"],
      [-1,0,"images/19-nm1-90.gif","Normal"],
      [-1,0,"images/20-nm1-90.gif","Normal"],

      [-1,0,"images/21-nm1-90.gif","Normal"],
      [-1,0,"images/22-nm1-90.gif","Normal"],
      [-1,0,"images/23-cl1-90.gif","Coat"],
      [-1,0,"images/24-nm1-90.gif","Normal"],

      [-1,0,"images/25-bg1-90.gif","Bag"],
      [-1,0,"images/25-cl1-90.gif","Coat"],
      [-1,0,"images/25-nm1-90.gif","Normal"]
      ];


myURL="https://surveyapi.brianmurphy11.repl.co/write?";
function hitPoint(myVal){
  console.log("Hitting endpoint");
  fetch(myURL+"g="+myVal,{mode:'no-cors'});
  
}

// Shuffle code from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function setImg(arrVal,authImg){
  console.log("On image: "+arrVal);
  console.log(authImg[arrVal][2]);
  document.getElementById("toID").src=authImg[arrVal][2];
  return arrVal;
}
function setAuths(){
  let params= new URLSearchParams(location.search);
  let usrSeed=params.get('seed');
  console.log(usrSeed);
  let arrSeed=usrSeed.match(/.{1,2}/g);
  console.log("Array seed is:" +arrSeed);
  console.log("It is a "+typeof(arrSeed));
  /*for(let i=0;i<10;i++){
    console.log(i);
  }*/
  for(let i=0;i<7;i++){
    // Set authorized
    console.log(arrSeed[i]);
    console.log(Number(arrSeed[i]));
    let seedNum=Number(arrSeed[i])-1;
    console.log(authImages[seedNum]);
    authImages[seedNum][1]=1;
  }
}
function sendData(dataArray){
  console.log(dataArray);
  // Guess, Actual, image, type, seq, number
  // Hit endpoint to get data out
  console.log();
  let params= new URLSearchParams(location.search);
  let usrSeed=params.get('seed');
  let seqNum=Math.floor((Math.random()*10000));

  for(let i=0;i<10;i++){
  dataArray[i].unshift(seqNum);
  dataArray[i].unshift(usrSeed);
  fetch(myURL+"g="+dataArray[i],{mode:'no-cors'});
 }
  
}
function showResults(){
  var finished=document.createElement("div");
    finished.innerText="Your results are:";
    finished.className="results";
    document.getElementsByClassName("target")[0].appendChild(finished);
    var resList=document.createElement("ol");
    let guessTypes=[0,0,0];
    let correctGuessTypes=[0,0,0];
    let writtenTypes=["With Bag "," With Coat "," Normal "];
    let right=0;
    let wrong=0;
    let totalAuth=0;

    for(let i=0;i<10;i++){
      var resItem=document.createElement("li");
      if(authImages[i][3]=="Bag"){
            correctGuessTypes[0]+=1;
        }
        else if(authImages[i][3]=="Coat"){
            correctGuessTypes[1]+=1;
        }
        else if(authImages[i][3]=="Normal"){
            correctGuessTypes[2]+=1;
        }
      if(authImages[i][0]!=authImages[i][1]){
        var res="WRONG";
        
        wrong+=1;

      }
      else{
        var res="RIGHT";
        right+=1;
        if(authImages[i][3]=="Bag"){
            guessTypes[0]+=1;
        }
        else if(authImages[i][3]=="Coat"){
            guessTypes[1]+=1;
        }
        else if(authImages[i][3]=="Normal"){
            guessTypes[2]+=1;
        }
      }
      
      let guess=authImages[i][0]==0 ? "Unauthorized" : "Authorized"; 
      let actual=authImages[i][1]==0 ? "Unauthorized" : "Authorized"; 
      if (authImages[i][1] !=0){
        totalAuth+=1;
      }
      authImages[i].push(res);
      resItem.innerText="For item #"+(i+1)+" you guessed: "+ guess+" when it was "+ actual  +"."+ "You are: "+res;
      resList.appendChild(resItem);
    }
    document.getElementsByClassName("results")[0].append(resList);
    let newul=document.createElement("ul");
    for(let i=0;i<3;i++){
      let li=document.createElement("li");
      li.innerText="For: "+writtenTypes[i]+"You guessed correctly for "+guessTypes[i]+" out of "+correctGuessTypes[i];
      newul.appendChild(li);
    }
    let totalrightWrong=document.createElement('li');
    totalrightWrong.innerText="You were correct on: "+right+" and wrong on "+wrong;
    newul.appendChild(totalrightWrong);
    totalrightWrong.innerText="There were: "+totalAuth+" authorized people";
    newul.appendChild(totalrightWrong);
    document.getElementsByClassName("results")[0].append(newul);

}
function runSetImg(selectedVal){
  let counter=Number(document.getElementById("mynum").innerHTML);

  console.log(counter+" is where we are.");
  if(counter < 9){
    let guess=Number(selectedVal);
    authImages[counter][0]=guess;
    setImg(counter,authImages);
    document.getElementById("mynum").innerHTML=(counter+1);
  }
  else if(counter==9){
    console.log("All done!");
    let guess=Number(selectedVal);
    authImages[counter][0]=guess;
    // Get top 10- send those with the seq number, timeStamp
    
    showResults();
    sendData(authImages.slice(0,10));
    document.getElementById("mynum").innerHTML=(counter+1);
  }
  else if(counter>9){
    console.log("Not doing this again");
  }
  else{
    
  }
}
// Set the stage
setAuths();
shuffle(authImages);
console.log(authImages);
for(let i=0;i<5;i++){
  console.log(authImages[i]);
}
//Set initial image
document.getElementById('toID').src=authImages[0][2];
