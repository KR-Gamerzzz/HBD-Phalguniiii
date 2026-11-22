// Phalguni's birthday countdown — 28 November 2026
const birthday = new Date(2026, 10, 28, 0, 0, 0); // Month is zero-based: 10 = November

const el = (id) => document.getElementById(id);

function updateCountdown() {
  const now = new Date();
  const remaining = birthday.getTime() - now.getTime();

  if (remaining <= 0) {
    el("count-label").textContent = "TODAY IS YOUR DAY!";
    el("days").textContent = "00";
    el("hours").textContent = "00";
    el("minutes").textContent = "00";
    el("seconds").textContent = "00";
    el("wish-feedback").textContent = "It's your day, Phalguni. Make it wonderful! ♡";
    return;
  }

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  el("days").textContent = String(days).padStart(2, "0");
  el("hours").textContent = String(hours).padStart(2, "0");
  el("minutes").textContent = String(minutes).padStart(2, "0");
  el("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

el("letter-btn").addEventListener("click", () => {
  const content = el("letter-content");
  const opening = content.hidden;
  content.hidden = !opening;
  el("letter-btn").innerHTML = opening
    ? 'Close your letter <span>↙</span>'
    : 'Open your letter <span>↗</span>';
  el("letter-btn").setAttribute("aria-expanded", String(opening));
});

function celebrate() {
  const layer = el("confetti-layer");
  const symbols = ["✦", "✧", "♡", "✿", "❀"];
  for (let i = 0; i < 34; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 1.2}s`;
    piece.style.fontSize = `${12 + Math.random() * 13}px`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

el("wish-btn").addEventListener("click", () => {
  el("wish-feedback").textContent = "Your wish is on its way to the stars. ✨";
  celebrate();
});
