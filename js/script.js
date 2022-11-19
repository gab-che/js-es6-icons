// import  {iconArray}  from "./data.js";
const row = document.querySelector(".row");

iconArray.forEach((element)=>{
    Object.keys(element).forEach(()=>{element.family = "solid";});

    const col = document.createElement("div");
    col.classList.add("col");
    
    const card = document.createElement("div");
    card.classList.add("card", "card_style");
    card.innerHTML = `<i class="${element.prefix}${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
    <h5>${element.name}</h5>`
    col.append(card);
    
    row.append(col);
})
