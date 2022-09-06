const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("over-lay");

let projects = [
  {
    id: "tonic",
    name: "Tonic",
    description: "Some description",
    featured: "Some featured informations",
    image: "img url",
    technologies: ["html", "javascript", "css"],
    demo: "url",
    source: "url",
  },
  {
    id: "stories",
    name: "Multi-Post Stories",
    description: "Some description",
    featured: "Some featured informations",
    image: "img url",
    technologies: ["html", "javascript", "css"],
    demo: "url",
    source: "url",
  },
  {
    id: "facebook",
    name: "Facebook 360",
    description: "Some description",
    featured: "Some featured informations",
    image: "img url",
    technologies: ["html", "javascript", "css"],
    demo: "url",
    source: "url",
  },
  {
    id: "navigation",
    name: "Uber Navigation",
    description: "Some description",
    featured: "Some featured informations",
    image: "img url",
    technologies: ["html", "javascript", "css"],
    demo: "url",
    source: "url",
  },
];

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    projects.forEach((project) => {
      if(project.id === button.id){
        
      }
    });
    //console.log(proj);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
