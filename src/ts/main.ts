// Utility function to make a section editable
function makeEditable(element: HTMLElement, dataKey: string): void {
  const span = element as HTMLSpanElement;

  const originalText = span.innerText.trim();

  // Create input element
  const input = document.createElement("input") as HTMLInputElement;
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
  input.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      input.blur();
    }
  });
}

// Event listener for form submission to generate resume
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent form submission

    // Capture user input
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (
      document.getElementById("education") as HTMLTextAreaElement
    ).value;
    const experience = (
      document.getElementById("experience") as HTMLTextAreaElement
    ).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement)
      .value;

    // Display Resume Section and Populate
    (document.getElementById("nameDisplay") as HTMLElement).textContent = name;
    (document.getElementById("emailDisplay") as HTMLElement).textContent =
      email;
    (document.getElementById("phoneDisplay") as HTMLElement).textContent =
      phone;
    (document.getElementById("educationDisplay") as HTMLElement).textContent =
      education;
    (document.getElementById("experienceDisplay") as HTMLElement).textContent =
      experience;
    (document.getElementById("skillsDisplay") as HTMLElement).textContent =
      skills;

    document.getElementById("resume")?.setAttribute("style", "display: block;");

    // Add Event Listeners for Inline Editing
    document.querySelectorAll(".editable").forEach((element) => {
      const el = element as HTMLElement;
      el.addEventListener("click", () => {
        const dataKey = el.getAttribute("data-editable");
        if (dataKey) {
          console.log(dataKey);
          makeEditable(el, dataKey);
        }
      });
    });
  });
