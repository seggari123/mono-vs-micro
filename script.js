const services = document.querySelectorAll(".service");
const dropzones = document.querySelectorAll(".dropzone");
const available = document.getElementById("services");

services.forEach(service => {
  service.addEventListener("dragstart", () => {
    service.classList.add("dragging");
  });

  service.addEventListener("dragend", () => {
    service.classList.remove("dragging");
  });
});

dropzones.forEach(zone => {
  zone.addEventListener("dragover", e => {
    e.preventDefault();
    zone.style.backgroundColor = "#f0f8ff";
  });

  zone.addEventListener("dragleave", () => {
    zone.style.backgroundColor = "#fff";
  });

  zone.addEventListener("drop", () => {
    const dragging = document.querySelector(".dragging");
    zone.appendChild(dragging);
    zone.style.backgroundColor = "#fff";
  });
});

available.addEventListener("dragover", e => e.preventDefault());
available.addEventListener("drop", () => {
  const dragging = document.querySelector(".dragging");
  available.appendChild(dragging);
});
