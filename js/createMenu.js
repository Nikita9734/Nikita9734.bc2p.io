import { createField } from "./createField.js";
import { createCards, back } from "./cards.js";

export const createMenu = ()=>
{
    var body = document.querySelector("body");
    body.style.backgroundImage = `url(${back[0]})`

    var model=document.querySelector(".model")
    if (model) model.remove();

    const main = document.querySelector("main")
    main.classList.remove("null")

    console.log("menu start");
    const menu = document.querySelector(".menu")
    const game = document.querySelector(".game")
    game.style.display = "none"
    menu.style.display = "block";

    const btn = menu.querySelectorAll(".btn")
    btn.forEach(el => 
        {
            el.addEventListener('click', ()=>{
                switch(el.textContent){
                    case "Легкий":
                        menu.style.display = "none"
                        createField(8);
                        break;
                    case "Средний":
                        menu.style.display = "none"
                        createField(12);
                        break;
                    case "Сложный":
                        menu.style.display = "none"
                        createField(16);
                        break;

                }
            });
        });
}