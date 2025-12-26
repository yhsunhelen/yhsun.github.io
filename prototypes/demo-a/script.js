// Year
document.getElementById("y").textContent = new Date().getFullYear();

// Lightbox
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");

function openLB(src, alt = "") {
  lbImg.src = src;
  lbImg.alt = alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLB() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lbImg.src = "";
}

document.querySelectorAll("[data-full]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-full");
    const img = btn.querySelector("img");
    openLB(src, img ? img.alt : "");
  });
});

lbClose.addEventListener("click", closeLB);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLB();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLB();
});
