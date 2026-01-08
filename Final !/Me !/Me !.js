const lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScroll = currentScroll;
});

const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  navList.classList.toggle('open');
});

const links = document.querySelectorAll('.nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navList.classList.remove('open');

    document.querySelector(link.getAttribute('href')).scrollIntoView();
  });
});

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

sections.forEach(section => observer.observe(section));

const container = document.getElementById('projects-container');
const count = document.getElementById('project-count');

displayProjects();

document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    displayProjects(btn.dataset.category);
  });
});

const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');