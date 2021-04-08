const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");
const slider = document.getElementById("slider");
const sliderNavigation = document.getElementById("slider-navigation");
const sliderSource = document.getElementById("slider-source");
const sliderImage = document.getElementById("slider-image");
const template = document.getElementById("template").content;
let cont = 0;

const articles = [
    {
        title: "Discover innovative <br> ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        image: {
            desktop: "assets/images/desktop-image-hero-1.jpg",
            mobile: "assets/images/mobile-image-hero-1.jpg",
            alt: "furniture"
        }
    },
    {
        title: "We are available <br> all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        image: {
            desktop: "assets/images/desktop-image-hero-2.jpg",
            mobile: "assets/images/mobile-image-hero-2.jpg",
            alt: "furniture"
        }
    },
    {
        title: "Manufactured with <br> the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        image: {
            desktop: "assets/images/desktop-image-hero-3.jpg",
            mobile: "assets/images/mobile-image-hero-3.jpg",
            alt: "furniture"
        }
    }
];