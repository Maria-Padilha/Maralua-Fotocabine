const navList = document.querySelector(".navbar-itens"); 
const btn = document.querySelector(".btnOpen"); 
const cancel = document.querySelector(".btnClose"); 

// function fecharBars(e){
//     navList.style.left = "-100%"
//     btn.style.display = "block"
//     cancel.style.display = "none"
// }

// function abrirBars(e){
//     navList.style.left = "0"
//     btn.style.display = "none"
//     cancel.style.display = "block"
// }

// window.addEventListener("scroll", (e)=>{

//     if(navList.getBoundingClientRect().left == 0){
//         fecharBars()
//     }
//     else{
//         btn.addEventListener("click", ()=>{
//             abrirBars()
            
//             cancel.addEventListener("click", ()=>{
//                 fecharBars()
//             })
//         })
//     }
// })

// window.addEventListener("resize", () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     console.log(`The viewport's width is ${width} and the height is ${height}.`);
// });


// SLIDER DE FOTOS SECTION PRODUTOS
const imgSlider = document.querySelectorAll(".img-slider");
imgSlider.forEach(img => {
    img.addEventListener("click", ()=>{
        document.querySelector("#slider").src = img.src;
    })
})



