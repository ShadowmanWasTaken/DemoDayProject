let effect = "sounds/coins.mp3";
let select = "sounds/select.mp3"

let enders = 0; 

let rightCount = 0; 
let leftCount = 0; 
let indexCount = 1; 
let moneyCounter = 0;   


var balance = Number(document.getElementById("amount").innerHTML);

let sliders = 0; 
let submitCounter = 0;
let selectCount = 0; 
let arrayCount = 0; 
let increment = 0; 

//image declarations
let rightImage = document.getElementById("rightimg");
let leftImage = document.getElementById("leftimg");
let rightImage2 = document.getElementById("rightimg2");
let leftImage2 = document.getElementById("leftimg2");
let rightImage3 = document.getElementById("rightimg3");
let leftImage3 = document.getElementById("leftimg3");
let rightImage4 = document.getElementById("rightimg4");
let leftImage4 = document.getElementById("leftimg4");
let rightImage5 = document.getElementById("rightimg5");
let leftImage5 = document.getElementById("leftimg5");
let rightImage6 = document.getElementById("rightimg6");
let leftImage6 = document.getElementById("leftimg6");
let rightImage7 = document.getElementById("rightimg7");
let leftImage7 = document.getElementById("leftimg7");
let rightImage8 = document.getElementById("rightimg8");
let leftImage8 = document.getElementById("leftimg8");


let prompt = document.getElementById("prompt");
prompt.innerHTML = "Prompt: " + "Your school laptop just broke down and you need a new one."




//button declarations
let button = document.querySelector("#submit");
let button2 = document.querySelector("#submit2");
let button3 = document.querySelector("#submit3");
let button4 = document.querySelector("#submit4");
let button5 = document.querySelector("#submit5");
let button6 = document.querySelector("#submit6");
let button7 = document.querySelector("#submit7");
let button8 = document.querySelector("#submit8");

let begin = document.getElementById("start");





//event listeners 
button.addEventListener("click", testOut);
button2.addEventListener("click", testOut);
button3.addEventListener("click", testOut);
button4.addEventListener("click", testOut);
button5.addEventListener("click", testOut);
button6.addEventListener("click", testOut);
button7.addEventListener("click", testOut);
button8.addEventListener("click", testOut);

begin.addEventListener("click",beginner)


rightImage.addEventListener("click", submitRight);
leftImage.addEventListener("click", submitLeft);
rightImage2.addEventListener("click", submitRight);
leftImage2.addEventListener("click", submitLeft);
rightImage3.addEventListener("click", submitRight);
leftImage3.addEventListener("click", submitLeft);
rightImage4.addEventListener("click", submitRight);
leftImage4.addEventListener("click", submitLeft);
rightImage5.addEventListener("click", submitRight);
leftImage5.addEventListener("click", submitLeft);
rightImage6.addEventListener("click", submitRight);
leftImage6.addEventListener("click", submitLeft);
rightImage7.addEventListener("click", submitRight);
leftImage7.addEventListener("click", submitLeft);
rightImage8.addEventListener("click", submitRight);
leftImage8.addEventListener("click", submitLeft);






//Select Images 

function submitRight(){


if(rightCount == 0){
  soundPlay(select);
  document.getElementById("selected2").style.opacity = 1;
  document.getElementById("selected").style.opacity = 0;
   
    console.log("fice");
    selectCount = 2;
   
}




}



function submitLeft(){

  if(leftCount == 0){
    soundPlay(select);
    document.getElementById("selected2").style.opacity = 0;
    document.getElementById("selected").style.opacity = 1;
    
   
    console.log("fling");

    selectCount = 1;
  }


}
//when button is pressed
function testOut(e){
  if(selectCount ==1 || selectCount ==2){
  balance = Number(document.getElementById("amount").innerHTML);
increment = 0; 
 
  let temp = balance;
    e.preventDefault();
    console.log("SENDDD");
    document.getElementById("selected2").style.opacity = 0; //removes select button 
    document.getElementById("selected").style.opacity = 0;

    if(selectCount == 1){
      increment = data.itemList[arrayCount].items[0].price;  //sets increment to item price
      console.log(increment);
      arrayCount++;
    }
    else if(selectCount == 2){
      increment = data.itemList[arrayCount].items[1].price;
      arrayCount++;
    }
    soundPlay(effect);
    let losing = temp - increment; 
     const increase = setInterval(function(){
      document.getElementById("amount").style.color = "red";    //Decreases amount of money
      for(let i  = 0; i< 25 ; i++){
        balance--; 
        document.getElementById("amount").innerHTML = balance; 
        if(balance == temp - increment){
          clearInterval(increase);
          document.getElementById("amount").style.color = "black";
          break;
        }
  }

     }, 50);
    if(arrayCount < 8){
     prompt.innerHTML = "Prompt: " + data.itemList[arrayCount].context; //Prompt updater 
     

    }
    if(arrayCount == 8){
      if(selectCount ==1){
        enders = balance - data.itemList[7].items[0].price;
        document.getElementById("earnings").innerHTML = "$" + enders;
        console.log(enders);
      }
      else{
        enders = balance -= data.itemList[7].items[1].price;
        document.getElementById("earnings").innerHTML = "$" + enders;
      }
      document.getElementById("bank").style.opacity = 0; 
  document.getElementById("amount").style.opacity = 0; 
  document.getElementById("prompt").style.opacity = 0;

      

    }
     if(losing <= 0){
      console.log("LOGIN");
      ender();
   
   
     }

    sweeper();
    console.log(arrayCount);
    
    }
}




//carousel slider (dont really understand this entirely dont touch this)
function sweeper(){
while(selectCount != 0){
  indexCount++;
  const buttons = document.querySelectorAll("[data-carousel-button]")
  console.log("testring");
  const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex =  indexCount;                                                  //[...slides.children].indexOf(activeSlide) + offset
      //if (newIndex < 0) newIndex = slides.children.length - 1
      //if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
      selectCount = 0; 
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      //const offset = button.dataset.carouselButton === "next" ? 1 : -1
      
        
  
    })
  })
  
}
}

function beginner(){
  document.getElementById("bank").style.opacity = 1; 
  document.getElementById("amount").style.opacity = 1; 
  document.getElementById("prompt").style.opacity = 1; 

  indexCount++;
  const buttons = document.querySelectorAll("[data-carousel-button]")
  console.log("testring");
  const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex =  indexCount;                                                  //[...slides.children].indexOf(activeSlide) + offset
      //if (newIndex < 0) newIndex = slides.children.length - 1
      //if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
      selectCount = 0; 
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      //const offset = button.dataset.carouselButton === "next" ? 1 : -1
      
        
  
    })
  })

}


function ender(){
  document.getElementById("bank").style.opacity = 0; 
  document.getElementById("amount").style.opacity = 0; 
  document.getElementById("prompt").style.opacity = 0; 

  
  const buttons = document.querySelectorAll("[data-carousel-button]")
  console.log("testring");
  const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
                                                        //[...slides.children].indexOf(activeSlide) + offset
      //if (newIndex < 0) newIndex = slides.children.length - 1
      //if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[0].dataset.active = true
      delete activeSlide.dataset.active
      selectCount = 0; 
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      //const offset = button.dataset.carouselButton === "next" ? 1 : -1
      
        
  
    })
  })

}


function soundPlay(sound){
  let player = new Audio(sound);
  player.play();

}