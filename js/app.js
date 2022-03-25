class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "show";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
    }
    
    removeClass() {
      for(const link of this.navLinks) {
        link.addEventListener('click', () => {
          this.navList.classList.toggle(this.activeClass);
          this.mobileMenu.classList.toggle(this.activeClass);
        })
      }
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
        this.removeClass();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".list",
    ".list li",
  );
  mobileNavbar.init();




const header = document.querySelector('.header-top')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
} )





const navLink = document.querySelectorAll('.item');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));




const swiper = new Swiper('.swiper', {
    slidesPreView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      500: {
        slidesPerView:  2,
        setWrapperSize: true
      }
    }
});



const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '1rem',
    duration: 800,
    reset: true
});

scrollReveal.reveal(`
#home .title,
#about .title-about, #about .text-about,
#services .title-services,
#tc .title-tc, #tc .list-tc, #tc .list-two-tc,
#managements .title-managements,
#sales .title-sales,
#social .title-social,
#portfolio .title-portfolio,
#testimonies .title-testimonies`, 
{ interval: 200 });

                    
const scrollReveal2 = ScrollReveal({
    origin: 'left',
    distance: '10rem',
    duration: 800,
    reset: true
});

scrollReveal2.reveal(`
#services .layout-card,
#managements .card1, #managements .card2, #managements .card3,
#sales .card1, #sales .card2, #sales .card3, #sales .card4, #sales .card5, #sales .card6,
#social .card1, #social .card2, #social .card3,#portfolio .card1, #portfolio .card2, #portfolio .card3`,
{ interval: 150 });



const scrollReveal3 = ScrollReveal({
 origin: 'bottom',
 distance: '1rem',
duration: 800,
 reset: true
});

scrollReveal3.reveal(`
#social .medias-social,
#portfolio .slider-portfolio,
#contact a`,
{ interval: 150 });


const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function() {
  if(window.scrollY >= 20) {
    backToTopButton.classList.add('appaer')
  } else {
    backToTopButton.classList.remove('appaer')
  }
})