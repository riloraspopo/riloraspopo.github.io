$(document).ready(function () {
  // Mobile menu toggle
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  // Scroll spy & scroll-top button
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 80) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // Scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // Smooth scrolling for navigation anchors
  $('a[href*="#"]').on("click", function (e) {
    const target = $(this).attr("href");
    if (target && target.startsWith("#") && $(target).length) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - 65,
        },
        500,
        "linear"
      );
    }
  });

  // <!-- redirect contact form to Telegram -->
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    const name = $(this).find('input[name="name"]').val().trim();
    const email = $(this).find('input[name="email"]').val().trim();
    const phone = $(this).find('input[name="phone"]').val().trim();
    const message = $(this).find('textarea[name="message"]').val().trim();

    let text = `Hi, I got your info from popow.my.id.\n\nName: ${name}\nEmail: ${email}`;
    if (phone) {
      text += `\nPhone: ${phone}`;
    }
    text += `\n\nI need:\n${message}`;

    const telegramUrl = `https://t.me/riloraspopo?text=${encodeURIComponent(text)}`;
    const win = window.open(telegramUrl, "_blank");
    if (!win || win.closed || typeof win.closed === "undefined") {
      window.location.href = telegramUrl;
    }
    this.reset();
  });
  // <!-- redirect contact form to Telegram -->
});

// Dynamic Tab title on visibility change
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Rilo Raspopo | Full Stack Engineer & IT Specialist";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "⚡ Come back to rilo.dev";
    $("#favicon").attr("href", "assets/images/favhand.png");
  }
});

// <!-- Typed.js effect -->
var typed = new Typed(".typing-text", {
  strings: [
    "Full-Stack Development",
    "Flutter & Mobile Engineering",
    "Linux Infrastructure & GIS",
    "Backend APIs & Python",
    "IT System Architecture",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1200,
});

// Async data fetcher
async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

let allSkills = [];

function renderSkills(skillsToRender) {
  let skillsContainer = document.getElementById("skillsContainer");
  if (!skillsContainer) return;
  let skillHTML = "";
  skillsToRender.forEach((skill) => {
    skillHTML += `
      <div class="bar tilt" data-category="${skill.category || 'all'}">
        <div class="info">
          <img src="${skill.icon}" alt="${skill.name}" loading="lazy" />
          <span>${skill.name}</span>
        </div>
      </div>`;
  });
  skillsContainer.innerHTML = skillHTML;

  VanillaTilt.init(document.querySelectorAll(".skills .tilt"), {
    max: 12,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
}

// Render skills cards & filter logic
function showSkills(skills) {
  allSkills = skills;
  renderSkills(allSkills);

  $(".skills-filter .filter-btn").off("click").on("click", function () {
    $(".skills-filter .filter-btn").removeClass("active");
    $(this).addClass("active");
    const filter = $(this).data("filter");

    if (filter === "all") {
      renderSkills(allSkills);
    } else {
      const filtered = allSkills.filter((s) => s.category === filter);
      renderSkills(filtered);
    }
  });
}

// Render projects cards
function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  if (!projectsContainer) return;
  let projectHTML = "";
  projects.slice(0, 10).forEach((project) => {
    projectHTML += `
      <div class="box tilt">
        <div class="img-wrapper">
          <img draggable="false" src="./assets/images/projects/${project.image}.png" alt="${project.name}" />
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
      </div>`;
  });
  projectsContainer.innerHTML = projectHTML;

  VanillaTilt.init(document.querySelectorAll("#work .tilt"), {
    max: 12,
    speed: 400,
    glare: true,
    "max-glare": 0.15,
  });

  if (typeof srtop !== "undefined") {
    srtop.reveal(".work .box", { interval: 150 });
  }
}

// Load data
fetchData("skills").then((data) => {
  showSkills(data);
});

fetchData("projects").then((data) => {
  showProjects(data);
});

// Initialize VanillaTilt on all pre-existing tilt elements
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.15,
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 800,
  reset: false,
});

/* Reveal triggers */
srtop.reveal(".home .content h1", { delay: 150 });
srtop.reveal(".home .content .hero-subtitle", { delay: 200 });
srtop.reveal(".home .content .hero-description", { delay: 250 });
srtop.reveal(".home .hero-actions", { delay: 300 });
srtop.reveal(".home .socials", { delay: 350 });
srtop.reveal(".home .terminal-col", { delay: 300 });

srtop.reveal(".about .image", { delay: 200 });
srtop.reveal(".about .content", { delay: 300 });
srtop.reveal(".about .stats-grid", { delay: 350 });

srtop.reveal(".education .box", { delay: 200 });
srtop.reveal(".experience .timeline .container", { interval: 200 });
srtop.reveal(".contact .image-box", { delay: 200 });
srtop.reveal(".contact #contact-form", { delay: 300 });
