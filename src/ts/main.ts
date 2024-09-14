// Get the Skills section and the toggle button by their IDs
const skillsSection = document.getElementById("skills");
const toggleButton = document.getElementById("toggleSkillsButton");

// Add an event listener to the button to toggle visibility of the Skills section
toggleButton?.addEventListener("click", () => {
  if (skillsSection?.classList.contains("hidden")) {
    skillsSection.classList.remove("hidden");
    toggleButton.textContent = "Hide Skills";
  } else {
    skillsSection?.classList.add("hidden");
    toggleButton.textContent = "Show Skills";
  }
});
