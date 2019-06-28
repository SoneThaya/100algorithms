function uniqueDigitProducts(a: number[]): number {
  const products: number[] = [];

  a.forEach((num) => {
    const product = getDigitProduct(num);

    if (!products.includes(product)) {
      products.push(product);
    }
  });

  return products.length;
}

function getDigitProduct(num: number) {
  const digits: string[] = num.toString().split('');
  let product = 1;

  digits.forEach((digit) => {
    product *= parseInt(digit);
  });

  return product;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));

// solution 2

function uniqueDigitProducts2(arr: number[]): number {
 
  let obj = {}, stringElement, total;

  for (let i = 0; i < arr.length; i++){
      stringElement = arr[i].toString();
      total = 1;

      for(let j = 0; j < stringElement.length; j++){
          total *= parseInt(stringElement[j]);
      }
      
      obj[total] = 0;
  }
  

  return Object.keys(obj).length;

}

console.log(uniqueDigitProducts2([2,8,121,42,222,23]));