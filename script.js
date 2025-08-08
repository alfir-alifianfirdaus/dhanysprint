document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("header nav");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          menuToggle.textContent = "☰";
        }
      }
    });
  });

  // Scroll animation functionality
  function checkVisibility() {
    const elements = document.querySelectorAll(".scroll-anim");
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.8;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        element.classList.add("visible");
      }
    });
  }

  // Initialize video click handlers
  // function setupVideoPlayers() {
  //   const videoItems = document.querySelectorAll(".video-item");

  //   videoItems.forEach((item) => {
  //     const video = item.querySelector("video");
  //     const playButton = item.querySelector(".play-button");

  //     playButton.addEventListener("click", function () {
  //       if (video.paused) {
  //         video.play();
  //         this.style.opacity = "0";
  //       } else {
  //         video.pause();
  //         this.style.opacity = "1";
  //       }
  //     });

  //     video.addEventListener("click", function () {
  //       if (video.paused) {
  //         video.play();
  //         playButton.style.opacity = "0";
  //       } else {
  //         video.pause();
  //         playButton.style.opacity = "1";
  //       }
  //     });
  //   });
  // }

  // Initial checks
  checkVisibility();
  // setupVideoPlayers();

  // Event listeners
  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);
});
