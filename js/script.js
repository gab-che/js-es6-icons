// import  {iconArray}  from "./data.js";
const row = document.querySelector(".row");
const select = document.getElementById("select");
const selectType = document.createElement("select");

iconArray.forEach((element)=>{
    Object.keys(element).forEach(()=>{element.family = "solid";});

    const col = document.createElement("div");
    col.classList.add("col");

    const card = document.createElement("div");
    card.classList.add("card", "card_style");
    card.innerHTML = `<i class="${element.prefix}${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
    <h5>${element.name}</h5>`
    col.append(card);
    col.classList.add(element.type);

    row.append(col);
})

const typeList = [];

iconArray.forEach(element=>{

    if (!typeList.includes(element.type)) {
        typeList.push(element.type);
    }

});

typeList.push("all");
typeList.sort();
typeList.forEach((element)=>{
    const option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    selectType.append(option);
})

select.append(selectType);

const allCols = document.querySelectorAll(".col");
selectType.addEventListener('change', function() {

    if(this.value === "all"){
        allCols.forEach((element)=>{
            element.classList.remove("d-none")
        });
    } else {
        
        allCols.forEach(element=>{
            if (element.classList.contains(this.value)){
                element.classList.remove("d-none");
            } else{
                element.classList.add("d-none");
            }
        });
    }
});