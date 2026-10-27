(() => {
  const images = [...document.querySelectorAll("img[data-animated]")];
  const button = document.querySelector("[data-animation-toggle]");
  if (!images.length || !button) return;

  let running = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function update() {
    images.forEach((image) => {
      image.src = running ? image.dataset.animated : image.dataset.still;
    });
    button.textContent = running ? "Pause animations" : "Play animations";
    button.setAttribute("aria-pressed", String(!running));
  }

  button.addEventListener("click", () => {
    running = !running;
    update();
  });

  update();
})();
