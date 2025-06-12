document.addEventListener("DOMContentLoaded", () => {
  const username = "Gifted-one"; // replace with your GitHub username
  const repoList = document.getElementById("repo-list");

  fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then((response) => response.json())
    .then((repos) => {
      repos.forEach((repo) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong><a href="${repo.html_url}" target="_blank">${
          repo.name
        }</a></strong>
            <p>${repo.description || "No description provided."}</p>
            <small>⭐ ${repo.stargazers_count} | 🛠 ${
          repo.language || "Unknown"
        }</small>
          `;

        repoList.appendChild(li);

        requestAnimationFrame(() => {
          text.style.display = "inline-block";
          text.style.maxWidth = "100%";
          fitTextToBox(text);
        });

        const text = li.querySelector("a");
        fitTextToBox(text);
      });
    })
    .catch((error) => {
      repoList.innerHTML = `<li>Error loading repositories.</li>`;
      console.error("GitHub API error:", error);
    });
});

function fitTextToBox(el, maxSize = 40, minSize = 20) {
  const parentBox = el.parentElement;
  const box = parentBox.parentElement;
  let fontSize = maxSize;

  el.style.fontSize = fontSize + "px";

  while (el.scrollWidth > box.clientWidth) {
    fontSize--;
    if (fontSize < minSize) break;
    el.style.fontSize = fontSize + "px";
  }
}
