
const navManu = document.getElementById('nav-manu'),
      navToggal = document.getElementById('nav-toggal'),
      navClose = document.getElementById('nav-close')

      if (navToggal) {
          navToggal.addEventListener('click',()=>{
              navManu.classList.add('show-manu')
              navToggal.classList.add('show-logo')
              
            })
            
        };
        if(navClose){
            navClose.addEventListener('click',()=>{
                navManu.classList.remove('show-manu')
                navToggal.classList.remove('show-logo')
            })
        }
        
        const navLink = document.querySelectorAll('.nav__link')
        // const navsho = document.querySelector('.nav__link')
        
        function navAction(){
            const navManu = document.getElementById('nav-manu')
              navManu.classList.remove('show-manu')
              document.getElementById('nav-toggal').classList.remove('show-logo')
             }
        navLink.forEach(n=>n.addEventListener('click' , navAction));




 const SkillsContent = document.getElementsByClassName('Skills__content'),
       skillsHeader = document.querySelectorAll('.skills__header')

       function toggleSkills(){
           let itemClass = this.parentNode.className

           for(i=0;i<SkillsContent.length;i++)
           {
               SkillsContent[i].className = 'Skills__content skills__close'
           }
           if (itemClass==='Skills__content skills__close') {
               this.parentNode.className = 'Skills__content skills__open'
           }

       }

       skillsHeader.forEach((el)=>{
            el.addEventListener('click', toggleSkills)

       })



      
      
// Reveal sections


const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

const introSections = document.querySelectorAll('.intros');

const revealSections = function (entrie, observers) {
  const [entrys] = entrie;

  if (!entrys.isIntersecting) return;

  entrys.target.classList.remove('intro--hidden');
  observers.unobserve(entrys.target);
};

const sectionObservers = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.25,
});

introSections.forEach(function (intro) {
  sectionObservers.observe(intro);
  intro.classList.add('intro--hidden');
});



const preloader = document.getElementById("preloader");

window.addEventListener("load" ,function(){
  preloader.style.display='none'
})