function solution(input = []) {
  let set = new Set();
  for (let i = 0; i < input.length; i++) {
    set.add(input[i]);
  }
  set = new Set(
    [...set].sort((a, b) => a.length - b.length || a.localeCompare(b))
  );
  set.forEach((el) => console.log(el));
}
solution([
  "Ashton",
  "Kutcher",
  "Ariel",
  "Lilly",
  "Keyden",
  "Aizen",
  "Billy",
  "Braston",
]);
