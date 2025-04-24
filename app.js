var items = [
  {
    ptitle: "Iphone 16 Pro Max",
    pmodel: "2024",
    pprice: "400000",
    pdiscription: "PTA Approved",
    pimg: "https://applepakistan.com.pk/wp-content/uploads/2024/09/iphone-16-pro-model-unselect-gallery-2-202409_GEO_US-scaled.webp",
  },
  {
    ptitle: "Samsung Galaxy S25 Ultra",
    pmodel: "2025",
    pprice: "300000",
    pdiscription: "PTA Approved",
    pimg: "https://images.samsung.com/pk/smartphones/galaxy-s25-ultra/buy/product_color_silverBlue_PC.png?imbypass=true",
  },
  {
    ptitle: "Lamborghini REVUELTO",
    pmodel: "2025",
    pprice: "100000000",
    pdiscription: "",
    pimg: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2025/s3.jpg",
  },
  {
    ptitle: "BUGATTI CHIRON",
    pmodel: "2025",
    pprice: "1500000000",
    pdiscription: "",
    pimg: "https://bugatti.imgix.video/6766cc42627849f44b5faaa6/bugatti_chiron_360_16x9_v01-output.mp4?video-generate=thumbnail&video-thumbnail-time=0&w=500&blur=10",
  },
  {
    ptitle: "Iphone 16 Pro Max",
    pmodel: "2024",
    pprice: "400000",
    pdiscription: "PTA Approved",
    pimg: "https://applepakistan.com.pk/wp-content/uploads/2024/09/iphone-16-pro-model-unselect-gallery-2-202409_GEO_US-scaled.webp",
  },
  {
    ptitle: "Samsung Galaxy S25 Ultra",
    pmodel: "2025",
    pprice: "300000",
    pdiscription: "PTA Approved",
    pimg: "https://images.samsung.com/pk/smartphones/galaxy-s25-ultra/buy/product_color_silverBlue_PC.png?imbypass=true",
  },
  {
    ptitle: "Lamborghini REVUELTO",
    pmodel: "2025",
    pprice: "100000000",
    pdiscription: "",
    pimg: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2025/s3.jpg",
  },
  {
    ptitle: "BUGATTI CHIRON",
    pmodel: "2025",
    pprice: "1500000000",
    pdiscription: "",
    pimg: "https://bugatti.imgix.video/6766cc42627849f44b5faaa6/bugatti_chiron_360_16x9_v01-output.mp4?video-generate=thumbnail&video-thumbnail-time=0&w=500&blur=10",
  }
];

for (var i = 0; i < items.length; i++) {
  var main = document.getElementById("main");
  main.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${items[i].pimg}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${items[i].ptitle}</h5>
    <h5 class="card-title">${items[i].pmodel}</h5>
    <p class="card-text">RS: ${items[i].pprice} </p>
    </div>
</div>`;
}
