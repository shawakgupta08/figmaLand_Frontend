document.addEventListener("DOMContentLoaded", () => {
  // --- Modal Logic ---
  const contactForm = document.getElementById("contactForm");
  const contactModal = document.getElementById("contactModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactModal.classList.add("show");
  });

  closeModalBtn.addEventListener("click", () => {
    contactModal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove("show");
    }
  });

  // --- Testimonial Slider---
  const testimonials = [
    {
      quote:
        "This is a great product that has helped us increase our productivity by 50%. Highly recommended for any team looking to streamline their workflow.",
      author: "John Doe",
      title: "CEO, TechCorp",
    },
    {
      quote:
        "Incredible features and an intuitive interface. It's rare to find a tool that is both powerful and easy to use. Our team loves it!",
      author: "Jane Smith",
      title: "Product Manager, Innovate LLC",
    },
    {
      quote:
        "The customer support is top-notch, and the constant updates show a real commitment to improvement. A must-have tool.",
      author: "Sam Wilson",
      title: "Lead Developer, Solutions Inc.",
    },
  ];

  const track = document.querySelector(".testimonial-track");
  const dotsContainer = document.querySelector(".testimonial-dots");
  let activeIndex = 0;
  let autoSlideInterval;

  function createTestimonials() {
    testimonials.forEach((testimonial, index) => {
      // Create slide
      const slide = document.createElement("div");
      slide.className = "testimonial-slide";
      slide.innerHTML = `
                <div class="testimonial-card"><p class="quote">"${testimonial.quote}"</p><p class="author">${testimonial.author}</p><p class="title">${testimonial.title}</p></div>
            `;
      track.appendChild(slide);

      // Create dot
      const dot = document.createElement("button");
      dot.className = "dot";
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlider() {
    track.style.transform = `translateX(-${activeIndex * 100}%)`;

    const dots = document.querySelectorAll(".testimonial-dots .dot");
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[activeIndex].classList.add("active");
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      activeIndex = (activeIndex + 1) % testimonials.length;
      updateSlider();
    }, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Initialize
  createTestimonials();
  const allDots = document.querySelectorAll(".testimonial-dots .dot");
  allDots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      activeIndex = parseInt(e.target.dataset.index);
      updateSlider();
      stopAutoSlide();
      startAutoSlide();
    });
  });

  updateSlider();
  startAutoSlide();
});

const video = document.getElementById("mainVideo");
const overlay = document.querySelector(".play-overlay");

video.addEventListener("click", () => {
  if (!video.paused && !video.ended) {
    video.pause();
  } else {
    video.play();
  }
});

video.addEventListener("play", () => {
  overlay.style.display = "none";
});

video.addEventListener("pause", () => {
  overlay.style.display = "flex";
});

video.addEventListener("ended", () => {
  overlay.style.display = "flex";
});

overlay.addEventListener("click", () => {
  video.play();
});
