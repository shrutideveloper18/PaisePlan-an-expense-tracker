const params = new URLSearchParams(window.location.search);
const monthName = params.get("month");

document.getElementById("monthTitle").textContent = monthName;

let month_summmary_budget = document.getElementById("budget")
const budget = localStorage.getItem("budget_" + monthName)
month_summmary_budget.textContent = budget ? budget : "0";

const key = "items_" + monthName;
const items = JSON.parse(localStorage.getItem(key)) || [];

const list = document.getElementById("boughtList");

list.innerHTML = ""; // clear first
let used = 0;
items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    list.appendChild(li);
    used += Number(item.price);

});
document.getElementById("used").textContent = used;

const remaining =budget-used;
if((remaining)>=0){
document.getElementById("remaining").textContent = "₹"+remaining;
}
else{
    document.getElementById("remaining").textContent="₹"+remaining;
    document.getElementById("remaining").style.color="red";
}

const savings=remaining;
const savingmonth=monthName+"saving"
const spent=used;
const spentmonth=monthName+"used"
localStorage.setItem(savingmonth,savings)
localStorage.setItem(spentmonth,spent)