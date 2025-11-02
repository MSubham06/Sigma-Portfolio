document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // prevent redirect
  
      const formData = new FormData(form);
  
      try {
        const response = await fetch("https://formspree.io/f/mvgvvyjg", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });
  
        if (response.ok) {
          responseMessage.style.display = "block";
          responseMessage.style.color = "#15ff00";
          responseMessage.textContent = "Message sent successfully!";
          form.reset();
        } else {
          responseMessage.style.display = "block";
          responseMessage.style.color = "#ff0000";
          responseMessage.textContent = "Something went wrong. Please try again.";
        }
      } catch (error) {
        responseMessage.style.display = "block";
        responseMessage.style.color = "#b9b9b9";
        responseMessage.textContent = "Network error. Please try again later.";
      }
    });
  });
  
// Loader Code

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
  setTimeout(() => loader.remove(), 600);
});

// Loader Code
