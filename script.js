const menu = document.getElementById("menu")
const btnwhats = document.getElementById("btnwhats")
menu.addEventListener("click", ()=>{
    const menu_lateral = document.getElementById("menulateral")
    const links = document.querySelectorAll("a");
    const secao = document.querySelectorAll("#secao")

    secao.addEventListener("click", ()=>{
        menu_lateral.style.display = "none"
    })
links.forEach(link => {
  link.addEventListener("click", () => {
    menu_lateral.style.display = "none";
  });
});

    menu_lateral.style.display = "flex"
})
btnwhats.addEventListener("click", ()=>{
    let msg = `Quero um site com este! `
    let numero = "5527997230221"
    const link = `https://api.whatsapp.com/send?phone=${numero}&text=${msg}`;
     window.open(link, "_blank");
})