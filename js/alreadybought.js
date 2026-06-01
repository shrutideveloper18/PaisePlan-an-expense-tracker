let productname = document.getElementById("nameofproduct")
let productprice = document.getElementById("priceofproduct")

let month = document.getElementById("productmonth")
let productdonebtn = document.getElementById("done")

productdonebtn.addEventListener("click", function () {
    
        const key = "items_" + month.value;
        let items = JSON.parse(localStorage.getItem(key)) || []
        items.push(
            {
                name: productname.value,
                price: Number(productprice.value)
            }
        );
        localStorage.setItem(key, JSON.stringify(items));
        alert("Successfully added")
        document.getElementById("nameofproduct").value = "";
        document.getElementById("priceofproduct").value = "";
        
    
})