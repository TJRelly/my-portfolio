const particlesConfig = {
    autoPlay: true,
        background: {
          color: {
            value: "" // Set your desired background color
          }
        },
        particles: {
          number: {
            value: 50, // Adjust the number of particles
            density: {
              enable: true,
              value_area: 800 // Adjust the density of particles
            }
          },
          color: {
            value: ["#D7BE69", "#C0C0C0"] // Set the desired colors (gold and silver)
          },
          shape: {
            type: "circle" // Set the shape of particles (can be "circle", "square", "image", etc.)
          },
          size: {
            value: 10, // Adjust the size of particles
            random: true,
            anim: {
              enable: false,
              speed: 10,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150, // Adjust the distance of the connections between particles
            color: "#FFFFFF", // Set the color of the connections
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2, // Adjust the speed of particle movement
            direction: "none", // Set the direction of particle movement (can be "none", "top", "top-right", etc.)
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse" // Set the interaction mode on hover (can be "grab", "bubble", "repulse", etc.)
            },
            onclick: {
              enable: true,
              mode: "push" // Set the interaction mode on click (can be "push", "remove", "bubble", etc.)
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 200,
              size: 80,
              duration: 0.4
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      };
      

export default particlesConfig