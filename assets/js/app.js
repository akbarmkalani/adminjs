

let _wContant = document.getElementById('contant')
console.log(_wContant);
let bottonHeader = document.getElementById('botton_h').clientHeight

let _aside = document.getElementById('aside').clientWidth
const _text = document.querySelectorAll('.text')
 console.log(_text);

let _appL = document.getElementById('topUl').clientHeight
document.getElementById('topUl').style.height= "0"
console.log(_appL);




let flag = 1
let _w = 1
let sidbar = 1
document.getElementById('iconBotton_h').addEventListener('click', function () {
    if (flag % 2) {
        document.getElementById('botton_h').style.height = '0'

    } else {
        document.getElementById('botton_h').style.height = bottonHeader + 'px'

    }
    flag++
})

document.getElementById('hamburgerIcon').addEventListener("click", function () {

 
    _text.forEach((val)=>{
     
      let temp = val
       console.log(temp);
      if(_w % 2){
        temp.classList.toggle('fedIn')
      } else{
        temp.classList.toggle('fedIn')
      }

    })
    if (_w % 2) {
        document.getElementById('aside').style.width = '300px'
       
    } else {

          document.getElementById('aside').style.width = '100px'
      
    }
    _w++
})

document.getElementById('application').addEventListener('click', function (){


    
    if(sidbar % 2){
        document.getElementById('topUl').style.height=_appL + "px"
    } else{
        document.getElementById('topUl').style.height= "0"
    }
    sidbar++
    
})
    

document.getElementById('login').addEventListener("click", function(){
     if(_w % 2){
        document.querySelector('.cart').style.opacity = '1'
     } else{
        document.querySelector('.cart').style.opacity = '0'
     }
     _w++
})

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });