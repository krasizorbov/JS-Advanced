function attachEventsListeners() {
  let converter = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };
  let inputNumber = document.getElementById("inputDistance");
  let outputNumber = document.getElementById("outputDistance");
  let convertBtn = document.getElementById("convert");
  let inputOption = document.getElementById("inputUnits");
  let outputOption = document.getElementById("outputUnits");

  convertBtn.addEventListener("click", function (e) {
    let fromUnit = inputOption.value;
    let toUnit = outputOption.value;
    let input = Number(inputNumber.value);
    outputNumber.value = (input * converter[fromUnit]) / converter[toUnit];
  });
}
