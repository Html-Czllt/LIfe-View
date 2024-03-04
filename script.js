// Data final da contagem regressiva (25 de abril de 2026)
const targetDate = new Date('2026-04-25T00:00:00').getTime();

// Atualiza o contador a cada segundo
const interval = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calcula os dias, horas, minutos e segundos restantes
  const days = Math.floor(distance / (1000 * 60 *   60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe o resultado na div "countdown"
  document.getElementById('countdown').innerHTML = `
    <div>${days} dias</div>
    <div>${hours} horas</div>
    <div>${minutes} minutos</div>
    <div>${seconds} segundos</div>
  `;

  // Se a contagem regressiva terminar, exibe uma mensagem e para o intervalo
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById('countdown').innerHTML = 'Contagem regressiva encerrada!';
  }
}, 1000);
