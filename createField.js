import { createMenu } from "./createMenu.js";

export const createField = (lvl)=>
{
    const main = document.querySelector("main")
    main.classList.add("null")

    var lvltext = ""

    switch(lvl)
    {
        case 8:
            lvltext="Легкий уровень"
            break
        case 12:
            lvltext="Легкий уровень"
            break
        case 16:
            lvltext="Легкий уровень"
            break

    }
    console.log(lvl);

    const game = document.querySelector(".game")
    game.style.display = "block"
    const level = game.querySelector(".lvl")
    level.textContent = lvltext

    const menu = game.querySelector(".btn");
    menu.addEventListener('click',()=>{
        console.log("menu btn");
        createMenu();
    })

}