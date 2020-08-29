document.cookie = "my_cookie_name=my_cookie_value; expires=Thu, 11 Jun 2070 11:11:11 UTC; path=/; SameSite=None; Secure";

const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open')
  })
})