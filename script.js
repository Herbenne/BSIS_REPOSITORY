hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navbar = document.querySelector(".nav-bar")
    navbar.classList.toggle("active")
}

var typed = new Typed(".auto-input", {
        strings: ["Herbenne Rey", "Web Developer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true 
})

$(window).on("load", function () {
        setTimeout(function () {
          $(".preloader").fadeOut(function () {
            $("body").removeClass("noscroll");
          });
        }, 2500);
      });