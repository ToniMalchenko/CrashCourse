//input two array with strings
//find what words more in the arrays and return top 3


const arrNew1 = ['long', 'lo', 'long', 'drogony', 'to long', 'maxlonglong', 'drogony', 'long'];
const arrNew2 = ['loop', 'drogony', 'bro', 'long', 'drogony', 'varch', 'long', 'drogony', 'long', 'drogony'];

  function findMaxLengthThreeWords(arr1, arr2){
    let result = arr1.concat(arr2);
    result = result.reduce((acc, item) => {
         acc[item] = (acc[item] || 0) + 1;   //(acc[item] || 0) if undefinied we put 0
         return acc;
    }, {});
    result = Object.fromEntries(Object.entries(result).sort(([,a],[,b]) => b-a).slice(0,3));
    return result;
  }
console.log(findMaxLengthThreeWords(arrNew1, arrNew2));