const comandos = {
  "!score": () => "📊 Placar: FURIA 11 x 8 NAVI",
  "!next": () => "⏳ Próximo jogo: FURIA vs G2 - 07/05 às 16:30",
  "!furia": () => "🔥 Line-up da FURIA: Chelo, KSCERATO, yuurih, FalleN, arT",
  "!help": () => "📝 Comandos disponíveis: !score, !next, !furia, !help",
  "!social": () => "📱 Siga a FURIA no Twitter e Instagram: @FURIAesports",
  "!stats": () => "📈 Estatísticas de jogador: Chelo - 1.17 K/D, KSCERATO - 1.22 K/D",
};

window.onload = () => {
  const saved = localStorage.getItem("furiaChat");
  if (saved) JSON.parse(saved).forEach(m => appendMessage(m));
};

function sendMessage() {
  const inp = document.getElementById("user-input");
  const text = inp.value.trim();
  if (!text) return;

  const userMsg = "Você: " + text;
  appendMessage(userMsg);

  const arr = JSON.parse(localStorage.getItem("furiaChat") || "[]");
  arr.push(userMsg);
  localStorage.setItem("furiaChat", JSON.stringify(arr));

  // Verifica se é um comando
  const resposta = comandos[text.toLowerCase()];
  if (resposta) {
    setTimeout(() => appendMessage("FURIA Bot: " + resposta()), 400);
    arr.push("FURIA Bot: " + resposta());
    localStorage.setItem("furiaChat", JSON.stringify(arr));
  }

  inp.value = "";
}

function appendMessage(m) {
  const d = document.createElement("div");
  d.className = "chat-message";
  d.textContent = m;
  document.getElementById("chat-box").appendChild(d);
  document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}

document.getElementById("user-input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});