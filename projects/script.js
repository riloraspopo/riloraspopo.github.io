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
    document.title = "Projects Archive | Rilo Raspopo";
    $("#favicon").attr("href", "../assets/images/favicon.png");
  } else {
    document.title = "⚡ Come back to rilo.dev";
    $("#favicon").attr("href", "../assets/images/favhand.png");
  }
});

// Fetch projects
function getProjects() {
  return fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function showProjects(projects) {
  let projectsContainer = document.querySelector(".work .box-container");
  let projectsHTML = "";
  projects.forEach((project) => {
    projectsHTML += `
    <div class="grid-item ${project.category}">
      <div class="box tilt">
        <div class="img-wrapper">
          <img draggable="false" src="../assets/images/projects/${project.image}.png" alt="${project.name}" />
        </div>
        <div class="content">
          <span class="category-badge">${project.category || "Tech"}</span>
          <div class="tag">
            <h3>${project.name}</h3>
          </div>
          <div class="desc">
            <p>${project.desc}</p>
            <div class="btns">
              <a href="${project.links.view}" class="btn btn-primary" target="_blank">
                <i class="fas fa-external-link-alt"></i> Demo
              </a>
              <a href="${project.links.code}" class="btn btn-secondary" target="_blank">
                <i class="fab fa-github"></i> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  });
  projectsContainer.innerHTML = projectsHTML;

  // Initialize Tilt
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.15,
  });

  // Isotope filter products
  var $grid = $(".box-container").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });

  // Filter items on button click
  $(".button-group").on("click", "button", function () {
    $(".button-group").find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
}

getProjects().then((data) => {
  showProjects(data);
});
