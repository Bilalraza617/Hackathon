"use strict";
// Utility function to make a section editable
function makeEditable(element, dataKey) {
    const span = element;
    const originalText = span.innerText.trim();
    // Create input element
    const input = document.createElement("input");
    input.type = "text";
    input.value = originalText;
    input.className = "input-edit active";
    // Replace span with input field
    span.replaceWith(input);
    input.focus();
    // Handle the blur event to save the changes
    input.addEventListener("blur", () => {
        const newValue = input.value.trim();
        // Input validation: Do not allow empty values
        if (newValue === "") {
            // alert("This field cannot be empty."); // Optionally handle empty values
            input.focus();
            return;
        }
        // Update the element with the new value
        const newSpan = document.createElement("span");
        newSpan.innerText = newValue;
        input.replaceWith(newSpan);
    });
    // Ensure the span is replaced correctly
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            input.blur();
        }
    });
}
// Event listener for form submission to generate resume
document
    .getElementById("resumeForm")
    ?.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    // Capture user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills")
        .value;
    // Display Resume Section and Populate
    document.getElementById("nameDisplay").textContent = name;
    document.getElementById("emailDisplay").textContent =
        email;
    document.getElementById("phoneDisplay").textContent =
        phone;
    document.getElementById("educationDisplay").textContent =
        education;
    document.getElementById("experienceDisplay").textContent =
        experience;
    document.getElementById("skillsDisplay").textContent =
        skills;
    document.getElementById("resume")?.setAttribute("style", "display: block;");
    // Add Event Listeners for Inline Editing
    document.querySelectorAll(".editable").forEach((element) => {
        const el = element;
        el.addEventListener("click", () => {
            const dataKey = el.getAttribute("data-editable");
            if (dataKey) {
                console.log(dataKey);
                makeEditable(el, dataKey);
            }
        });
    });
});
