function alphaShift(str) {
  
    let newStr = str.replace(/[a-z]/gi, char => {
      if(char == 'z'){
        return 'a';
      } else {
        return String.fromCharCode(char.charCodeAt(0) + 1);
      }
    })
    return newStr;
  }
   
  console.log(alphaShift('crazy'));


  //solution 2

  function alphabeticShift2(i) {
    return i.split("").map(a=>a.charCodeAt(0)+1).map(b=>String.fromCharCode(b)).join("").replace(/{/g, "a")}

    console.log(alphabeticShift2('crazy'));