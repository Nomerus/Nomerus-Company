
const menu = document.getElementById ("menus");
const action = document.getElementById("actions");

menu.addEventListener("click" , ()=>{
    hundleMenu();
});


function hundleMenu() {
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}