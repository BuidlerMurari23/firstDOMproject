// let btn = document.createElement("button");
// btn.id = "button";
// btn.textContent = "Press Me to Change";
// btn.style.color = "black";
// btn.style.fontSize = "25px";
// btn.style.padding = "20px";
// btn.style.borderRadius = " 25px";
// btn.style.backgroundColor = "#808080";
// document.body.appendChild(btn);

let btn = document.getElementById("button");

// const randomColor = ()=>{
//     let colour = "0123456789ABCDEF";
//     let  hass  = "#";
//     for (let i = 0; i < 6; i++){
//         let  hass =  hass + colour[Math.floor(Math.random() * 16)];
//     }
//     return hass ;
// }
// console.log(randomColor())

const randomColor = () => {
    let value = "0123456789ABCDEF";
    let hass = "#";
    for( let i = 0; i < 6; i++){
         hass = hass + value[Math.floor(Math.random()*16 )]
    }
    return hass ;
}
console.log(randomColor())
function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}
btn.addEventListener("click",changeRandomColor);
