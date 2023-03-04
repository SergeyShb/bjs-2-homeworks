//Задача 1

function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }

    sum = sum + arr[i];
  }

  avg = sum / arr.length;

  avg = avg.toFixed(2);
  avg = Number(avg);


  // let min;
  // let max;
  // let sum = 0;

  // min = Math.min(...arr);
    
  // max = Math.max(...arr);

  // for (let i = 0; i < arr.length; i++) {  
  //   sum = sum + arr[i];
  // }

  // avg = sum / arr.length;

  // avg = avg.toFixed(2);
  // avg = Number(avg);


  return { min: min, max: max, avg: avg };
}

//Задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) { 
  if (arr.length === 0) {
    return 0;
  }

  let max;
  let min;
  
  max = Math.max(...arr);
  min = Math.min(...arr);

  let difference = max - min;
  
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;     //четные
  let sumOddElement = 0;      //нечетные

  for (let i = 0; i < arr.length; i++) {
    if (arr [i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];     
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i]; 
      countEvenElement = countEvenElement + 1;
    }
  }
  
  return sumEvenElement / countEvenElement;
}

//задача 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0][0];

  for (let i = 0; i < arrOfArr.length; i++) {
      func(...arrOfArr[i]);
      const result = func(...arrOfArr[i]);

      if (result > maxWorkerResult) {
        maxWorkerResult = result;
      } 
    }
    
  return maxWorkerResult;
}
