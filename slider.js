
function changeSlide(direction) {
    
    const activeSlideBtnList = document.querySelectorAll(".toggles .slider-btn");
    const slideCount = activeSlideBtnList.length;
    const activeSlideBtn = document.querySelector(".toggles .slider-btn.active");
    const activeSlideIndex = Number(activeSlideBtn.dataset.index);

    let updateIndex;

    switch (direction){
        case "prev":
            updateIndex = 
                activeSlideIndex - 1 <=0 ? slideCount : activeSlideIndex - 1;
            break;
        case "next":
            updateIndex = 
                activeSlideIndex +1 > slideCount ? 1 : activeSlideIndex + 1;
            break;
    }

    activeSlideBtn.classList.remove("active");
    document
        .getElementById("js-slide-" + activeSlideIndex)
        .classList.remove("active");

    activeSlideBtnList[updateIndex -1].classList.add("active"); 
    document.getElementById("js-slide-" + updateIndex).classList.add("active"); 
}

document
    .querySelector(".btn-slide-arrow.prev")
    .addEventListener("click",() => changeSlide("prev"));

document
    .querySelector(".btn-slide-arrow.next")
    .addEventListener("click",() => changeSlide("next"));  
    
setInterval(()=>changeSlide("next"), 2000);    


     

    
    
  