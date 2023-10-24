let boddy = document.querySelector("body");
let menu = document.querySelector(".topbar");

const trocarCor = () => {
  boddy.classList.toggle("dark");
  /*   boddy.classList.toggle("white"); */
  menu.classList.toggle("dark");
};

const menuResponsivo = () => {
  document.querySelector(".topbar").classList.toggle("responsive");
};
