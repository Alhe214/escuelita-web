/* ===========================
   Frases motivacionales
=========================== */
const frases = [
  "Dios no llama capacitados, capacita a los llamados.",
  "Somos el hoy, no el futuro.",
  "Avivamiento empieza en ti.",
  "Con Cristo siempre vencemos.",
  "La fe mueve montañas."
];

window.addEventListener("DOMContentLoaded", () => {
  const fraseElement = document.getElementById("frase");
  if (fraseElement) {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    fraseElement.textContent = fraseAleatoria;
  }

  iniciarCarrusel();
  iniciarSlider();
});

/* ===========================
   Carrusel de testimonios
=========================== */
function iniciarTestimonios() {
  const testimonios = document.querySelectorAll(".testimonio");
  const prevBtn = document.querySelector(".carousel-buttons .prev");
  const nextBtn = document.querySelector(".carousel-buttons .next");
  let index = 0;

  function mostrarTestimonio(i) {
    testimonios.forEach((t, idx) => {
      t.classList.remove("active");
      if (idx === i) t.classList.add("active");
    });
  }

  if (testimonios.length > 0) {
    mostrarTestimonio(index);

    // Botones
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + testimonios.length) % testimonios.length;
      mostrarTestimonio(index);
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % testimonios.length;
      mostrarTestimonio(index);
    });

  }
}

window.addEventListener("DOMContentLoaded", iniciarTestimonios);

/* ===========================
   Galería con slider
=========================== */
function iniciarSlider() {
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider .slide-img");
  const prevBtn = document.querySelector(".slider .prev");
  const nextBtn = document.querySelector(".slider .next");

  let currentIndex = 0;

  function mostrarImagen(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
  }

  if (images.length > 0) {
    mostrarImagen(currentIndex);

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        mostrarImagen(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        mostrarImagen(currentIndex);
      });
    }
  }
}

/* ===========================
   Animaciones al cargar
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");
  elementos.forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.classList.add("fade-in");
    }, 300);
  });
});

/* ===========================
   Contador regresivo Campamento 2026
=========================== */
function iniciarCountdown() {
  const countdownElement = document.getElementById("countdown");
  if (!countdownElement) return;

  // Fecha del campamento (ejemplo: 1 julio 2026)
  const campDate = new Date("2026-07-01T08:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = campDate - now;

    if (distance < 0) {
      countdownElement.textContent = "¡Ya comenzó!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos`;
  }, 1000);
}

window.addEventListener("DOMContentLoaded", iniciarCountdown);
/* ===========================
   Galería slider
=========================== */
function iniciarGaleria() {
  const slides = document.querySelectorAll(".galeria-slider .slide");
  const prevBtn = document.querySelector(".galeria-buttons .prev");
  const nextBtn = document.querySelector(".galeria-buttons .next");
  let index = 0;

  function mostrarSlide(i) {
    slides.forEach((s, idx) => {
      s.classList.remove("active");
      if (idx === i) s.classList.add("active");
    });
  }

  if (slides.length > 0) {
    mostrarSlide(index);

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      mostrarSlide(index);
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      mostrarSlide(index);
    });
        // Automático cada 7s
    setInterval(() => {
      index = (index + 1) % slides.length;
      mostrarSlide(index);
    }, 7000);

  }
}

window.addEventListener("DOMContentLoaded", iniciarGaleria);
/* ===========================
   Contador regresivo Escuelita
=========================== */
function iniciarCountdownEscuelita() {
  const countdownElement = document.getElementById("countdown-escuelita");
  if (!countdownElement) return;

  // Fecha de la escuelita (ejemplo: 5 enero 2026)
  const escuelitaDate = new Date("2025-12-01T14:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = escuelitaDate - now;

    if (distance < 0) {
      countdownElement.textContent = "¡Ya comenzó!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos`;
  }, 1000);
}

window.addEventListener("DOMContentLoaded", iniciarCountdownEscuelita);

/* ===========================
   Animaciones al hacer scroll
=========================== */
function animarScroll() {
  const elementos = document.querySelectorAll(".fade-in");
  const triggerBottom = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("DOMContentLoaded", animarScroll);