function romToNum(numeral) {
  let numerals = {
    'I': 1,
    'II': 2,
    'V': 5
  };
  for(let key in numerals) {
    for(letter in numeral) {
      if(key == numeral[letter]) {
        console.log(sum(numerals[key]));
      }
    }
  }
}

console.log(romToNum('IIIV'));