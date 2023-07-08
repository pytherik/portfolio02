const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const projects = document.querySelector('.img-container');

toggle.addEventListener('click', () => nav.classList.toggle('active'));
// nav.addEventListener('click', () => nav.classList.toggle('active'));

projects.addEventListener('click', (e) => {
  if (!e.target.classList.contains('project') &&
    !e.target.classList.contains('overlay') &&
    !e.target.classList.contains('inner')) return;
  e.target.classList.contains('project') ?
    e.target.nextElementSibling.classList.toggle('show') :
    e.target.classList.contains('inner') ?
      e.target.parentElement.classList.toggle('show') :
      e.target.classList.toggle('show');
})