const changeSlider = id => {
    slider.textContent = "";
    const {title, text, image} = articles[id];

    sliderSource.srcset = image.desktop;
    sliderImage.src = image.mobile;
    sliderImage.alt = image.alt;
    sliderImage.classList.add("benefit__image--opacity");

    template.querySelector(".benefit__title").innerHTML = title;
    template.querySelector(".benefit__text").textContent = text;

    const node = document.importNode(template, true);

    slider.appendChild(node);
};