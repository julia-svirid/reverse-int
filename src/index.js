module.exports = function reverse (n) {
  if (n<0){
    n=-n;
  }
  n = String(n);
  let arr = n.split('');
  arr.reverse();
  let str = arr.join('');
  let result = Number(str);

  return result;
}
