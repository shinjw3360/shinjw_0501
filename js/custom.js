//menu toggle
const menu = document.querySelector(".menu");
const icon_menu = document.querySelector(".menu img");

menu.addEventListener("click", function(){
  this.classList.toggle("active");
  //조건문
  // if(this.classList.contains('active')) {
  //   icon.setAttribute("class","ri-close-line");
  // } else {
  //   icon.setAttribute("class","ri-menu-line");
  // }
  
  this.classList.contains('active') ? icon_menu.setAttribute("src","images/close.svg") : icon_menu.setAttribute("src","images/menu.svg");
  // 삼항 연산자
  // this.classList.contains('active') 가 true 이면 icon.setAttribute("class","ri-close-line") ,, false면 : 뒤에 값 작성
});