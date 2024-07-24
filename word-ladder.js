const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "words.dict");
const fileContent = fs.readFileSync(filePath, "utf-8");
const wordsBank = fileContent.split("\n").map((w) => w.toLowerCase());

function wordLadder(beginWord, endWord, wordList) {
  const timeStart = performance.now();
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let queue = [[beginWord, [beginWord]]];

  while (queue.length > 0) {
    // Remove currentWord from queue
    const [currentWord, path] = queue.shift();

    // Handle success
    if (currentWord === endWord) {
      console.log(`${performance.now() - timeStart} ms`);
      return path;
    }

    for (let i = 0; i < currentWord.length; i++) {
      for (let char of alphabet) {
        if (char !== currentWord[i]) {
          // Generate newWord that have 1 character difference with currentWord
          let newWord =
            currentWord.slice(0, i) + char + currentWord.slice(i + 1);

          // If newWord is in dictionary, push the newWord to the queue
          if (wordSet.has(newWord)) {
            queue.push([newWord, path.concat(newWord)]);
            wordSet.delete(newWord); // Remove to prevent re-visiting
          }
        }
      }
    }
  }

  return [];
}

console.log(wordLadder("nice", "brow", wordsBank));
console.log(wordLadder("tags", "fast", wordsBank));
console.log(wordLadder("nice", "hero", wordsBank));
console.log(wordLadder("baby", "crib", wordsBank));
