// const list = document.querySelectorAll('.list'); 
// console.log(list)

// function activeLink(){
//   list.forEach((item) => 
//   item.classList.remove('active')); 
//   this.classList.add('active')
// }

// list.forEach((item) => 
//   item.addEventListener('click', activeLink())
// ); 






$(document).ready(function() {
  // init isotope
  var $listing = $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
  });

  $("#filters").on("click", "button", function() {
    var filterValue = $(this).attr('data-filter');
    $listing.isotope({ filter: filterValue });
  });
}); 

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if(entry.isIntersecting) {
//       entry.target.classList.add('show'); 
//     } else {
//       entry.target.classList.remove('show'); 
//     }
//   })
// })

// const hiddenElements = document.querySelectorAll('hidden'); 
// hiddenElements.forEach((el) => observer.observe(el)); 



