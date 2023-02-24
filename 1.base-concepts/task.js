"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = 0;

  discriminant = (b**2) - 4 * a * c;

  if (discriminant === 0) {
    arr[0] = -b / (2 * a); 
  } else if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant) ) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant) ) / (2 * a);
  }

  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;     //некорректно введены данные
  }

  percent = percent / 100; //преобразование процентной ставки в диапазон от 0 до 1

  let s = amount - contribution;
  
  let p = percent / 12;

  let monthlyPayment;
  monthlyPayment = s * (p + (p / (((1 + p)**countMonths) - 1)));

  let totalAmount;
  totalAmount = monthlyPayment * countMonths;

  totalAmount = totalAmount.toFixed(2);
  totalAmount = Number(totalAmount); 

  return totalAmount;
}