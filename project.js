// COLOR: data-color に入力した16進数をスウォッチへ反映
document.querySelectorAll(".color-chip").forEach((chip) => {
  const hex = chip.dataset.color;
  const swatch = chip.querySelector("i");
  const code = chip.querySelector("code");
  if (hex && swatch) swatch.style.backgroundColor = hex;
  if (hex && code) code.textContent = hex.toUpperCase();
});
