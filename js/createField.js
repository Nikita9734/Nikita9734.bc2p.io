import { createMenu } from "./createMenu.js";
import { createCards, back } from "./cards.js";

const gameWin = () => 
{
    var card = document.querySelectorAll(".card")
    let flag = true
    card.forEach(el => {
        if(!el.classList.contains("rotate"))
        {
            flag = false;
        }
    })
    return flag;
}

export const createField = (lvl)=>
{
    var body = document.querySelector("body");
    body.style.backgroundImage = `url(${back[1]})`
    const main = document.querySelector("main")
    main.classList.add("null")

    var lvltext = "";
    let statusGame = true;

    switch(lvl)
    {
        case 8:
            lvltext="Легкий уровень"
            break
        case 12:
            lvltext="Средний уровень"
            break
        case 16:
            lvltext="Сложный уровень"
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

    var cards = createCards(lvl);
    console.log(cards);

    var gameCards = game.querySelector(".game-cards");
    gameCards.innerHTML = "";
    
    let prev=null

    cards.forEach(el => 
    {
        var card = document.createElement('div');
        card.classList.add("card");
        card.style.backgroundImage = `url(${el.back})`;
        gameCards.appendChild(card);

        card.addEventListener("click", ()=>
        {
            if (statusGame == true && !card.classList.contains("rotate")){
                
                card.classList.add("rotate")
                card.style.backgroundImage = `url(${el.img})`;
                
                if(prev==null) 
                    {prev=card} 
                else{
                    if (prev.style.backgroundImage==card.style.backgroundImage)
                        {
                            prev=null
                            if (gameWin())
                            {
                                let model = document.createElement('div');
                                model.classList.add("model");
                                let context = document.createElement('div');
                                context.classList.add("context")
                                context.textContent = "ВЫ ПОБЕДИЛИ"
                                let button = document.createElement('div');
                                button.classList.add("btn");
                                button.textContent = "Выйти в меню"
                                model.appendChild(context);
                                model.appendChild(button)
                                main.appendChild(model);

                                button.addEventListener('click',()=>{
                                    createMenu();
                                })
                                
                            }
                        } 
                    else{
                        statusGame=false
                        var time = setTimeout(() => {
                            card.classList.remove("rotate")
                            card.style.backgroundImage = `url(${el.back})`;
                            prev.classList.remove("rotate")
                            prev.style.backgroundImage = `url(${el.back})`
                            prev=null
                            statusGame=true;
                        }, 500)
                        time;        
                    } 
                }
            }
        })
    })

}