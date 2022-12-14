/* eslint-disable linebreak-style */
const openModalButtons = document.querySelectorAll('[data-modal-target]');
let closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('over-lay');
let modal = document.querySelector('.modal');

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function listen() {
  closeModalButtons = document.querySelectorAll('[data-close-button]');
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal = button.closest('.modal');
      closeModal(modal);
    });
  });
}

const projects = [
  {
    id: 'tonic',
    name: 'Rinse',
    featured: ['CANOPY', 'Back End Dev', 2015],
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
    reiciendis assumenda, voluptas id autem itaque non laudantium cupiditate
    tempora dolores, deserunt ullam atque aliquam voluptatum. Temporibus
    harum consectetur at rerum!`,
    image: './src/assets/images/capstone-1.png',
    technologies: ['html', 'javascript', 'css'],
    demo: 'https://j-tee.github.io/capstone-1/',
    source: 'https://github.com/j-tee/capstone-1',
  },
  {
    id: 'stories',
    name: 'Awesome Books',
    featured: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
    reiciendis assumenda, voluptas id autem itaque non laudantium cupiditate
    tempora dolores, deserunt ullam atque aliquam voluptatum. Temporibus
    harum consectetur at rerum!`,
    image: './src/assets/images/awesome-book.png',
    technologies: ['html', 'javascript', 'css'],
    demo: 'https://j-tee.github.io/awesome-books-es6/',
    source: 'https://github.com/j-tee/awesome-books-es6/tree/master',
  },
  {
    id: 'facebook',
    name: 'To Do List',
    featured: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
    reiciendis assumenda, voluptas id autem itaque non laudantium cupiditate
    tempora dolores, deserunt ullam atque aliquam voluptatum. Temporibus
    harum consectetur at rerum!`,
    image: './src/assets/images/todolist.png',
    technologies: ['html', 'javascript', 'css'],
    demo: 'https://j-tee.github.io/to-do-list/dist/',
    source: 'https://github.com/j-tee/to-do-list',
  },
  {
    id: 'navigation',
    name: 'Navigation',
    featured: ['Uber', 'Lead Developer', 2015],
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
    reiciendis assumenda, voluptas id autem itaque non laudantium cupiditate
    tempora dolores, deserunt ullam atque aliquam voluptatum. Temporibus
    harum consectetur at rerum!`,
    image: './src/assets/images/navigation-1.svg',
    technologies: ['html', 'javascript', 'css'],
    demo: 'url',
    source: 'url',
  },
];

function openModal(modal, project) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');

  modal.innerHTML = `<div class="modal-header">
        <div class="modal-title">${project.name} Details</div>
        <button data-close-button class="close-button"><img src="./src/assets/images/close-icon.svg"></button>
      </div>
      <ul class="list-items" id="featured">
        
      </ul>
      <div class="card-img-block">
      <img
        class="popup-img"
        src= ${project.image}
        alt=""
      />
      </div>
      <div class="disp-style">
      <p class="feature">
        ${project.description}
      </p>
      <div class="popup-btn-tags">
      <ul class="card-tags" id="popup-tags">
        
      </ul>
      <div class="popup-btns">
        <button id='demo-btn' class="popup-btn"><span>See Live</span>&nbsp;<span><img src="./src/assets/images/live-demo.svg" alt=""></span></button>
        <button id="source-btn" class="popup-btn"><span>See Source</span>&nbsp;<span><img src="./src/assets/images/github_blue.svg" alt=""></span></button>
      </div>
      </div>
      </div>`;
  const ul = document.getElementById('popup-tags');
  project.technologies.forEach((tech) => {
    const li = document.createElement('li');
    li.innerHTML = tech;
    ul.appendChild(li);
  });
  const tag = document.getElementById('featured');
  project.featured.forEach((feature) => {
    const li = document.createElement('li');
    li.innerHTML = feature;
    tag.appendChild(li);
  });
  tag.children[0].classList.add('count');
  const demoBtn = document.getElementById('demo-btn');
  demoBtn.addEventListener('click', () => {
    window.open(project.demo);
  });
  const srcBtn = document.getElementById('source-btn');
  srcBtn.addEventListener('click', () => {
    window.open(project.source);
  });
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal = document.querySelector(button.dataset.modalTarget);
    projects.forEach((project) => {
      if (project.id === button.id) {
        openModal(modal, project);
        listen();
      }
    });
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((mod) => {
    closeModal(mod);
  });
});
