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
