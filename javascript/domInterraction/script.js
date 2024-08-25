const changeButton = document.getElementById("changeButton");
const myText = document.getElementById("myText");

changeButton.addEventListener("click", () => {
  myText.textContent = "Hello, Check!";
});
