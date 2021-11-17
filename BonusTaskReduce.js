const arrNew1 = ['long', 'lo', 'long', 'drogony', 'to long', 'maxlonglong', 'drogony', 'long'];
const arrNew2 = ['loop', 'drogony', 'bro', 'long', 'drogony', 'varch', 'long', 'drogony', 'long', 'drogony'];

function findMaxLengthThreeWords(arr1, arr2){
    let result = arr1.concat(arr2);
    let max ='';

    result = result.reduce((acc, item) => {
         acc[item] = (acc[item] || 0) + 1;   //(acc[item] || 0) if undefinied we put 0
         return acc;
    }, {});

    result = Object.keys(result).reduce((acc, val) => {
        if(max < result[val]) {max=result[val]; acc={}};
        if(result[val]==max) acc[val] = result[val];
        return acc;
    },{});

    return result;
  }

  console.log(findMaxLengthThreeWords(arrNew1, arrNew2));