const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('');
  let size = 10;
  let newArr = [];
  let result = [];
  

  for (let i = 0; i < Math.ceil(arr.length/size); i++) {
    newArr[i] = arr.slice((i*size), (i*size) + size);
  }
  
  for(let i = 0; i < newArr.length; i++) {  
    let morse = [];
     let firstLetter = newArr[i].join('').slice(0,2);
     let secondLetter = newArr[i].join('').slice(2,4);
     let thirdLetter = newArr[i].join('').slice(4,6);
     let fourLetter = newArr[i].join('').slice(6,8);
     let fiveLetter = newArr[i].join('').slice(8,10);

      if(firstLetter == '10') {
        morse.push('.');
      } else if(firstLetter == '11') {
        morse.push('-');
      }
      
      if(secondLetter == '10') {
        morse.push('.');
      } else if(secondLetter == '11') {
        morse.push('-');
      }

     if(thirdLetter == '10') {
        morse.push('.');
      } else if(thirdLetter == '11') {
        morse.push('-');
      }

      if(fourLetter == '10') {
        morse.push('.');
      } else if(fourLetter == '11') {
        morse.push('-');
      }

      if(fiveLetter == '10') {
        morse.push('.');
      } else if(fiveLetter == '11') {
        morse.push('-');
      }
      
      let strMorse = morse.join('');
      
      if(strMorse.length > 0) {
        result.push(MORSE_TABLE[strMorse]);
      } else {
        result.push(' ');
      }  
  }

  return result.join('')
}

module.exports = {
    decode
}
