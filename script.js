
    function toggleContent(button) {
        const content = button.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            button.textContent = "Read More";
        } else {
            content.style.display = "block";
            button.textContent = "Read Less";
        }
    }
