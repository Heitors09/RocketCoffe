const img = document.querySelector('.coffee')

const body = document.querySelector('body')

const larguraBody = body.offsetWidth

const headerCreated = false;

const buttonMenu = document.getElementById('button-menu')

const menuOpen = document.querySelector('.menu-mobile-open')

let button = false;

window.addEventListener('resize',()=>{
    const img = document.querySelector('.coffee')
    const body = document.querySelector('body')
    const larguraBody = body.offsetWidth 
    
    if(larguraBody <= 425){
        img.src = './assets/rocket-coffe-mobile.png'
    }else{
        img.src ='./assets/klipartz.com (1).png'
    }   
})


buttonMenu.addEventListener('click',()=>{

    const menuOpen = document.querySelector('.menu-mobile-open')
    const blurMobile = document.querySelector('.blur-mobile')
    
  if(!button){
    buttonMenu.style.backgroundImage = "url(./assets/menu-buguer-close.svg)";
    menuOpen.style.right = '0';
    blurMobile.style.display = 'none';
    img.style.display = 'none'; 
    
      }else{
        buttonMenu.style.backgroundImage = "url(./assets/menu-buguer-open.svg)"
        menuOpen.style.right = '-100%';
        blurMobile.style.display = 'block';
        img.style.display = 'block'; 
      }

         button = !button;
})



