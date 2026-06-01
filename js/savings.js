let monthscard=document.querySelectorAll(".monthcard")
console.log(monthscard)
let totalsaving=0;
monthscard.forEach(element => {
    const monthName=element.querySelector("h3").textContent.trim();
    const savings=Number(localStorage.getItem(monthName+"saving"))||0;
    element.querySelector(".monthbudget").textContent="Budget:₹"+localStorage.getItem("budget_"+monthName)||0;
    element.querySelector(".monthspent").textContent="Spent:₹"+localStorage.getItem(monthName+"used")||0;
    if(savings>0){
    element.querySelector(".monthsaved").textContent="Saved:₹"+savings;
    totalsaving+=savings;
    }
});
localStorage.setItem("totalsaving",totalsaving)
document.querySelector("#totalsaving").textContent="₹"+localStorage.getItem("totalsaving");