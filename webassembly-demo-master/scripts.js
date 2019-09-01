function loadWebAssembly(fileName) {
  return fetch(fileName)                           // 加载文件 
    .then(response => response.arrayBuffer())      // 转成 ArrayBuffer
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {
      return new WebAssembly.Instance(module);     // 初始化
    });
}

//load WebAssembly
loadWebAssembly('square.wasm').then(instance => {
  var square = instance.exports.square;

  document.getElementById('res2').innerHTML = square(2);
  document.getElementById('res3').innerHTML = square(3);
  document.getElementById('res4').innerHTML = square(4);
  document.getElementById('res5').innerHTML = square(5);
});
