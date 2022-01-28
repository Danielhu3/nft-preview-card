// get variables
let equilibriumImage = document.querySelector('.equilibrium-image')
let eyeIcon = document.querySelector('.eye-icon')

// add events
equilibriumImage.addEventListener('mouseover', addClass)
equilibriumImage.addEventListener('mouseleave', removeClass)

function addClass() {
  eyeIcon.classList.add('visible')
}

function removeClass() {
  eyeIcon.classList.remove('visible')
}
