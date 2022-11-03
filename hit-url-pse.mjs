// const maxPage = 1056;
import * as fs from 'node:fs/promises';
const outputFilePath = "output/schools.json";

await fs.writeFile(outputFilePath, JSON.stringify(['test data'], null, 2));


const baseUrl = "https://pse.kominfo.go.id/static/json-static/LOKAL_TERDAFTAR"

const getMaxPage = async () => {
    const data = await fetch(`${baseUrl}/0.json`).then(res => res.json()).then(res => res.meta.page.lastPage)
    console.log("lastpage: ", data)
    return data;
}

// const maxPage = await getMaxPage()
// console.log({ maxPage })

// page from 0 to maxPage - 1;
const getData = async (page = 0) => {
    const data = await fetch(`${baseUrl}/${page}.json`).then(res => res.json()).then(res => res.data.map(datum => ({
        type: datum.type,
        id: datum.id,
        ...datum.attributes
    })))
    console.log("data: ", data)
    return data;
}

// const data = await getData();

const sleep = ms => new Promise((res, rej) => setTimeout(res), ms)

const fileHandle = await fs.open('./output/kominfo-pse.json')

// Execute the magic:
for (let i = 0, p = Promise.resolve(); i < 5; i++) {
    p = p.then(() => sleep(i * 1000)).then(data => fileHandle.write('abcdefg'))
}

await fileHandle.close();



console.log(getData())
