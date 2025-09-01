const lightBox = document.querySelector(".lightbox");
const closeBtn = document.querySelector("#close-btn");
const lightBoxImg = document.querySelector("#lightbox-image");
const galleryThumbnailImgs = document.querySelectorAll(".gallery-item");
const lightBoxImgLinks = [
  "./gallery/2d-dodge-srt.jpg",
  "./gallery/programmer-sipping-coffee.png",
  "./gallery/young-rapper.jpg",
  "./gallery/blue-toon-spider.png",
  "./gallery/toon-tarantula.png",
  "./gallery/freehand-spider.jpg",
  "./gallery/spider-svg.jpg",
  "./gallery/black-hoodie-robot.jpg",
  "./gallery/programming-robot.png",
  "./gallery/springs-reopening.png"
];
galleryThumbnailImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightBox.style.display = "flex";
    lightBoxImg.setAttribute("src", lightBoxImgLinks[index]);
  })
})
const closeLightBox = () => lightBox.style.display = "none";
closeBtn.addEventListener("click", closeLightBox);
lightBox.addEventListener("click", closeLightBox);