const modal = document.getElementById("artModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".art img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;

    const parent = img.closest(".art");
    const title = parent.getAttribute("data-title");
    const artist = parent.getAttribute("data-artist");
    const year = parent.getAttribute("data-year");

    captionText.innerHTML = `<strong>${title}</strong> by ${artist} (${year})`;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};
