document.cookie =
  'my_cookie_name=my_cookie_value; expires=Thu, 11 Jun 2070 11:11:11 UTC; path=/; SameSite=None; Secure';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

const consoleMessage = `
h       h                                                             !!!!
h       h   i     ttttttttt h       h eeeeeeeee rrrrrrrr  eeeeeeeee   !!!!
h       h   i         t     h       h e         r       r e           !!!!
hhhhhhhhh   i         t     hhhhhhhhh eeeeeeee  r       r eeeeeeee     !!
h       h   i         t     h       h e         rrrrrrr   e            
h       h   i         t     h       h e         r      r  e            !! 
h       h   i         t     h       h eeeeeeeee r       r eeeeeeeee    !!
`;

console.log(consoleMessage);
