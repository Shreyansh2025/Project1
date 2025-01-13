// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".read-more");

//   buttons.forEach(button => {
//       button.addEventListener("click", () => {
//           const post = button.closest(".post");
//           const extraContent = post.querySelector(".extra-content");

//           // Toggle visibility
//           if (extraContent.classList.contains("hidden-content")) {
//               extraContent.classList.remove("hidden-content");
//               extraContent.classList.add("visible-content");
//               button.textContent = "Read Less";
//           } else {
//               extraContent.classList.remove("visible-content");
//               extraContent.classList.add("hidden-content");
//               button.textContent = "Read More";
//           }
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".read-more");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const hiddenContent = button.previousElementSibling;

      if (hiddenContent && hiddenContent.classList.contains("hidden-content")) {
        hiddenContent.classList.toggle("active");

        button.textContent = hiddenContent.classList.contains("active")
          ? "Read Less"
          : "Read More";
      }
    });
  });
});
