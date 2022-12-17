document.addEventListener("DOMContentLoaded", () => {
  //Information for the navbar
  const navDirectory = [
    {
      navTitle: "Report an Abuse",
      navUrl: "about-us.html",
    },
    {
      navTitle: "Memories",
      navUrl: "about-us.html",
    },
    {
      navTitle: "Tomorrow",
      navUrl: "about-us.html",
    },
    {
      navTitle: "Contact Us",
      navUrl: "about-us.html",
    },
  ];

  const linksList = document.getElementsByClassName("navlink")[0];

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
  const navLink = document.querySelector(".navlink");

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

  //information for my main body container2
  let westAfricaProtectors = {
    "Nigeria: +234": {
      Lagos: [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
      "Port Harcourt": [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
      Kaduna: [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
      Ibadan: [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
      Ondo: [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
    },
    "Ghana: +233": {
      Accra: [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
      Koumassi: [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
    },
    "Cameroun: +325": {
      Chiok: [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
      Cuok: [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
    },
    "Niger: +245": {
      Egeret: [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
      Minasota: [
        "North: 08022345623",
        "North-East: 08022345623",
        "North-West: 08022345623",
        "East: 08022345623",
        "West: 08022345623",
        "South: 08022345623",
        "South-East: 08022345623",
        "South-West: 08022345623",
      ],
      NativeScript: [],
    },
  };

  window.onload = function () {
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var third = document.getElementById("third");

    for (var x in westAfricaProtectors) {
      // console.log(x);
      first.options[first.options.length] = new Option(x);
    }

    first.onchange = function () {
      second.length = 1;
      third.length = 1;

      second.style.display = "block";
      third.style.display = "none";

      for (var y in westAfricaProtectors[this.value]) {
        // console.log(y);
        second.options[second.options.length] = new Option(y);
      }
    };

    second.onchange = function () {
      third.length = 1;

      third.style.display = "block";
      z = westAfricaProtectors[first.value][this.value];
      console.log(z);
      for (let i = 0; i < z.length; i++) {
        third.options[third.options.length] = new Option(z[i]);
      }
    };
  };
});
