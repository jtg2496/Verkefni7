/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;

/**
 * Byrja forrit.
 */ 
function start() {
  var input = prompt('Hvort viltu kóða eða afkóða? Skrifaðu "kóða" eða "afkóða".');
  if(input === "kóða"){
      askForShift(input)
  }
  else if (input === "afkóða"){
      askForShift(input)
  }
  else{
      confirm(`Veit ekki hvaða aðgerð ${input} er. Reyndu aftur`)
      confirm(`Aftur?`)
      start()
  }
}

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();
   // var input = prompt(', '3')

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 *
 */

function askForShift(s){
    var n = prompt('Hversu mikið á að hliðra um?');
    if (n >= 1 && n <= 31){
    askForString(s,parseInt(n))
    }
    else{
        confirm(`${n} er  ekki heiltala á bilinu [1, 31]. Reyndu aftur`)
        confirm(`Aftur?`)
        start()
    }
}
function askForString(s,n){
    var input = prompt('Hvaða orð á að kóða?');
    if (s === "kóða"){
        alert(encode(input.toUpperCase(),n))
    }
    else if(s === "afkóða"){
        alert(decode(input.toUpperCase(),n))
    }
}

function encode(str, n) {
    var nyr = ""
    
    for (let i = 0; i < str.length; i++){
        var s = LETTERS.indexOf(str[i])
        nr_stafur = (s+n)%32
        nyr+=LETTERS[nr_stafur]
    }
  return nyr;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {

    nr_stafur = (32-n)%32
  return encode(str,nr_stafur);
}

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');