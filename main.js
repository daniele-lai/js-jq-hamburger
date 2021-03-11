//mostrare / nascondere il menu principale
var burger = $("div.hamburger-menu");
var burgerButton = $("i.fa-bars");
var closeButton = $("i.fa-times");

burgerButton.click(
  function () {
    burger.addClass("active");
  }
)

closeButton.click(
  function () {
    burger.removeClass("active");
  }
)
