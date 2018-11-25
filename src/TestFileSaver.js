import React from 'react';
import saveAs from 'file-saver';

const saveFile = () => {
  var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "hello world.txt");
};

const TestFileSaver = () => (
    <button onClick={() => {
      setTimeout(saveFile, 3000)
    }}>
      FileSaver button
    </button>
);

export default TestFileSaver;
