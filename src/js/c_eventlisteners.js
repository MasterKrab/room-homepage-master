menuButton.addEventListener("click", () =>{
    menuButton.firstElementChild.classList.toggle("top-bar__icon--active");
    menu.classList.toggle("menu--active");
});

sliderImage.addEventListener("animationend", () =>{
    sliderImage.classList.remove("benefit__image--opacity");
})

sliderNavigation.addEventListener("click", e => {
     e.target.type = "prev" ? cont++ : cont--;
     if(cont === articles.length) cont = 0;
     else if(cont === -1) cont = articles.length - 1;
     changeSlider(cont);
});

window.addEventListener("load", () => changeSlider(0));