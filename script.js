const menu = document.getElementById("menu");
const btnwhats = document.getElementById("btnwhats");
const menu_lateral = document.getElementById("menulateral");

// ABRIR MENU
menu.addEventListener("click", () => {
  menu_lateral.style.display = "flex";
});

// FECHAR MENU AO CLICAR EM LINKS
const links = document.querySelectorAll("#menulateral a");

links.forEach(link => {
  link.addEventListener("click", () => {
    menu_lateral.style.display = "none";
  });
});

// BOTÃO WHATSAPP
btnwhats.addEventListener("click", () => {
  const msg = "Quero um site como este!";
  const numero = "5527997230221";
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(link, "_blank");
});
