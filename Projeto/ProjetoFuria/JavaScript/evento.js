document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".schedule-list li");
  
    const now = new Date();
  
    items.forEach((item) => {
      const timeText = item.querySelector(".time").textContent;
      const [dateStr, hourStr] = timeText.split("•").map(s => s.trim());
  
      const [day, month] = dateStr.split("/").map(Number);
      const [hour, minute] = hourStr.split(":").map(Number);
  
      const gameDate = new Date(now.getFullYear(), month - 1, day, hour, minute);
  
      if (gameDate > now && !document.querySelector(".next-match")) {
        item.classList.add("next-match");
        item.insertAdjacentHTML("beforeend", `<button class="reminder-btn">🔔 Lembrar</button>`);
      }
  
      // Ação do botão de lembrete
      const btn = item.querySelector(".reminder-btn");
      if (btn) {
        btn.addEventListener("click", () => {
          alert("Alerta de lembrete ativado para este jogo!");
        });
      }
    });
  });  