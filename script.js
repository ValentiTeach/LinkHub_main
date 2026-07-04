// ========================================
// LinkHub — script.js
// Інтерактив: перемикання теми
// ========================================

// 1. Знаходимо кнопку за id
const themeToggle = document.getElementById("themeToggle");

// 2. Перевіряємо збережену тему (localStorage зберігає між сесіями)
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀️ Світла тема";
}

// 3. Вішаємо слухач подій на кнопку
themeToggle.addEventListener("click", function () {
  // Перемикаємо клас .light на <body>
  document.body.classList.toggle("light");

  // Визначаємо поточну тему
  const isLight = document.body.classList.contains("light");

  // Оновлюємо текст кнопки
  themeToggle.textContent = isLight ? "☀️ Світла тема" : "🌙 Темна тема";

  // Зберігаємо вибір у localStorage
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
