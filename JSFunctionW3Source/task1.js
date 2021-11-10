function revStr (n){
    n = String(n);
    return n.split('').reverse().join('');
}
console.log (revStr(123456));