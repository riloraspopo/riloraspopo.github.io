/* particles.js ambient clean configuration */
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 35,
      "density": {
        "enable": true,
        "value_area": 950
      }
    },
    "color": {
      "value": "#3b82f6"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.25,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.8,
        "opacity_min": 0.08,
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
      "distance": 150,
      "color": "#93c5fd",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.2,
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
        "distance": 140,
        "line_linked": {
          "opacity": 0.4
        }
      },
      "push": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});