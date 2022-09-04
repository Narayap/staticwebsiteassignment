const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products?$(product.id)";

fetch(url)
    .then(function(res){
        return res.json();
       
      })
      .then(function(data){
        handleProductList(data);
    });


    function handleProductList(data){
        //console.log(data);
        data.forEach(showProduct);
    }

    /*

    <article class="smallProduct">

    <div class="container">
        <div class="box">
            <div class="imgBox">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey">
            </div>
            <div class="content">
                <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
        <p class="subtle">Tshirts | Nike</p><br>
        <p class="price"><span>Prev.</span> DKK 1595,-</p><br>
        <div class="discounted">
          <p>Now DKK 1560,-</p>
          <p>-34%</p>
        </div>
        <a href="product.html">Read More</a>
            </div>
        </div>

    </article>

    */

    function showProduct(product){
        console.log(product);
        const template = document.querySelector("#smallProductTemplate").content;

        const copy = template.cloneNode(true);

        copy.querySelector(
            "img"
          ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

        copy.querySelector(
            ".subtle"
            ).textContent = `${product.articletype}  |  ${product.brandname} `;

            copy.querySelector(".price").textContent = `${product.price} DKK`;

            copy.querySelector("h3").textContent = product.productdisplayname;
            if (product.soldout) {
              copy.querySelector("article").classList.add("soldOut");
            }
            if (product.discount) {
              copy.querySelector("article").classList.add("onSale");
            }
            copy.querySelector(".discounted p").textContent =
              Math.round(product.price - (product.discount / 100) * product.price) +
              " DKK";
          
            copy.querySelector(".discounted p:nth-of-type(2)").textContent = `${
              product.discount
            }  ${"%"}`;
          
            copy.querySelector("a").href += product.id;
        
        copy.querySelector("h3").textContent = product.productdisplayname;
        const parent = document.querySelector("main");

        parent.appendChild(copy);
    }

        
      