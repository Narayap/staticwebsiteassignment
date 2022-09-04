const url = "https://kea-alt-del.dk/t7/api/products/2801";

//fetch the data
fetch(url)
      .then((res)=>res.json())
         .then((data)=>showProduct(data));

//populate the page

function showProduct(product) {
    console.log(product);
    
    document.querySelector(
        "img.productImg"
      ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    document.querySelector("img.productimage").alt=product.productdisplayname;
    document.querySelector("img.productImg").alt = product.productdisplayname;
    document.querySelector(".product h2").textContent = product.brandname;
    document.querySelector(".productText h3").textContent =
      product.productdisplayname;
    document.querySelector(
      ".productText h4"
    ).textContent = `${product.price} DKK`;
  
    document
      .querySelector("ol .brand")
      .setAttribute(
        "href",
        `productlist.html?product&brandname=${product.brandname}`
      );
    /*document.querySelector(".productText .colour").textContent =
      product.basecolour;*/
    document.querySelector(".productInfo #styledesc").innerHTML =
      product.styledesc;
    document.querySelector(".productInfo #description").innerHTML =
      product.description;
    document.querySelector(".productInfo #brandname").textContent =
      product.brandname;
    document.querySelector(".productInfo #brandbio").textContent =
      product.brandbio;
  }









