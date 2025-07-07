function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}
function toggleLine(checkbox) {
    const task = checkbox.nextElementSibling;
    if (checkbox.checked) {
        task.style.textDecoration = "line-through";
        task.style.opacity = 0.6;
    } else {
        task.style.textDecoration = "none";
        task.style.opacity = 1;
    }
}
