console.log('sdkfxld,js');
const eat = document.querySelector('.choix1') ; 
const drink = document.querySelector('.choix2');
const menu1 = document.querySelector('.menu1') ; 
const menu2 = document.querySelector('.menu2') ; 

const granola = document.querySelector('.granola') ; 
const item2 = document.querySelector('.item2') ; 
const waffle = document.querySelector('.waffle');
const item3 = document.querySelector('.item3')

function openImg(){

} 

drink.addEventListener('click', function(){
    menu1.style.display = 'none'; 
    menu2.style.display = 'flex' ; 
}) ;

eat.addEventListener('click', function(){
    menu1.style.display = 'flex' ; 
    menu2.style.display = 'none' ; 
}) ; 

item2.addEventListener('mouseenter', function(){
    granola.style.display = "flex" ;
})

item2.addEventListener('mouseout', function(){  
        granola.style.display = "none";

});

item3.addEventListener('mouseenter', function(){
    waffle.style.display="flex" ; 
});

item3.addEventListener('mouseout', function(){
    waffle.style.display="none" ; 
});


