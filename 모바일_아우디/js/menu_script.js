const mainNavLis = document.querySelectorAll('.main_nav > li');

mainNavLis.forEach(mainNavLi => {

  mainNavLi.onclick = (e) => e.target.parentNode.classList.toggle('active');

  mainNavLi.onmouseleave = (e) => e.target.classList.remove("active");

});

/*
const mainNavLis = document.querySelectorAll('.main_nav > li');

mainNavLis.forEach(mainNavLi => {

  //mainNavLi.addEventListener('click', function(e){
  mainNavLi.addEventListener('click', (e)=>{
    e.target.parentNode.classList.toggle('active');
  });
  
  //mainNavLi.onmouseleave = function(e){
  mainNavLi.onmouseleave = (e) => {
    e.target.classList.remove('active');
  }
  
});
*/



/*
const mainNavLis = document.querySelectorAll('.main_nav > li');

mainNavLis[0].addEventListener('click', (e) => {
  e.target.parentNode.classList.toggle('active');
});
mainNavLis[1].addEventListener('click', (e) => {
  e.target.parentNode.classList.toggle('active');
});
mainNavLis[2].addEventListener('click', (e) => {
  e.target.parentNode.classList.toggle('active');
});
mainNavLis[3].addEventListener('click', (e) => {
  e.target.parentNode.classList.toggle('active');
});
mainNavLis[4].addEventListener('click', (e) => {
  e.target.parentNode.classList.toggle('active');
});
mainNavLis[5].addEventListener('click', (e) => {
  e.target.parentNode.classList.toggle('active');
});
mainNavLis[6].addEventListener('click', (e) => {
  e.target.parentNode.classList.toggle('active');
});
*/



/*
const menuLi1 = document.querySelector('.menu_li_1');
const menuLi2 = document.querySelector('.menu_li_2');
const menuLi3 = document.querySelector('.menu_li_3');
const menuLi4 = document.querySelector('.menu_li_4');
const menuLi5 = document.querySelector('.menu_li_5');
const menuLi6 = document.querySelector('.menu_li_6');
const menuLi7 = document.querySelector('.menu_li_7');

menuLi1.addEventListener('click', () => {
  menuLi1.classList.toggle('active');
});
menuLi2.addEventListener('click', () => {
  menuLi2.classList.toggle('active');
});
menuLi3.addEventListener('click', () => {
  menuLi3.classList.toggle('active');
});
menuLi4.addEventListener('click', () => {
  menuLi4.classList.toggle('active');
});
menuLi5.addEventListener('click', () => {
  menuLi5.classList.toggle('active');
});
menuLi6.addEventListener('click', () => {
  menuLi6.classList.toggle('active');
});
menuLi7.addEventListener('click', () => {
  menuLi7.classList.toggle('active');
});
*/





