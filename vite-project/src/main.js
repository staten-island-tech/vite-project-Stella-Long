import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
  <class="card">  
    <h1>My Pokemon!</h1>

    <button id="MyPokemon">Add to "My Pokemon"</button>
    <button id="WantPokemon">Add to "Want Pokemon"</button>

    <div class="container"></div>

  </div>
`;

const pokemonCards = [
  {
    name: "Flying Pikachu VMAX",
    character: "Pikachu",
    series: "Celebrations",
    origin: "English",
    img: "https://m.media-amazon.com/images/I/71SEdErKhfL.jpg",
  },
  {
    name: "Surfing Pikachu VMAX",
    character: "Pikachu",
    series: "Celebrations",
    origin: "English",
    img: "https://stupidgeeksinc.com/cdn/shop/files/a6c06b63-746e-53eb-bdfa-49b0e52b6431_1000x1000.jpg?v=1733529745",
  },
  {
    name: "Pikachu VMAX (Secret Rare)",
    character: "Pikachu",
    series: "Lost Origin Trainer Gallery",
    origin: "English",
    img: "https://tcgplayer-cdn.tcgplayer.com/product/284302_in_1000x1000.jpg",
  },
  {
    name: "Pikachu VMAX Rainbow Rare",
    character: "Pikachu",
    series: "Vivid Voltage",
    origin: "English",
    img: "https://storage.googleapis.com/images.pricecharting.com/b4253710ee077b36198a6ad560b53302d045026a06588c8aa0b24012ecbc5872/1600.jpg",
  },
  {
    name: "Pikachu VMAX (Full Art)",
    character: "Pikachu",
    series: "Vivid Voltage",
    origin: "English",
    img: "https://tcgplayer-cdn.tcgplayer.com/product/226432_in_1000x1000.jpg",
  },
  {
    name: "Pikachu VMAX",
    character: "Pikachu",
    series: "SWSH Black Star Promos",
    origin: "English",
    img: "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/1280w/products/77093/182556/SWSH286_hires__88323.1683813817.png",
  },
  {
    name: "Eevee VMAX",
    character: "Eevee",
    series: "SWSH Black Star Promos",
    origin: "English",
    img: "https://m.media-amazon.com/images/I/710ugsdR7BL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Eevee Full Art",
    character: "Eevee",
    series: "Twilight Masquerade",
    origin: "English",
    img: "https://m.media-amazon.com/images/I/718WR1R-zQL._AC_UF894,1000_QL80_.jpg",
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-series = "${item.series}">
        <img
          class="img"
          src="${item.img}"
          alt="Pokemon Cards"
        />
        <h2 class="card_name">${item.name}</h2>
        <h3 class="card_series">${item.series}</h3>

        <h3 class="card_origin">${item.origin}</h3>
    </div>`
  );
}

const uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const fileInput = uploadForm.querySelector('input[type="file"]');
  const name = document.getElementById("uploadName").value;
  const character = document.getElementById("uploadCharacter").value;
  const series = document.getElementById("uploadSeries").value;
  const origin = document.getElementById("uploadOrigin").value;
  const file = fileInput.files[0];
  if (!file) return alert("Please select an image");
  const imgUrl = URL.createObjectURL(file);
  const newCard = {
    name: name,
    character: character,
    series: series,
    origin: origin,
    img: imgUrl,
    alt: name,
    category: ["User Upload"],
  };
  card.push(newCard);
  inject(newCard);
  enableModal();
  saveUploads();
  uploadForm.reset();
});

pokemonCards.forEach((item) => inject(item));

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

/* function filterByCharacter(series) {
  document.querySelectorAll(".card").forEach((card) => {
    const cardSeries = card.getAttribute("data-character");
    card.style.display =
      cardSeries === series || series === "all" ? "inline-block" : "none";
  });
}

document
  .querySelector(".a")
  .addEventListener("click", () => filterByCharacter("Gallery"));
document
  .querySelector(".b")
  .addEventListener("click", () => filterByCharacter("Eevee"));
document
  .querySelector(".c")
  .addEventListener("click", () => filterByCharacter("Pikachu")); */
