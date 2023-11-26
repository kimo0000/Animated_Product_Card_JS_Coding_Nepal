const colors = document.querySelectorAll(".colors span");
const img = document.querySelector(".content img");

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");
    color.classList.add("active");
    
    img.src = `imgs/${color.dataset.color}_choose.jpg`;
  });
});
