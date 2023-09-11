var characters = [
  { name: "ANTONIA", image: "ANTONIA.jpg", page: 9 },
  { name: "FISH THICC", image: "FISH THICC.jpg", page: 5 },
  { name: "MAE", image: "MAE.jpg", page: 7 },
  { name: "NOLAN CHANCE", image: "NOLAN CHANCE.jpg", page: 1 },
  { name: "PIPER PACE", image: "PIPER PACE.jpg", page: 3 },
  { name: "KADO THORNE", image: "KADO THORNE.jpg", page: 13 },
  { name: "KHABY LAME", image: "KHABY LAME.jpg", page: 11 },
  { name: "AHSOKA TANO", image: "AHSOKA TANO.jpg", page: "Secret Skin" }
];

var battlePassElement = document.getElementById("battle-pass");

characters.forEach(function(character) {
  var characterElement = document.createElement("div");
  characterElement.className = "character";

  var characterImageElement = document.createElement("img");
  characterImageElement.src = character.image;

  var characterNameElement = document.createElement("h3");
  characterNameElement.innerText = character.name;

  var characterLevelElement = document.createElement("p");
  characterLevelElement.innerText = "Page: " + character.page;

  characterElement.appendChild(characterImageElement);
  characterElement.appendChild(characterNameElement);
  characterElement.appendChild(characterLevelElement);

  battlePassElement.appendChild(characterElement);
});