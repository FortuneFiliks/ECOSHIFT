document.addEventListener("DOMContentLoaded", function () {

  const pathParts = window.location.pathname.split('/');
  const baseFolder = pathParts[1] ? "/" + pathParts[1] : "";
  const basePath = baseFolder + "/COMPONENTS/";

  const elements = document.querySelectorAll("[data-include]");

  Promise.all(
    Array.from(elements).map(el => {
      const file = el.getAttribute("data-include") + ".html";

      return fetch(basePath + file)
        .then(res => {
          if (!res.ok) {
            console.warn("Missing:", file);
            return ""; // 🔥 DON'T break everything
          }
          return res.text();
        })
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => {
          console.error("Error loading:", file, err);
        });
    })
  )
  .then(() => {
    document.dispatchEvent(new Event("includesLoaded"));
  });

});