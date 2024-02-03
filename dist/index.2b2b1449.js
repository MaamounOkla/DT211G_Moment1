!function(){let e=document.getElementById("gallery");async function t(e){let t=await fetch(e,{method:"GET",headers:{Accept:"application/json",Authorization:"563492ad6f9170000100000197b3f2ff2de44d0f8b46fa4f7b03d27b"}});return await t.json()}async function a(){!function(t){t.photos.forEach(t=>{let a=document.createElement("div");a.classList.add("gallery-img"),a.innerHTML=`

        <p>By ${t.photographer}</p>
        <picture>
            <source srcset="${t.src.large}.jpg?as=webp&width=200" type="image/webp">
            <source srcset="${t.src.large}.png?as=webp&width=200" type="image/webp">
            <img src="${t.src.large}" alt="${t.alt}">
        </picture>     
    `,e.appendChild(a)})}(await t("https://api.pexels.com/v1/curated?per_page=5&page=2"))}window.onload=void(console.log("Getting images from Pexels API.."),a())}();
//# sourceMappingURL=index.2b2b1449.js.map
