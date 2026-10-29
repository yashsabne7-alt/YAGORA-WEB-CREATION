// MOBILE NAVIGATION
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

// SELECT PACKAGE AUTOMATICALLY
document.querySelectorAll(".plan-link").forEach((link) => {
  link.addEventListener("click", () => {
    const packageSelect = document.getElementById("package");

    if (packageSelect) {
      packageSelect.value = link.dataset.plan;
    }
  });
});

// CONTACT FORM: OPEN WHATSAPP
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const business = document.getElementById("business").value.trim();
    const selectedPackage = document.getElementById("package").value;
    const message = document.getElementById("message").value.trim();

    const whatsappMessage =
      `Hi YAGORA Web Creation!\n\n` +
      `My name: ${name}\n` +
      `Business name: ${business}\n` +
      `Package: ${selectedPackage}\n` +
      `Website requirements: ${
        message || "I would like to discuss my requirements."
      }`;

    const whatsappURL =
      "https://wa.me/917710078236?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
  });
}

// AUTOMATIC COPYRIGHT YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
