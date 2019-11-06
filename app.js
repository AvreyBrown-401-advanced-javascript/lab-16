'use strict';

const fs = require('fs');
const util = require('util');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

// const alterFile2 = (file) => {
//   fileReader();
//   dateStuff();
//   fileWriter();
// };

const fileReader = async(file,data) => {
  const fsRead = util.promisify({file});
  data = 
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    return data;
  });
};



function dateStuff(data, file){
  let text = data.toString().toUpperCase();
  return text;
}

function fileWriter(file, text) {
  fs.writeFile( file, Buffer.from(text), (err, data) => {
    if(err) { throw err; }
    console.log(`${file} saved`);
  });
}

let file = process.argv.slice(2).shift();
alterFile(file);
