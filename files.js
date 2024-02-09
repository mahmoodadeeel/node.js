//reading a file
const fs = require('fs');


/*fs.readFile('./docs/doc.txt', (err, data) => {
  if (err){
    console.log(err);
  }
  console.log(data.toString());
});

*/
// writing a file

/*fs.writeFile('./docs/doc.txt',' hello world',() => {
 console.log('file was written');
})*/
//console.log('last line');
//directories
/*if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) =>{
        if(err){
            console.log(err);
        }
        console.log("folder created");
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');

    })
}
console.log("called before");

*/
//deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log("file deleted");
    })
}
else{
    console.log("file does not exist");
}
