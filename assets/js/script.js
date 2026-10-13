var toggleButton  = document.getElementsByClassName('toggle')[0]
var navbarLinks  = document.getElementsByClassName('navBar-list')[0]

toggleButton.addEventListener('click', function(event) {
    event.preventDefault()
    navbarLinks.classList.toggle('active')
  })