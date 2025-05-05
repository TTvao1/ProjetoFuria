let furiaScore = 0;
let naviScore = 0;
let gameEnded = false;

function updateScore() {
  if (gameEnded) return;

  const teamScored = Math.random() < 0.5 ? 'furia' : 'navi';

  if (teamScored === 'furia') {
    furiaScore++;
    document.getElementById("furia-score").textContent = furiaScore;
    notifyChat("⚔️ FURIA marcou um ponto! Pontuação: " + furiaScore);
  } else {
    naviScore++;
    document.getElementById("navi-score").textContent = naviScore;
    notifyChat("⚔️ NAVI marcou um ponto! Pontuação: " + naviScore);
  }

  if ((furiaScore >= 13 || naviScore >= 13) && Math.abs(furiaScore - naviScore) >= 2) {
    const vencedor = furiaScore > naviScore ? "FURIA" : "NAVI";
    document.getElementById("match-status").textContent = "🔥 Partida encerrada!";
    notifyChat(`🏁 Partida encerrada! Vitória da ${vencedor}`);
    gameEnded = true;
  }
}

// Envia mensagem para o chat (se existir)
function notifyChat(message) {
  const chatBox = document.getElementById("chat-box");
  if (chatBox) {
    const msg = document.createElement("div");
    msg.className = "chat-message";
    msg.textContent = "⚡ SISTEMA: " + message;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  updateScore();
  setInterval(updateScore, 20000); // Atualiza a cada 20 segundos
});