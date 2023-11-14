let showAll = document.getElementById("show-all");
let testing = "heo";

const pokemonData = [
  {
    name: "Pikachu",
    price: 25.99,
    rating: 4.5,
    category: "Electric",
    image: "assets/img/pokemon-header.jpg", // Add the image file name or URL
  },
  {
    name: "Charizard",
    price: 49.99,
    rating: 4.8,
    category: "Fire/Flying",
    image: "assets/img/charizard.jpg",
  },
  {
    name: "Bulbasaur",
    price: 19.99,
    rating: 4.2,
    category: "Grass/Poison",
    image: "assets/img/bulbasaur.jpg",
  },
  {
    name: "Squirtle",
    price: 22.99,
    rating: 4.3,
    category: "Water",
    image: "assets/img/squirtle.jpg",
  },
  {
    name: "Jigglypuff",
    price: 18.99,
    rating: 4.1,
    category: "Normal/Fairy",
    image: "assets/img/jigglypuff.jpg",
  },
  {
    name: "Mewtwo",
    price: 59.99,
    rating: 4.9,
    category: "Psychic",
    image: "assets/img/mewtwo.jpg",
  },
  {
    name: "Eevee",
    price: 29.99,
    rating: 4.6,
    category: "Normal",
    image: "assets/img/eevee.jpg",
  },
  {
    name: "Snorlax",
    price: 39.99,
    rating: 4.7,
    category: "Normal",
    image: "assets/img/snorlax.jpg",
  },
  {
    name: "Mew",
    price: 69.99,
    rating: 5.0,
    category: "Psychic",
    image: "assets/img/mew.jpg",
  },
  {
    name: "Gengar",
    price: 34.99,
    rating: 4.4,
    category: "Ghost/Poison",
    image: "assets/img/gengar.jpg",
  },
];
// Loop over each Pokémon in the array using a regular for loop
for (let i = 0; i < pokemonData.length; i++) {
  // Access each property of the current Pokémon
  const name = pokemonData[i].name;
  const price = pokemonData[i].price;
  const rating = pokemonData[i].rating;
  const category = pokemonData[i].category;
  const image = pokemonData[i].image;
  // Create a list item
  const listItem = document.createElement("li");

  // Create HTML content for the list item
  listItem.innerHTML = `
    <h2>${name}</h2>
    <p>Price: $${price}</p>
    <p>Rating: ${rating}</p>
    <p>Category: ${category}</p>
    <img src="${image}" alt="${name}" width="100">
  `;

  // Append the list item to the list
  pokemonList.appendChild(listItem);
}
