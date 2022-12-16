document.addEventListener("DOMContentLoaded", () => {
  //Information for the navbar
  const navDirectory = [
    {
      navTitle: "About Us",
      navUrl: "about-us.html",
    },
    {
      navTitle: "About Us",
      navUrl: "about-us.html",
    },
    {
      navTitle: "About Us",
      navUrl: "about-us.html",
    },
    {
      navTitle: "About Us",
      navUrl: "about-us.html",
    },
  ];
  
  const linksList = document.getElementsByClassName("nav__link")[0];
  
  console.log(window.URL);
  
  navDirectory.forEach((navTab, index) => {
    let atag = document.createElement("a");
    atag.setAttribute("href", navTab.navUrl);
    let linkTexts = document.createTextNode(`${navTab.navTitle}`);
  
    //append each of the created elements and nodes
    atag.appendChild(linkTexts);
    linksList.appendChild(atag);
    index++;
  });
  
  const hamburger = document.querySelector(".hamburger");
  const navLink = document.querySelector(".nav__link");
  
  hamburger.addEventListener("click", () => {
    navLink.classList.toggle("hide");
  });
  
  //information for my main body container1
  const policeStations = document.getElementById("police_stations");

  fetch(
    "https://cors-anywhere.herokuapp.com/https://police-api.onrender.com/policeAPI/get"
  )
    .then((res) => {
      return res.json;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });


    //information for my main body container1
    
});
