particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 1,
        "color": "#00000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.6,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 6,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 10,
      "color": "#ffffff",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 300,
        "rotateY": 60
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 300,
        "line_linked": {
          "opacity": 0.8
        }
      },
      "bubble": {
        "distance": 200,
        "size": 8,
        "duration": 2,
        "opacity": 0.6,
        "speed": 3
      },
      "repulse": {
        "distance": 150,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
