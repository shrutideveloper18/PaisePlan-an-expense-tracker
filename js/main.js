const monthCards = document.querySelectorAll(".months-card");

monthCards.forEach(card => {
  card.addEventListener("click", () => {
    const monthName = card.dataset.month;
    window.location.href = `month.html?month=${monthName}`;
  });
});
