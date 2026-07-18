// =============================
// ELEMENTS
// =============================

const screens = document.querySelectorAll(".screen");

const passwordScreen = document.getElementById("passwordScreen");
const giftScreen = document.getElementById("giftScreen");
const birthday = document.getElementById("birthday");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const reasons = document.getElementById("reasons");
const wish = document.getElementById("wish");
const game = document.getElementById("game");
const final = document.getElementById("final");

const music = document.getElementById("music");




// =============================
// SCREEN CHANGE
// =============================

function showScreen(screen){

    screens.forEach(item=>{
        item.classList.remove("active");
    });

    screen.classList.add("active");

}





// =============================
// LOADING
// =============================

setTimeout(()=>{

    showScreen(passwordScreen);

},3500);







// =============================
// PASSWORD
// =============================

const unlockBtn =
document.getElementById("unlockBtn");


unlockBtn.addEventListener("click",()=>{


const password =
document.getElementById("password").value.trim();


if(password === "19052026"){

    showScreen(giftScreen);

}

else{

document.getElementById("error").innerHTML =
"Wrong password 🥺 Try again ❤️";

}


});








// =============================
// GIFT OPEN
// =============================


document
.getElementById("giftBox")
.addEventListener("click",()=>{


music.play().catch(()=>{});


showScreen(birthday);


createHearts();

createSparkles();


});









// =============================
// FLOATING HEARTS
// =============================


function createHearts(){


for(let i=0;i<20;i++){


const heart =
document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left =
Math.random()*100+"vw";


heart.style.bottom="0";


heart.style.fontSize =
Math.random()*20+20+"px";


heart.style.zIndex="10";


heart.style.animation =
"float 4s linear";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},4000);



}


}










// =============================
// SPARKLES
// =============================


function createSparkles(){


for(let i=0;i<25;i++){


const sparkle =
document.createElement("div");


sparkle.innerHTML="✨";


sparkle.style.position="fixed";


sparkle.style.left =
Math.random()*100+"vw";


sparkle.style.top =
Math.random()*80+"vh";


sparkle.style.fontSize="25px";


sparkle.style.zIndex="10";


document.body.appendChild(sparkle);



setTimeout(()=>{

sparkle.remove();

},1500);


}


}










// =============================
// LETTER
// =============================


let typingTimer;


document
.getElementById("letterBtn")
.addEventListener("click",()=>{


showScreen(letter);



const message = `Happy Birthday Tarun ❤️

I hope your day is filled with happiness, smiles and beautiful memories.

Thank you for being my favourite person.

You make normal moments special and your presence means a lot to me.

Even when we are far away, you are always close to my heart.

Keep smiling, keep chasing your dreams and always remember someone is always cheering for you.

I love you ❤️

- Jassu`;



typeText(message);


});





function typeText(text){


const box =
document.getElementById("letterText");


box.innerHTML="";


clearInterval(typingTimer);


let index=0;


typingTimer =
setInterval(()=>{


box.innerHTML += text[index];


index++;


if(index >= text.length){

clearInterval(typingTimer);

}


},45);


}









// =============================
// NAVIGATION BUTTONS
// =============================


document
.getElementById("galleryBtn")
.addEventListener("click",()=>{

showScreen(gallery);

});



document
.getElementById("reasonBtn")
.addEventListener("click",()=>{

showScreen(reasons);

});



document
.getElementById("starBtn")
.addEventListener("click",()=>{

showScreen(wish);

});









// =============================
// WISH STAR
// =============================


document
.getElementById("wishStar")
.addEventListener("click",()=>{


document.getElementById("wishMessage")
.innerHTML =
"✨ I wish all your dreams come true, Tarun ❤️";


createSparkles();


});









// =============================
// GAME
// =============================


let score = 0;


const heart =
document.getElementById("catchHeart");


const scoreText =
document.getElementById("score");


const gameArea =
document.getElementById("gameArea");





document
.getElementById("gameBtn")
.addEventListener("click",()=>{


score=0;


scoreText.innerHTML="0";


showScreen(game);


moveHeart();


});







function moveHeart(){


const maxX =
gameArea.clientWidth - 70;


const maxY =
gameArea.clientHeight - 70;



heart.style.left =
Math.random()*maxX+"px";


heart.style.top =
Math.random()*maxY+"px";


}







function catchHeart(){


score++;


scoreText.innerHTML=score;



if(score >= 10){


showScreen(final);


createSparkles();


return;


}



moveHeart();


}







heart.addEventListener("click",catchHeart);



heart.addEventListener("touchstart",(e)=>{

e.preventDefault();

catchHeart();

});
