function getProducts(){
    return JSON.parse(localStorage.getItem("products"))||[]
}
function saveProducts(products){
    localStorage.setItem("products",JSON.stringify(products))
}



// function addproduct(pname, pprice, ppriority, pimage,bought=false,url="") {

//     let html =
//     `<div class=productrow><div class="productcard" data-name="${pname}">
//         <img src="${pimage}" alt="">
//         <h2 class="productname">${pname}</h2>
//         <h2 class="productprice">${pprice}</h2>

//         <button class="btn2 mark">${bought ? "Bought" : "Mark as bought"}</button>
//         <button class="btn2 buy" data-url="${url}">Buy Now</button>
//         <button class="btn2 remove">REMOVE PRODUCT</button>
//     </div></div>`;
//     if (ppriority === "high") {
//         document.querySelector(".highpriority").innerHTML += html;
//     } 
//     else if (ppriority === "medium") {
//         document.querySelector(".mediumpriority").innerHTML += html;
//     } 
//     else if (ppriority === "low") {
//         document.querySelector(".lowpriority").innerHTML += html;
//     }
// }
function addproduct(pname, pprice, ppriority, pimage, bought = false, url = "") {

    const cardHTML = `
      <div class="productcard" data-name="${pname}">
        <img src="${pimage}" alt="">
        <h2 class="productname">${pname}</h2>
        <h2 class="productprice">${pprice}</h2>

        <button class="btn2 mark">
          ${bought ? "Bought" : "Mark as bought"}
        </button>
        <button class="btn2 buy" data-url="${url}">Buy Now</button>
        <button class="btn2 remove">REMOVE PRODUCT</button>
      </div>
    `;

    let container;

    if (ppriority === "high") {
        container = document.querySelector(".highpriority .productrow");
    } else if (ppriority === "medium") {
        container = document.querySelector(".mediumpriority .productrow");
    } else {
        container = document.querySelector(".lowpriority .productrow");
    }

    container.insertAdjacentHTML("beforeend", cardHTML);
}


let pname = document.getElementById("productname")
let pprice = document.getElementById("productprice")
let purl = document.getElementById("producturl")
let ppriority = document.getElementById("productpriority")
let pimage = document.getElementById("productphoto")
let addproductb = document.getElementById("addproductbtn")


addproductb.addEventListener("click", (e) => {
    e.preventDefault();
    const product={
        name:pname.value,
        price:pprice.value,
        priority:ppriority.value,
        image: pimage.value,
        url:purl.value,
        bought:false
    };
    let products=getProducts();
    products.push(product);
    saveProducts(products)
    addproduct(pname.value, pprice.value,ppriority.value, pimage.value,false,purl.value)
    pname.value = ""
    pprice.value = ""
    pimage.value = ""
    purl.value=""
    ppriority.value=""
})
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("buy")) {
        const url = e.target.dataset.url;

        if (url) {
            window.open(url, "_blank");
        } else {
            alert("No product link available");
        }
    }
});

window.addEventListener("load", () => {
    let products = getProducts();
    products.forEach(p => {
        addproduct(p.name, p.price, p.priority, p.image, p.bought,p.url);
    });
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove")) {
        const productCard = e.target.closest(".productcard");
        const name = productCard.dataset.name;

        let products = getProducts();
        products = products.filter(p => p.name !== name);
        saveProducts(products);

        productCard.remove();
    }
});


document.addEventListener("click", function (e) {
    if (e.target.classList.contains("mark")) {
        e.target.textContent = "Bought";

        const productCard = e.target.closest(".productcard");
        const name = productCard.dataset.name;

        let products = getProducts();
        products.forEach(p => {
            if (p.name === name) {
                p.bought = true;
            }
        });
        saveProducts(products);
    }
});

