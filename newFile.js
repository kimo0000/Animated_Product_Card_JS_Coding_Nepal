colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");
    color.classList.add("active");
    console.log(e.target.dataset.color);
  });
});
