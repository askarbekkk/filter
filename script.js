let blur = document.querySelector('.blur')
let sepia = document.querySelector('.sepia')
let invert = document.querySelector('.invert')
let range = document.querySelector('.range')
let contentImg = document.querySelector('.content-img')
let counter = document.getElementById('counter')
let actButton
blur.addEventListener('click', () => {
blurEffect()
 })
sepia.addEventListener('click',()=> {
sepiaEffect()
})
invert.addEventListener('click', ()=> {
invertEffect()
})
range.addEventListener('input', ()=> {
    rangeeffect()
})
function blurEffect () {
    contentImg.style.filter = `blur(${range.value}px)`;
    actButton = 'blur'
    blur.classList.add('active')
    sepia.classList.remove('active')
    invert.classList.remove('active')


}
function sepiaEffect  () {
    contentImg.style.filter = `sepia(${range.value}%)`
    actButton = 'sepia'
    sepia.classList.add('active')
    blur.classList.remove('active')
    invert.classList.remove('active')

}
function invertEffect () {
    contentImg.style.filter = `invert(${range.value}%)`
    actButton = 'invert'
    invert.classList.add('active')
    blur.classList.remove('active')
    sepia.classList.remove('active')

}
function rangeeffect () {
    counter.textContent = `${range.value}%`
    if (actButton === 'blur') blurEffect()
    if (actButton === 'sepia') sepiaEffect()
   if(actButton === 'invert') invertEffect()

}
