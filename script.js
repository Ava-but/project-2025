const burger = document.querySelector('.burger')
const ulHiddenClose = document.querySelector('.ul-hidden-close')
const ulHidden = document.querySelector('.ul-hidden')

burger.addEventListener('click',function(){
    ulHidden.classList.add('hidden-show')
})
ulHiddenClose.addEventListener('click',function(){
    ulHidden.classList.remove('hidden-show')
})



