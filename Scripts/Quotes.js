document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://api.allorigins.win/get?url=" +
      encodeURIComponent("https://zenquotes.io/api/random"),
    { cache: "no-store" }
  )
    .then((response) => response.json())
    .then((data) => {
      const parsed = JSON.parse(data.contents); // allorigins wraps it
      const quoteText = parsed[0].q;
      const quoteAuthor = parsed[0].a;

      document.getElementById("quote").textContent = `"${quoteText}"`;
      document.getElementById("author").textContent = `—
   ${quoteAuthor}`;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
      document.getElementById("quote").textContent = "Could not load quote.";
    });
});
