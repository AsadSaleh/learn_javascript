const xhr = new XMLHttpRequest();

xhr.addEventListener('loadstart', () => console.log('starting, 0%'))
xhr.addEventListener('progress', (e) => console.log(`${e.type}: ${e.loaded} sekian bytes`));
xhr.addEventListener('load', () => console.log('success 100%'))
xhr.addEventListener('error', () => console.log('error'))
xhr.addEventListener('abort', () => console.log('aborted'))
