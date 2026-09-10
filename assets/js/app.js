/* particles.js cyber-tech configuration */
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 55,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "#00f2fe"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.35,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 140,
      "color": "#00f2fe",
      "opacity": 0.18,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 160,
        "line_linked": {
          "opacity": 0.6
        }
      },
      "push": {
        "particles_nb": 3
      }
    }
  },
  "retina_detect": true
});