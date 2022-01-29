// get variables
let equilibriumImage = document.querySelector('.card__image')
let eyeIcon = document.querySelector('.card__eye-icon')

function addClass() {
  eyeIcon.classList.add('visible')
}

function removeClass() {
  eyeIcon.classList.remove('visible')
}

// add events
function watchHover() {
  equilibriumImage.addEventListener('mouseover', addClass)
  equilibriumImage.addEventListener('mouseleave', removeClass)
}
window.addEventListener('load', watchHover)
