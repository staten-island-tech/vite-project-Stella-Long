import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>My Pokemon!</h1>
    <div class="container">
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    </div>
  </div>
`;
setupCounter(document.querySelector("#counter"));

const pokemonCards = [
  {
    name: "Pikachu VMAX (Full Art)",
    character: "Pikachu",
    series: "Vivid Voltage",
    origin: "English",
    img: "https://tcgplayer-cdn.tcgplayer.com/product/226432_in_1000x1000.jpg",
  },
  {
    name: "Pikachu VMAX (Rainbow Rare Full Art)",
    character: "Pikachu",
    series: "Vivid Voltage",
    origin: "English",
    img: "https://storage.googleapis.com/images.pricecharting.com/b4253710ee077b36198a6ad560b53302d045026a06588c8aa0b24012ecbc5872/1600.jpg",
  },
  {
    name: "Pikachu VMAX",
    character: "Pikachu",
    series: "SWSH Black Star Promos",
    origin: "English",
    img: "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/1280w/products/77093/182556/SWSH286_hires__88323.1683813817.png",
  },
  {
    name: "Pikachu VMAX (Secret Rare)",
    character: "Pikachu",
    series: "Lost Origin Trainer Gallery",
    origin: "English",
    img: "https://tcgplayer-cdn.tcgplayer.com/product/284302_in_1000x1000.jpg",
  },
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
    name: "Eevee VMAX",
    character: "Eevee",
    series: "SWSH Black Star Promos",
    origin: "English",
    img: "https://m.media-amazon.com/images/I/710ugsdR7BL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Eevee 188/167 (Illustration Rare - Full Art - Alternate)",
    character: "Eevee",
    series: "Twilight Masquerade",
    origin: "English",
    img: "https://m.media-amazon.com/images/I/718WR1R-zQL._AC_UF894,1000_QL80_.jpg",
  },
];

function inject(card) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-series = "${card.series}">
        <img
          class="img"
          src="${card.img}"
          alt="Pokemon Cards"
        />
        <h2 class="card_series">${card.series}</h2>
        <h3 class="card_name">${card.name}</h3>
        <p class="card_origin">${card.origin}</p>
    </div>`
  );
}
pokemonCards.forEach((card) => inject(card));
