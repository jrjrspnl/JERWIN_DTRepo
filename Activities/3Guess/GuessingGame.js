let data = [
  "James",
  "Carl",
  "Richard",
  "Maria",
  "kile",
  "Girl",
  "Boy",
  "ormoc",
  "tacloban",
  "maasin",
  "phone",
  "iphone",
  "android",
];

let guessGame = () => {
  let inputGuess = document.getElementById("guess").value;
  let index = parseInt(inputGuess);
  if (index < data.length) {
    alert("Data located at index " + index + ": " + data[index]);
  } else {
    alert("Data not in your array!");
  }
};
