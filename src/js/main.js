"use strict";

/*Variables*/
let API_Key = "563492ad6f9170000100000197b3f2ff2de44d0f8b46fa4f7b03d27b";
const gallery = document.getElementById("gallery");
let fetchLink;

/*Functions*/
window.onload = init();
function init() {
  console.log("Getting images from Pexels API..");
  curatedPhotos();
}
/*Fetching API Function*/
async function fetchAPI(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json", Authorization: API_Key },
  });
  const data = await dataFetch.json();
  return data;
}
async function curatedPhotos() {
  fetchLink = "https://api.pexels.com/v1/curated?per_page=5&page=2";
  const data = await fetchAPI(fetchLink);
  generatePictures(data);
}

function generatePictures(data) {
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    /*Classname for styling */
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `

        <p>By ${photo.photographer}</p>
        <picture>
            <source srcset="${photo.src.large}.jpg?as=webp&width=200" type="image/webp">
            <source srcset="${photo.src.large}.png?as=webp&width=200" type="image/webp">
            <img src="${photo.src.large}" alt="${photo.alt}">
        </picture>     
    `;
    gallery.appendChild(galleryImg);
  });
}
