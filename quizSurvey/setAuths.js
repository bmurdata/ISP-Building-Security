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
let arrindex=[]

for(let i=1;i<28;i++){
  if(i<10){
    arrindex.push("0"+i.toString());
  }
  else{
    arrindex.push(i.toString());
  }
}
console.log(arrindex);

// Generate the seed string
shuffle(arrindex);
let newSeed="";
for(let i=0;i<10;i++){
  newSeed += arrindex[i];
}
console.log("Generated seed is: "+newSeed);
document.getElementsByClassName("seed")[0].value=newSeed;
let arrSeed=newSeed.match(/.{1,2}/g);
let seededImgs=document.getElementsByClassName("auth_img_containter")[0];
let containers=[document.createElement("div"),document.createElement("div"),document.createElement("div"),document.createElement("div")];

let countDiv=0;
// use 10 for 9 contenders, 7 for 6
      for(let i=0;i<7;i++){
        let arNum=Number(arrSeed[i])-1;
        let img=document.createElement("img");
        img.className="img_auth";
        img.src=authImages[arNum][2];
        
        if(i%3==0){
          containers[countDiv].className="auth_img_div";
          seededImgs.appendChild(containers[countDiv]);
          countDiv+=1;
          containers[countDiv].appendChild(img);
        }
        else{
          containers[countDiv].appendChild(img);
        }
        console.log(i);
      }