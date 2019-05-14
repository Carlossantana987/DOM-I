const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo

//TOP NAVBAR
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navigationMenu = document.querySelectorAll("a");
(navigationMenu[0].textContent = "Services"),
  (navigationMenu[1].textContent = "Product"),
  (navigationMenu[2].textContent = "Vision"),
  (navigationMenu[3].textContent = "Features"),
  (navigationMenu[4].textContent = "About"),
  (navigationMenu[5].textContent = "Contact");

navigationMenu.forEach(navigationMenu => {
  navigationMenu.style.color = "green";
});

//TOP SECTION
const ctaTitle = document.querySelector(" div h1");
ctaTitle.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");

const circleImg = document.getElementById("cta-img");
circleImg.setAttribute("src", siteContent["cta"]["img-src"]);

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

// MAIN SECTION
const mainContect = document.querySelectorAll("h4");
mainContect[0].textContent = "Features";
mainContect[1].textContent = "About";
mainContect[2].textContent = "Services";
mainContect[3].textContent = "Product";
mainContect[4].textContent = "Vision";

const mainImg = document.getElementById("middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const paragraphSec = document.querySelectorAll("div p");
paragraphSec[0].textContent = siteContent["main-content"]["features-content"];
paragraphSec[1].textContent = siteContent["main-content"]["about-content"];
paragraphSec[2].textContent = siteContent["main-content"]["services-content"];
paragraphSec[3].textContent = siteContent["main-content"]["product-content"];
paragraphSec[4].textContent = siteContent["main-content"]["vision-content"];

// CONTACT SECTION
mainContect[5].textContent = "Contact";
paragraphSec[5].innerHTML = siteContent["contact"]["address"]
  .split("Street ")
  .join("Street <br>");

paragraphSec[6].textContent = siteContent["contact"]["phone"];
paragraphSec[7].textContent = siteContent["contact"]["email"];

paragraphSec[8].textContent = siteContent["footer"]["copyright"];

let firstNav = document.createElement("a");
firstNav.href = "#";
firstNav.textContent = "Beginning";
firstNav.style.color = "green";

let lastNav = document.createElement("a");
lastNav.href = "#";
lastNav.textContent = "End";
lastNav.style.color = "green";

const newNav = document.querySelector("nav");
newNav.prepend(firstNav);
newNav.append(lastNav);
