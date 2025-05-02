//menu toggle
const menu = document.querySelector('.menu');
const icon_menu = document.querySelector('.menu img');
const nav = document.querySelector('.navi')


menu.addEventListener('click', function () {
  this.classList.toggle('active');
  const navHeight = nav.scrollHeight;

  console.log(navHeight)
  if(this.classList.contains('active')) {
    icon_menu.setAttribute('src', 'images/close.svg');
    nav.style.heigth = navHeight + 'px';
  }
  else {
    icon_menu.setAttribute('src', 'images/menu.svg');
    nav.style.height = 0;
  }


  // this.classList.contains('active')
  //   ? icon_menu.setAttribute('src', 'images/close.svg')
  //   : icon_menu.setAttribute('src', 'images/menu.svg');
  // 삼항 연산자작성
});

// navigation Activeate
const navs = document.querySelectorAll('.navi li');
navs.forEach((nav, idx) => {
  nav.addEventListener('click', function () {
    navs.forEach((nav) => {
      nav.classList.remove('active');
    });
    this.classList.add('active');
  });
});
