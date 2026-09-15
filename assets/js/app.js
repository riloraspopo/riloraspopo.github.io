/* particles.js lively interactive configuration */
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 68,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#2563eb", "#38bdf8", "#6366f1", "#10b981", "#8b5cf6"]
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.55,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1.5,
        "opacity_min": 0.18,
        "sync": false
      }
    },
    "size": {
      "value": 3.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 1.2,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 145,
      "color": "#60a5fa",
      "opacity": 0.35,
      "width": 1.2
    },
    "move": {
      "enable": true,
      "speed": 2.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "window",
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
          "opacity": 0.65
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});