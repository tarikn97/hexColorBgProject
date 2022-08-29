const colors = [{ color: "red" }, {}, {}, {}, {}, {}];

(function () {
  const button = document.querySelector("#btn"); // id ima prefix #
  const body = document.querySelector("body"); // html element nema prefix
  const spanValue = document.querySelector("#hex-value");

  // niz boja
  const hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  function changeBackgroundColor() {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * hexValues.length);
      let element = hexValues[index];
      hexCode = hexCode + element;
    }

    spanValue.textContent = hexCode;
    body.style.backgroundColor = hexCode;
  }

  button.addEventListener("click", changeBackgroundColor); // odgovara na neku radnju
})();
