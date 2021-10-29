const modalview=document.querySelectorAll('.training__modal'),
modalbtns=document.querySelectorAll('.training__button'),
modalclose=document.querySelectorAll('.training__modal-icon')



let modal = function(modalclick){
modalview[modalclick].classList.add('active-modal')
console.log('hello');
}

modalbtns.forEach((modalbtn, i)=>{
modalbtn.addEventListener('click' ,()=>{
 modal(i)
 })
})

modalclose.forEach((modalcloses)=>{
 modalcloses.addEventListener('click' , ()=>{
     modalview.forEach((modalviews)=>{
         modalviews.classList.remove('active-modal')

         })
     })
 })
