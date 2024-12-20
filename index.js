function rollDice(){

  const numofDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  for(let i = 0; i<numofDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="diceimages/${value}.png" alt="Dice ${value}">`);
  }

  diceResult.textContent = `Dice Results: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
}