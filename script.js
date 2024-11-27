const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollDiceBtn = document.getElementById("rollDiceBtn");
const result = document.getElementById("result");

rollDiceBtn.addEventListener("click", () => {
  // Generate random numbers between 1 and 6
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;

  // Update dice visuals
  dice1.textContent = `🎲 ${roll1}`;
  dice2.textContent = `🎲 ${roll2}`;

  // Determine winner
  if (roll1 > roll2) {
    result.textContent = "ℙʟᴀʏᴇʀ 𝟙 𝕎ɪɴ𝕤❕🎉";
  } else if (roll2 > roll1) {
    result.textContent = "ℙʟᴀʏᴇʀ 𝟚 𝕎ɪɴ𝕤❕🎉";
  } else {
    result.textContent = "𝕀𝕥❜𝕤 𝕒 𝔻𝕣𝕒𝕨❕ 🤝";
  }
});

