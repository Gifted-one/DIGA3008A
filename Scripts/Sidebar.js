document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.createElement('nav');
  sidebar.id = 'sidebar';
  document.body.appendChild(sidebar);

  const headings = document.querySelectorAll('h2, h3'); // adjust as needed

  headings.forEach(heading => {
    if (!heading.id) heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-');

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    sidebar.appendChild(link);
  });

  const links = sidebar.querySelectorAll('a');

  window.addEventListener('scroll', () => {
    let current = '';
    headings.forEach(heading => {
      const top = heading.getBoundingClientRect().top;
      if (top <= 100) current = heading.id;
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
