var countries = [
   [
      { picture: "pictures/australia.jpg" },
      { picture: "pictures/australia2.jpg", name: "Australia" },
      { picture: "pictures/australia3.jpg" }
    ],

    [
      { picture: "pictures/austria.jpg" },
      { picture: "pictures/austria2.jpg", name: "Austria" },
      { picture: "pictures/austria3.jpg" }
    ],

    [
      { picture: "pictures/brazil.jpg" },
      { picture: "pictures/brazil2.jpg", name: "Brazil" },
      { picture: "pictures/brazil3.jpg" }
    ],

    [
      { picture: "pictures/canada.jpg" },
      { picture: "pictures/canada2.jpg", name: "Canada" },
      { picture: "pictures/canada3.jpg" }
    ],

    [
      { picture: "pictures/chile.jpg" },
      { picture: "pictures/chile2.jpg", name: "Chile" },
      { picture: "pictures/chile3.jpg" }
    ],

  [
      { picture: "pictures/dubai.jpg" },
      { picture: "pictures/dubai2.jpg", name: "Dubai" },
      { picture: "pictures/dubai3.jpg" }
    ],

[
      { picture: "pictures/egypt.jpg" },
      { picture: "pictures/egypt2.jpg", name: "Egypt" },
      { picture: "pictures/egypt3.jpg" }
    ],

[
      { picture: "pictures/france.jpg" },
      { picture: "pictures/france2.jpg", name: "France" },
      { picture: "pictures/france3.jpg" }
    ],

[
      { picture: "pictures/germany.jpg" },
      { picture: "pictures/germany2.jpg", name: "Germany" },
      { picture: "pictures/germany3.jpg" }
    ],

  [
      { picture: "pictures/holland.jpg" },
      { picture: "pictures/holland2.jpg", name: "Holland" },
      { picture: "pictures/holland3.jpg" }
    ],

  [
      { picture: "pictures/hungary.jpg" },
      { picture: "pictures/hungary2.jpg", name: "Hungary" },
      { picture: "pictures/hungary3.jpg" }
    ],

[
      { picture: "pictures/india.jpg" },
      { picture: "pictures/india2.jpg", name: "India" },
      { picture: "pictures/india3.jpg" }
    ],

[
      { picture: "pictures/iran.jpg" },
      { picture: "pictures/iran2.jpg", name: "Iran" },
      { picture: "pictures/iran3.jpg" }
    ],

[
      { picture: "pictures/ireland.jpg" },
      { picture: "pictures/ireland2.jpg", name: "Ireland" },
      { picture: "pictures/ireland3.jpg" }
    ],

[
      { picture: "pictures/italy.jpg" },
      { picture: "pictures/italy2.jpg", name: "Italy" },
      { picture: "pictures/italy3.jpg" }
    ],

  [
      { picture: "pictures/mexico.jpg" },
      { picture: "pictures/mexico2.jpg", name: "Mexico" },
      { picture: "pictures/mexico3.jpg" }
    ],

  [
      { picture: "pictures/spain.jpg" },
      { picture: "pictures/spain2.jpg", name: "Spain" },
      { picture: "pictures/spain3.jpg" }
    ],

[
      { picture: "pictures/usa.jpg" },
      { picture: "pictures/usa2.jpg", name: "USA" },
      { picture: "pictures/usa3.jpg" }
    ]
];

function getRandomCountry() {
  var ind = Math.floor(Math.random() * countries.length );
  console.log("current country index is" + ind );
  return countries[ind];
}

function displayCountry() {
  var country = getRandomCountry();
  var firstImage = country[0].picture;
  var secondImage = country[1].picture;
  var thirdImage = country[2].picture;

  var name = country[1].name;
  document.getElementById("leftpic").setAttribute("src", firstImage);
  document.getElementById("middlepic").setAttribute("src", secondImage);
  document.getElementById("rightpic").setAttribute("src", thirdImage);
  document.getElementById("middletext").innerHTML = name;
}
window.onload = function() {
  var mainButton = document.getElementById("mainButton");
  mainButton.addEventListener("click", displayCountry);
}
