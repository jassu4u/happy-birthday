// =============================
// LOADING SCREEN
// =============================

setTimeout(()=>{

    document.getElementById("loading").style.display="none";

    document.getElementById("passwordScreen").style.display="flex";

},4000);





// =============================
// PASSWORD
// =============================

function unlock(){

let password =
document.getElementById("password").value.trim();


if(password==="19052026"){


document.getElementById("passwordScreen").style.display="none";


document.getElementById("giftScreen").style.display="flex";


}

else{


document.getElementById("error").innerHTML=
"Wrong password 🥺 Try again ❤️";


}

}







// =============================
// GIFT OPEN
// =============================


function openGift(){


document.getElementById("giftScreen").style.display="none";


document.getElementById("birthday").style.display="flex";



// Start music

let music=document.getElementById("music");

music.play();



// create hearts

createHearts();



// fireworks

fireworks();



}









// =============================
// FLOATING HEARTS
// =============================


function createHearts(){


setInterval(()=>{


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=
Math.random()*100+"%";


heart.style.animationDuration=
(3+Math.random()*3)+"s";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);



},300);



}









// =============================
// FIREWORKS EFFECT
// =============================


function fireworks(){


for(let i=0;i<30;i++){


let fire=document.createElement("div");


fire.innerHTML="✨";


fire.style.position="absolute";


fire.style.left=
Math.random()*100+"%";


fire.style.top=
Math.random()*80+"%";


fire.style.fontSize=
20+Math.random()*30+"px";



document.body.appendChild(fire);



setTimeout(()=>{

fire.remove();

},2000);



}


}









// =============================
// LOVE LETTER
// =============================


function showLetter(){


document.getElementById("birthday").style.display="none";


document.getElementById("letter").style.display="flex";



let message=

`Happy Birthday Tarun ❤️

I hope your day is filled with happiness, laughter and everything you love.

Thank you for being my favourite person.

You make ordinary moments special and I feel lucky to have you in my life.

No matter the distance, you will always have a special place in my heart.

I love you ❤️

- Jassu`;



let index=0;


let typing=
document.getElementById("typing");

typing.innerHTML="";



let interval=setInterval(()=>{


typing.innerHTML += message[index];


index++;


if(index>=message.length){

clearInterval(interval);

}


},50);



}









// =============================
// GALLERY
// =============================


function showGallery(){


document.getElementById("letter").style.display="none";


document.getElementById("gallery").style.display="flex";


}








// =============================
// REASONS
// =============================


function showReasons(){


document.getElementById("gallery").style.display="none";


document.getElementById("reasons").style.display="flex";


}









// =============================
// STAR WISH
// =============================


function showStars(){


document.getElementById("reasons").style.display="none";


document.getElementById("wish").style.display="flex";


}




function wish(){


document.getElementById("wishText").innerHTML=

"I wish your dreams come true ✨❤️";


}









// =============================
// MINI GAME
// =============================


let score=0;


let heart=
document.getElementById("heartGame");



heart.onclick=function(){


score++;


document.getElementById("score").innerHTML=score;



heart.style.left=
Math.random()*80+"%";


heart.style.top=
Math.random()*70+"%";



if(score>=10){


document.getElementById("game").style.display="none";


document.getElementById("final").style.display="flex";


fireworks();



}


};
