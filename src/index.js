module.exports = function getZerosCount(number) {
var sum=0;
var i=1;
while (number/Math.pow(5,i)>=1){
  sum=sum+(number-number%Math.pow(5,i))/Math.pow(5,i);
  i++;
}
return sum;
}
