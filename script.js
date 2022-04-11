const container_slider = [...document.querySelectorAll(".container")];

const btnatras = [...document.querySelectorAll(".btn-atras")];
const btnadelante = [...document.querySelectorAll(".btn-adelante")];


container_slider.forEach((item, i)=>{

    let espacioContainer = item.getBoundingClientRect();
    let containerWidth = espacioContainer.width;

    btnadelante[i].addEventListener("click",()=>{
        item.scrollLeft += containerWidth-155;
    })
    btnatras[i].addEventListener("click",()=>{
        item.scrollLeft -= containerWidth;
    })

})



