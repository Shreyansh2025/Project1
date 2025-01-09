
    document.addEventListener("DOMContentLoaded", () => {
        const toggleButtons = document.querySelectorAll(".toggle-btn");

        toggleButtons.forEach((btn) => {
          btn.addEventListener("click", () => {
            const content = btn.previousElementSibling; // Select hidden content
            const isVisible = content.style.display === "block";

            content.style.display = isVisible ? "none" : "block";
            btn.textContent = isVisible ? "Read More" : "Read Less";
          });
        });
      });

      window.addEventListener("DOMContentLoaded", function () {
        const title = localStorage.getItem("title");
        const author = localStorage.getItem("author");
        const content = localStorage.getItem("content");
      
        if (title && author && content) {
          document.getElementById("title1").textContent = title;
          document.getElementById("author1").textContent = author;
          document.getElementById("content1").textContent = content;
        }
      });
      