function solution(input = []) {
  let pattern = /\w+/g;
  let result = input.shift().match(pattern);
  let words = {};
  for (const word of result) {
    if (!words.hasOwnProperty(word)) {
      words[word] = 0;
    }
    words[word]++;
  }
  console.log(JSON.stringify(words));
}
solution(["Far too slow, you're far too slow."]);
