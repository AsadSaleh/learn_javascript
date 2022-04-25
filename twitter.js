const args = process.argv.slice(2);

const test1 = "Codility we test coders";

if (args.length > 1) {
  args.forEach((arg) => solution(test1, arg));
} else {
  solution(test1, Number(args[0]));
}

function solution(message, K) {
  const curIdx = K - 1;
  if (K >= message.length) {
    result = message;
  } else if (message[curIdx] === " ") {
    result = message.substring(0, curIdx);
  } else if (message[curIdx + 1] === " ") {
    result = message.substring(0, curIdx + 1);
  } else if (message[curIdx - 1] === " ") {
    result = message.substring(0, curIdx - 1);
  } else {
    // berarti ditengah. cari apakah dia punya space awal:
    const prevSpaceIdx = getPrevSpace(message, K - 1);
    if (prevSpaceIdx != -1) {
      console.log("dari sini?");
      result = message.substring(0, prevSpaceIdx);
    } else {
      result = "";
    }
  }

  console.log("=============== input : ", message, ". limit: ", K);
  console.log("=============== result: ", `"${result}"`);

  return result;
}

function getPrevSpace(message, startIndex) {
  let count = 0;
  for (let i = startIndex; i >= 0; i--) {
    if (i === 0) {
      return -1;
    }
    if (message[i] === " ") {
      return startIndex - count;
    }
    count++;
  }
}
