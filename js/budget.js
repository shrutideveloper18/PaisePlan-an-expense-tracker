let budget1=document.getElementById("budgetinput");
let monthbudget=document.getElementById("budgetmonth");
let setbudgetdone=document.getElementById("setbudgetdone")

setbudgetdone.addEventListener("click", function () {
  console.log("succesfully")
  const month=monthbudget.value;
  const budget=budget1.value;
  localStorage.setItem("budget_"+month, budget);

  alert("SUCCESSFULL");
});
