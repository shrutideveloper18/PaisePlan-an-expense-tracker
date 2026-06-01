// storage.js
export function saveBudget(month, amount) {
  const budgets = JSON.parse(localStorage.getItem("budgets")) || {};
  budgets[month] = amount;
  localStorage.setItem("budgets", JSON.stringify(budgets));
}

export function getBudget(month) {
  const budgets = JSON.parse(localStorage.getItem("budgets")) || {};
  return budgets[month] || 0;
}
