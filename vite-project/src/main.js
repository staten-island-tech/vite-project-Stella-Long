import "./style.css";

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

//cards
function show(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-series = "${item.series}">
        <img
          class="img"
          src="${item.img}"
          alt="Pokemon Cards"
        />
        <h2 class="card_name">${item.name}</h2>
        <h3 class="card_series">${item.series}</h3>
        <h3 class="card_origin">${item.origin}</h3>

        <button class = "haveBtn">My Pokemon</button>
        <button class = "wantBtn">Want Pokemon</button>
    </div>`
  );
  const card = container.querySelector(".card");
  const haveButton = card.querySelector(".haveBtn");
  const wantButton = card.querySelector(".wantBtn");

  haveButton.addEventListener("click", () => {
    card.classList.add("have-pokemon");
    card.classList.remove("want-pokemon");
  });

  wantButton.addEventListener("click", () => {
    card.classList.add("have-pokemon");
    card.classList.remove("want-pokemon");
  });
}
pokemonCards.forEach((item) => show(item));

function filter(input) {
  const cards = document.querySelectorAll(".card");
  const search = input.toLowerCase();
  cards.forEach((card) => {
    const name = card.querySelector(".card_name").textContent.toLowerCase();
    const series = card.querySelector(".card_series").textContent.toLowerCase();
    const origin = card.querySelector(".card_origin").textContent.toLowerCase();
    if (
      name.includes(search) ||
      series.includes(search) ||
      origin.includes(search)
    ) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}
document.querySelector(".searchBar").addEventListener("click", () => {
  const input = document.querySelector(".search input").value;
  filter(input);
});

//upload
function upload(card) {
  card.preventDefault();
  const name = document.querySelector("#cardname").value;
  const character = document.querySelector("#cardcharacter").value;
  const series = document.querySelector("#cardseries").value;
  const origin = document.querySelector("#cardorigin").value;
  const img = document.querySelector("#cardimg").value;
  const newCard = {
    name: name,
    character: character,
    series: series,
    origin: origin,
    img: img,
  };
  show(newCard);
}
document.getElementById("upload").addEventListener("submit", upload);

//dark and light mode
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

function all() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = "inline-block";
  });
}
document.querySelector(".all").addEventListener("click", all);

function showHave() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.classList.contains("have-pokemon")) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}
document.querySelector(".have").addEventListener("click", showHave);

function showWant() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.classList.contains("want-pokemon")) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}
document.querySelector(".want").addEventListener("click", showWant);
