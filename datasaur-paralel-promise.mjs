import _ from "lodash";

const MAX_PARALEL_DOWNLOAD = 3;

const files = [
  {
    name: "download-file1.txt",
    downloadTime: 1000,
  },
  {
    name: "download-file2.txt",
    downloadTime: 2000,
  },
  {
    name: "download-file3.txt",
    downloadTime: 3000,
  },
  {
    name: "download-file4.txt",
    downloadTime: 4000,
  },
  {
    name: "download-file5.txt",
    downloadTime: 5000,
  },
  {
    name: "download-file6.txt",
    downloadTime: 6000,
  },
  {
    name: "download-file7.txt",
    downloadTime: 7000,
  },
].map((f, i) => ({ ...f, id: i, isDone: false, isDownloading: false }));

async function downloadFileById(id) {
  const file = files.find((f) => f.id === id);
  console.log(`=== Downloading ${file.name} `);

  return new Promise((r) =>
    setTimeout(() => {
      console.log(`=== Finished Download ${file.name}`);
      r();
    }, file.downloadTime)
  );
}

// Solution 0:
// for (const i in files) {
//   await downloadFileByIdx(i);
// }

// Solution 1:
// Promise.all(files.map((_, i) => downloadFileByIdx(i)));

// Solution 2:
// const chunkedArr = _.chunk(files, MAX_PARALEL_DOWNLOAD);
// for (let fileChunks of chunkedArr) {
//   await Promise.all(fileChunks.map((f) => downloadFileByIdx(f.id)));
// }

// Solution 3:
let workCount = 0;
async function recursivuh() {
  for (let i in files) {
    const file = files[i];
    if (workCount < MAX_PARALEL_DOWNLOAD) {
      if (!file.isDone && !file.isDownloading) {
        workCount++;

        files[i].isDownloading = true;
        downloadFileById(file.id).then(() => {
          files[i].isDownloading = false;
          files[i].isDone = true;
          workCount--;
          recursivuh();
        });
      }
    }
  }

  if (files.every((file) => file.isDone)) {
    return;
  }
}

recursivuh();
