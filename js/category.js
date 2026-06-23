const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const data = journeyData[type] || journeyData.museum;

document.title = `Journeyscape | ${data.title}`;

document.querySelector(".category-hero").style.backgroundImage = `url("${data.background}")`;
document.getElementById("categoryKicker").textContent = data.kicker;
document.getElementById("categoryTitle").textContent = data.title;
document.getElementById("categoryDescription").textContent = data.description;

const grid = document.getElementById("placesGrid");

data.places.forEach(place => {
  const card = document.createElement("article");
  card.className = "place-card";

  card.innerHTML = `
    <img src="${place.image}" alt="${place.name}">
    <div class="place-info">
      <span>${place.tag}</span>
      <h3>${place.name}</h3>
      <p>${place.text}</p>
    </div>
  `;

  grid.appendChild(card);
});