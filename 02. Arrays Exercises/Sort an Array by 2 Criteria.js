function solution(input = []) {
  let sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(sorted.join("\n"));
}
solution(["test", "Deny", "omen", "Default"]);
