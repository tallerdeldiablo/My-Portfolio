var toggleButton  = document.getElementsByClassName('toggle')[0]
var navbarLinks  = document.getElementsByClassName('navBar-list')[0]

console.log(toggleButton)

toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('active')
  })