function encodeAndDecodeMessages() {
  const buttons = document.getElementsByTagName("button");
  const textarea = document.getElementsByTagName("textarea");
  buttons[0].addEventListener("click", function () {
    let encoded = "";
    for (let i = 0; i < textarea[0].value.length; i++) {
      encoded += String.fromCharCode(textarea[0].value[i].charCodeAt(0) + 1);
    }
    textarea[0].value = "";
    textarea[1].value = encoded;
  });
  buttons[1].addEventListener("click", function () {
    let decoded = "";
    for (let i = 0; i < textarea[1].value.length; i++) {
      decoded += String.fromCharCode(textarea[1].value[i].charCodeAt(0) - 1);
    }
    textarea[1].value = decoded;
  });
}
