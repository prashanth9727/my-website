(function () {
  emailjs.init("cmq8Rtphvl8EkYlrh"); // replace with your EmailJS public key
})();

const form = document.getElementById("contact-form");
const loader = document.getElementById("loader");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    loader.style.display = "block";

    emailjs.sendForm("service_y3ukzb9", "template_i0nzvaj", this)
      .then(() => {
        loader.textContent = "✅ Sent! Redirecting...";
        setTimeout(() => {
          window.location.href = "thankyou.html";
        }, 1500);
      }, (error) => {
        loader.textContent = "❌ Failed to send. Try again.";
        console.error(error);
      });

    this.reset();
  });
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if(section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
