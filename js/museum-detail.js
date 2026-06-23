const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const museum = museums.find(item => item.id === id) || museums[0];

document.title = `Journeyscape | ${museum.name}`;

document.getElementById("detailImage").src = museum.image;
document.getElementById("detailImage").alt = museum.name;
document.getElementById("detailTag").textContent = museum.tag;
document.getElementById("detailTitle").textContent = museum.name;
document.getElementById("detailText").textContent = museum.short;
document.getElementById("detailReason").textContent = museum.detail;