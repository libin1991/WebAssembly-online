// emcc ./node.c -s WASM=1 -o node.wasm
const fs = require('fs');
let src = new Uint8Array(fs.readFileSync('./square.wasm'));

const env = {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({
        initial: 256,
        maximum: 256
    }),
    table: new WebAssembly.Table({
        initial: 0,
        maximum: 0,
        element: 'anyfunc'
    }),
    abort: () => {
        throw 'abort';
    }
}

WebAssembly.instantiate(src, { env: env }).then(result => {
    const sum = result.instance.exports.square(5);
    console.log(sum);
}).catch((e) => {
    console.log(e);
});