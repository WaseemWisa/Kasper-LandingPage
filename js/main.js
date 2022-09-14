let links = document.querySelectorAll(".header .container nav ul li a");

links.forEach((li) => {
  li.addEventListener("click", activeLink);
});
function activeLink() {
  links.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
};