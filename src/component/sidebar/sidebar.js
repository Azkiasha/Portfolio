// sidebar.js

document.addEventListener("DOMContentLoaded", function () {
  let list = document.querySelectorAll("li.nav_item");

  list.forEach((item) => {
    item.addEventListener("mouseover", function () {
      // Remove the 'active' class from all items
      list.forEach((item) => item.classList.remove("active"));

      // Add the 'active' class to the hovered item
      item.classList.add("active");
    });
  });
});

export function show() {
  document.querySelector(".burger-icon").classList.toggle(".open");
  document.querySelector(".aside").classList.toggle(".active");
}
