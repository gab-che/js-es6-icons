// import  {iconArray}  from "./data.js";
const row = document.querySelector(".row");

iconArray.forEach((element)=>{
    Object.keys(element).forEach(()=>{element.family = "solid";})
})

console.log(iconArray)