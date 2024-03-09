/*====================SHOW MENU===================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*====================REMOVE MENU MOBILE===================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====================CHANGE BACKGROUND HEADER===================*/
function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*====================QUESTIONS ACCORFION===================*/
const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.questions__header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordian-open')
    toggleItem(item);

    if(openItem && openItem !== item) {
    toggleItem(item);
    }
  })
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions__content');

  if(item.classList.contains('accordian-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordian-open') /* removes the class 'accodian-open' from the item element. */
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
  item.classList.add('accordian-open')
  }

  /* accordionContent.style.height = accordionContent.scrollHeight + 'px';: This line sets
  the height of the content section (accordionContent) to match its scroll height. This
  ensures that all content within the accordion item is visible when it is toggled open.

  item.classList.add('accordian-open');: This line adds the CSS class 'accordian-open' to the
  item element. This class is likely used to visually indicate that the accordion item is open or 
  expanded. Adding this class dynamically allows you to change the appearance of the accordion 
  item based on its state.*/
}

/*====================SCROLL SECTIONS ACTIVE LINK===================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  /* declares a constant variable named scrollY and assigns it the value of the vertical 
  scroll position of the window. */
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*====================SHOW SCROLL TOP===================*/


/*====================DARK LIGHT THEME===================*/


/*====================SCROLL REVEAL ANIMATION===================*/

