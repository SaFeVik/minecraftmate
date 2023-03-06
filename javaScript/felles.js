let hamburger = document.querySelector('.burger')

hamburger.onclick = function(){
    document.querySelector('.websites').classList.toggle('show')
    hamburger.classList.toggle('show')
}