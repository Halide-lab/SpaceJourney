const museumRow = document.getElementById("museumRow");
const filterButtons = document.querySelectorAll(".filter-btn");

function showMuseums(filter = "all") {
  museumRow.innerHTML = "";

  const filteredMuseums = filter === "all"
    ? museums
    : museums.filter(museum => museum.category === filter);

  filteredMuseums.forEach(museum => {
    const card = document.createElement("a");
    card.className = "museum-card";
    card.href = `museum-detail.html?id=${museum.id}`;

    card.innerHTML = `
      <img src="${museum.image}" alt="${museum.name}">
      <div class="museum-info">
        <span>${museum.tag}</span>
        <h3>${museum.name}</h3>
        <p>${museum.short}</p>
      </div>
    `;

    museumRow.appendChild(card);
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    showMuseums(button.dataset.filter);
  });
});

showMuseums();