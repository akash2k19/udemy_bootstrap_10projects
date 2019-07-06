$(document).ready(function () {
  /* navbar toggler */

  $('.navbar-toggler').html("<i class='fa fa-arrow-down fa-3x' style='color:#f15025'></i>");  });


// smooth scroll


  $(".nav-item a").click(function(link) {
    link.preventDefault();
    let target = $(this).attr("href");
    $("html, body")
        .stop()
        .animate(
            {
              scrollTop: $(target).offset().top
            },
            3000
        );
    $(".navbar-toggler").toggleClass("change");
    $("#myNavbar").collapse("hide");  });





