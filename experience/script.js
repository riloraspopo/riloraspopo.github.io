$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
  });
});

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Career Experience | Rilo Raspopo";
    $("#favicon").attr("href", "../assets/images/favicon.png");
  } else {
    document.title = "⚡ Come back to rilo.dev";
    $("#favicon").attr("href", "../assets/images/favhand.png");
  }
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 800,
  reset: false,
});

srtop.reveal(".experience .timeline .container", { interval: 200 });
