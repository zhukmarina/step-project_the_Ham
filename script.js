let btnList = document.querySelectorAll(".our-services__panel .panel__item");
for (let  i=0; i<=btnList.length-1;i++){
    const el = btnList[i]
    el.addEventListener("click",btnClickHandler);
}

function btnClickHandler() {
    document.querySelector(".panel__item.active").classList.remove("active");
event.target.classList.add("active");

document.querySelector(".tab-content.active").classList.remove("active");
event.target.classList.add("active");

const currentIdex = event.target.dataset.index;
document.getElementById("js-tab-"+ currentIdex).classList.add("active");
}