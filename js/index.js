// Your code goes here
// Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//  mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick

const firstBtn = document.querySelector('.btn');
firstBtn.addEventListener('mouseover', function(event){
 event.target.style.color = "yellow";
 setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

const bouncyBtn = document.querySelector('.btn');
bouncyBtn.addEventListener('click', function(event){
    TweenLite.to("#bouncyBtn", 2.5, { ease: Bounce.easeOut, y: 100 });
    setTimeout(function(){
        TweenLite.to("#bouncyBtn", 2.5, { ease: Bounce.easeOut, y: 0 }) 
    },4000)
})


const secondBtn = document.querySelectorAll('.btn')[1];
secondBtn.addEventListener('dblclick', function(event){
    alert ('You just double clicked me!');
})

const thirdBtn = document.querySelectorAll('.btn')[2];
thirdBtn.addEventListener('mouseover', function(event){
    thirdBtn.classList.toggle('large');
})

const thirdBtnClick = document.querySelectorAll('.btn')[2];
thirdBtnClick.addEventListener('click', function(event){
    alert ('I do not like to be clicked!')
})

const anchorTag = document.querySelector('a');
anchorTag.addEventListener('click', function(event){
    alert (`You're already on the home page silly!`);
})

const funBus = document.querySelector('img');
funBus.addEventListener('click', function(event){
    TweenLite.to("#bus", 2.5, { ease: Elastic.easeIn.config(1, 0.3), y: -500 });
    setTimeout(function(){
        TweenLite.to("#bus", 2.5, { ease: Elastic.easeIn.config(1, 0.3), y: 0 })
    }, 3000)
})

const firstName = document.querySelector('body');
firstName.addEventListener('keydown', function(event){
 alert(`You can't press: ${event.key}`); 
});


const navItems = document.querySelector('nav');
navItems.addEventListener('click', function(event){
    event.preventDefault();
  });


const destinImg = document.getElementById('destiny');
destinImg.addEventListener('drag', function(event){
    TweenLite.to("#destiny", 2.5, { ease: SlowMo.ease.config(0.7, 0.7, false), x: -500 });
    setTimeout(function(){
        TweenLite.to('#destiny', 2.5, { ease: SlowMo.ease.config(0.7, 0.7, false), x: 0 });
    }, 2000)
});


  //load



  //focus

  //resize

  //scroll

  //select
  