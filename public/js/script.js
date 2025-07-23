function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}
function toggleLine(checkbox) {
    const task = checkbox.nextElementSibling;
    if(checkbox.checked){
        task.style.textDecoration = "line-through";
        task.style.opacity = 0.6;
    } 
    else{
        task.style.textDecoration = "none";
        task.style.opacity = 1;
    }
}

function toggleEditForm(index){
  const form = document.getElementById(`edit-form-${index}`);
  if(form.style.display === "none" || form.style.display === ""){
      form.style.display = "flex";
  } 
  else{
      form.style.display = "none";
  }
}
