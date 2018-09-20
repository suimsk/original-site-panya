$(function() {
  $('.about-store').click(function() {
    $('.modal').fadeIn();
  })
  $('.modal').click(function() {
    $(this).fadeOut();
  })
})
