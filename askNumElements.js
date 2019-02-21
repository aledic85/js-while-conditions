function sumArrayElements(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}

function multipleEleven(num) {
  var m = false;
  if (num % 11 == 0) {
    m = true
  }
  return m;
}

function multiplicationArrayElements(arr) {
  var multi = 1;
  for (var i = 0; i < arr.length; i++) {
    multi *= Number(arr[i]);
  }
  return multi;
}

function askNumElementsWhile() {
  var nums = [];
  var n;
  do {
    n = prompt("Dammi un numero da mettere nell'array");
    n = Number(n);
    if (multipleEleven(n) == false) {
      nums.push(n);
    } else {
      return nums;
    }
  } while (sumArrayElements(nums) < 50 && multiplicationArrayElements(nums) < 500);
  return nums;
}

var myArr = askNumElementsWhile()
document.write(myArr);
