// get variables
let equilibriumImage = document.querySelector('.equilibrium-image')
let eyeIcon = document.querySelector('.eye-icon')

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
