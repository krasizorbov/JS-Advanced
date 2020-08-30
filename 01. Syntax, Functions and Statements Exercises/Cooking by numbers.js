function solution(input = []) {
  let num = input[0];
  for (let i = 1; i < input.length; i++) {
    switch (input[i]) {
      case "chop":
        num /= 2;
        break;
      case "dice":
        num = Math.sqrt(num);
        break;
      case "spice":
        num += 1;
        break;
      case "bake":
        num *= 3;
        break;
      case "fillet":
        num *= 0.8;
        break;
      default:
        break;
    }
    console.log(num);
  }
}
solution(["32", "chop", "chop", "chop", "chop", "chop"]);
