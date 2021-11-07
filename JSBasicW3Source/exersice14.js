function extension(fileName){
    console.log(fileName.split('.').pop());
}
const filesTypes = ['newFile.php', 'secondFile.js', 'thirdFile.css', 'fourthFile.html'];

for(let i = 0; i<filesTypes.length; i++){
    extension(filesTypes[i]);
}