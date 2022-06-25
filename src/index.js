module.exports = function toReadable (number) {
  let a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let b = ['hundred', 'thousand', 'million', 'billion'];
  let c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let c1 = [ 20, 30, 40, 50, 60, 70, 80, 90];
  let result = [];
  let n = number;
  let r = Math.ceil(String(number).length/3); //количество "троиц" числа
  if (n == 0) {
    return 'zero';
  }
  if (n > 0 && n < 100){         //если число двухзначное
    twoNumbers(n);
  }
  else if (n >= 100 && n < 1000) { //если число трехзначное
    threeNumbers(n);
  }
  else {                          //для числел больше 1000
    for(let i = 0; i < r; i++){
      if (n%1000 == 0){           //если эта троица из нулей, пишем разряд и двигаемся к следующей
        result.push(b[i+1]);
        n = Math.trunc(n/1000);
      }
      else {
        threeNumbers(n%1000);
        n = Math.trunc(n/1000);
        if (i+1 < r) {           //если троица не последняя пишем ей разряд
          result.push(b[i+1]);
        }
      }
    }
  }
  result.reverse();
  result = result.join(' ');
  return result;

  function twoNumbers (n2) {
    if (n2==0) {
    }
    else  if (n2 <= 19) {
      result.push(a[n2-1]);
    }
    else if (c1.includes (n2)){
      result.push(c[(n2/10)-2]);
    }
    else {
      result.push(a[(n2%10)-1]);
      n2 = Math.trunc(n2/10);
      result.push(c[n2-2]);
    }
  }

  function threeNumbers(n3) {
    twoNumbers(n3%100);
    if (Math.trunc(n3/100) > 0) {    //если действительно есть сотни
      result.push(b[0]);
      result.push(a[Math.trunc(n3/100)-1]);
    }
  }
}
