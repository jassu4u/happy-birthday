// =============================
// ELEMENTS
// =============================

const loading = document.getElementById("loading");
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
// SCREEN CHANGE FUNCTION
// =============================

function showScreen(screen){

    document.querySelectorAll(".screen")
    .forEach(section=>{

        section.classList.remove("active");

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


document
.getElementById("unlockBtn")
.addEventListener("click",()=>{


let entered =
document.getElementById("password")
.value
.trim();



if(entered==="19052026"){


showScreen(giftScreen);


}

else{


document.getElementById("error")
.innerHTML =
"Wrong password 🥺 Try again ❤️";


}


});








// =============================
// GIFT OPEN
// =============================


document
.getElementById("giftBox")
.addEventListener("click",()=>{


// start music

music.play()
.catch(()=>{});



showScreen(birthday);



createHearts();

createSparkles();


});








// =============================
// HEART EFFECT
// =============================


function createHearts(){


for(let i=0;i<15;i++){


let heart =
document.createElement("div");


heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=
Math.random()*100+"vw";


heart.style.bottom="0";


heart.style.fontSize="25px";


heart.style.animation=
"float 4s linear";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},4000);



}


}







// =============================
// SPARKLE FIREWORK
// =============================


function createSparkles(){


for(let i=0;i<20;i++){


let sparkle =
document.createElement("div");


sparkle.innerHTML="✨";


sparkle.style.position="fixed";

sparkle.style.left=
Math.random()*100+"vw";


sparkle.style.top=
Math.random()*70+"vh";


sparkle.style.fontSize="25px";


document.body.appendChild(sparkle);



setTimeout(()=>{

sparkle.remove();

},1500);


}


}








// =============================
// LOVE LETTER
// =============================


document
.getElementById("letterBtn")
.addEventListener("click",()=>{


showScreen(letter);



let message =
`Happy Birthday Tarun ❤️

I hope your day is filled with happiness, smiles and beautiful memories.

Thank you for being my favourite person.

You make normal moments special and your presence means a lot to me.

Even when we are far away, you are always close to my heart.

Keep smiling, keep chasing your dreams and always remember that someone is always cheering for you.

I love you ❤️

- Jassu`;



typeText(message);


});






function typeText(text){


let box =
document.getElementById("letterText");


box.innerHTML="";


let i=0;


let typing =
setInterval(()=>{


box.innerHTML += text[i];


i++;


if(i>=text.length){

clearInterval(typing);

}


},40);



}








// =============================
// GALLERY
// =============================


document
.getElementById("galleryBtn")
.addEventListener("click",()=>{


showScreen(gallery);


});








// =============================
// REASONS
// =============================


document
.getElementById("reasonBtn")
.addEventListener("click",()=>{


showScreen(reasons);


});








// =============================
// WISH STAR
// =============================


document
.getElementById("starBtn")
.addEventListener("click",()=>{


showScreen(wish);


});




document
.getElementById("wishStar")
.addEventListener("click",()=>{


document.getElementById("wishMessage")
.innerHTML =

"✨ I wish all your dreams come true, Tarun ❤️";


});








// =============================
// MINI GAME
// =============================


let score = 0;


const heart =
document.getElementById("catchHeart");



document
.getElementById("gameBtn")
.addEventListener("click",()=>{


score=0;

document.getElementById("score")
.innerHTML="0";


showScreen(game);


moveHeart();


});






heart.addEventListener("click",()=>{


score++;


document.getElementById("score")
.innerHTML=score;



moveHeart();



if(score>=10){


showScreen(final);


createSparkles();


}



});





function moveHeart(){


heart.style.left =
Math.random()*70 + 10 + "%";


heart.style.top =
Math.random()*60 + 20 + "%";


}
// =============================
// ELEMENTS
// =============================

const loading = document.getElementById("loading");
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
// SCREEN CHANGE FUNCTION
// =============================

function showScreen(screen){

    document.querySelectorAll(".screen")
    .forEach(section=>{

        section.classList.remove("active");

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


document
.getElementById("unlockBtn")
.addEventListener("click",()=>{


let entered =
document.getElementById("password")
.value
.trim();



if(entered==="19052026"){


showScreen(giftScreen);


}

else{


document.getElementById("error")
.innerHTML =
"Wrong password 🥺 Try again ❤️";


}


});








// =============================
// GIFT OPEN
// =============================


document
.getElementById("giftBox")
.addEventListener("click",()=>{


// start music

music.play()
.catch(()=>{});



showScreen(birthday);



createHearts();

createSparkles();


});








// =============================
// HEART EFFECT
// =============================


function createHearts(){


for(let i=0;i<15;i++){


let heart =
document.createElement("div");


heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=
Math.random()*100+"vw";


heart.style.bottom="0";


heart.style.fontSize="25px";


heart.style.animation=
"float 4s linear";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},4000);



}


}







// =============================
// SPARKLE FIREWORK
// =============================


function createSparkles(){


for(let i=0;i<20;i++){


let sparkle =
document.createElement("div");


sparkle.innerHTML="✨";


sparkle.style.position="fixed";

sparkle.style.left=
Math.random()*100+"vw";


sparkle.style.top=
Math.random()*70+"vh";


sparkle.style.fontSize="25px";


document.body.appendChild(sparkle);



setTimeout(()=>{

sparkle.remove();

},1500);


}


}








// =============================
// LOVE LETTER
// =============================


document
.getElementById("letterBtn")
.addEventListener("click",()=>{


showScreen(letter);



let message =
`Happy Birthday Tarun ❤️

I hope your day is filled with happiness, smiles and beautiful memories.

Thank you for being my favourite person.

You make normal moments special and your presence means a lot to me.

Even when we are far away, you are always close to my heart.

Keep smiling, keep chasing your dreams and always remember that someone is always cheering for you.

I love you ❤️

- Jassu`;



typeText(message);


});






function typeText(text){


let box =
document.getElementById("letterText");


box.innerHTML="";


let i=0;


let typing =
setInterval(()=>{


box.innerHTML += text[i];


i++;


if(i>=text.length){

clearInterval(typing);

}


},40);



}








// =============================
// GALLERY
// =============================


document
.getElementById("galleryBtn")
.addEventListener("click",()=>{


showScreen(gallery);


});








// =============================
// REASONS
// =============================


document
.getElementById("reasonBtn")
.addEventListener("click",()=>{


showScreen(reasons);


});








// =============================
// WISH STAR
// =============================


document
.getElementById("starBtn")
.addEventListener("click",()=>{


showScreen(wish);


});




document
.getElementById("wishStar")
.addEventListener("click",()=>{


document.getElementById("wishMessage")
.innerHTML =

"✨ I wish all your dreams come true, Tarun ❤️";


});








// =============================
// MINI GAME
// =============================


let score = 0;


const heart =
document.getElementById("catchHeart");



document
.getElementById("gameBtn")
.addEventListener("click",()=>{


score=0;

document.getElementById("score")
.innerHTML="0";


showScreen(game);


moveHeart();


});






heart.addEventListener("click",()=>{


score++;


document.getElementById("score")
.innerHTML=score;



moveHeart();



if(score>=10){


showScreen(final);


createSparkles();


}



});





function moveHeart(){


heart.style.left =
Math.random()*70 + 10 + "%";


heart.style.top =
Math.random()*60 + 20 + "%";


}
