const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//targets
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

//event listener on buttons
hexBtn.addEventListener('click',getHex);
function getHex(){
  let hexCol = '#'; /*hexColor is my 1st varible
  I will want to generate A,B... from possible 0,1,2...
  So I'll have a for loop that picks nums 6 times from array*/
  for(let i=0; i<6; i++){
    let random = Math.floor(Math.random()*hexNumbers.length);
    //console.log(random);
    hexCol +=hexNumbers[random];
    //console.log(hexCol);
  }
  bodyBcg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
}
