// alert("working");


//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
let challenge = "30 Days Of JavaScript";
//Print the string on the browser console using console.log()
console.log(challenge);
//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method
let UpperForm = challenge.toUpperCase();
console.log(UpperForm);
//Change all the string characters to lowercase letters using toLowerCase() method
let lowerForm = challenge.toLowerCase();
console.log(lowerForm);
//Cut (slice) out the first word of the string using substr() or substring() method
let cut = challenge.substring(0, 1);
console.log(cut);

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

let phrase = challenge.substr(3, 18);
console.log(phrase);

//Check if the string contains a word Script using includes() method

console.log(challenge.includes("Script"));
//Split the string into an array using split() method

let array = challenge.split();
console.log(array);
//Split the string 30 Days Of JavaScript at the space using split() method
let arr = challenge.split(" ");
console.log(arr);

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let organization = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

let commaRay = organization.split(",");
console.log(commaRay);

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let NewStr = challenge.replace("30 Days Of JavaScript", "30 Days Of Python");
console.log(NewStr);
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

let strAt = challenge.charAt(15);
console.log(strAt);

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

let strCode = challenge.charCodeAt("J");
console.log(strCode);

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

let index = challenge.indexOf("a");
console.log(index);

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

let lastIndex = challenge.lastIndexOf("a");

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let index_Second =
  "You cannot end a sentence with because because because is a conjunction";
let idx = index_Second.indexOf("because");
console.log(idx);

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let Lastindex_Second =
  "You cannot end a sentence with because because because is a conjunction";
let Lastidx = index_Second.lastIndexOf("because");
console.log(Lastidx);

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let str =
  "You cannot end a sentence with because because because is a conjunction";
let seArch = str.search("because");
console.log(seArch);

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let spaces = " 30 Days Of JavaScript ";
let noSpaces = spaces.trim(" ");
console.log(noSpaces);
console.log(spaces);

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true

let startEr = challenge.startsWith("3");
console.log(startEr);

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true

let lastEr = challenge.endsWith("t");
console.log(lastEr);

//Use match() method to find all the a’s in 30 Days Of JavaScript
let find = /a/gi;
let matches = challenge.match(find);
let matched = challenge.match("a");
console.log(matches);
console.log(matched);

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let firstStr = "30 Days of";
console.log(firstStr.concat(" ", "JavaScript"));

//Use repeat() method to print 30 Days Of JavaScript 2 times

let repeatED = challenge.repeat(2);
console.log(repeatED);

//level 2

//Using console.log() print out the following statement:

//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let quote_first = "\'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another ";
console.log(quote_first);


//Using console.log() print out the following quote by Mother Teresa:

//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let quote_second = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'

console.log(quote_second);

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let strNum = '10'
console.log(strNum);
console.log(typeof strNum);
let strToNum = parseInt(strNum);
console.log(strToNum)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let strBnum = '9.8'
let floatB = parseFloat(strBnum);
console.log(floatB)
let WholeNum = Math.round(floatB)
console.log(WholeNum)
//Check if 'on' is found in both python and jargon
a= 'python'
b= 'jargon'
// let found = [a, b]
let foundInBoth = a.includes('on');
let foundInBothr = b.includes('on');
console.log(foundInBoth);
console.log(foundInBothr)
//I hope this course is not full of jargon. Check if jargon is in the sentence.

let check = 'I hope this course is not full of jargon'
let check$ = check.includes('jargon');
//Generate a random number between 0 and 100 inclusively.
  const rand = Math.floor(Math.random () * 100);
  console.log(rand)
//Generate a random number between 50 and 100 inclusively.
let max = 100;
let min = 50;
const srand = Math.floor(Math.random ()  * (max - min ) + min);
  console.log(srand)
//Generate a random number between 0 and 255 inclusively.

let rmax = 255;
let rmin = 0;
const Prand = Math.floor(Math.random ()  * (rmax - rmin ) + rmin);
  console.log(Prand)
//Access the 'JavaScript' string characters using a random number.
let Access = 'JavaScript';
console.log(Access.length)

let Amax = Access.length - 1;
console.log(Amax)
let Amin = 0;

const Arand = Math.floor(Math.random () * (Amax - Amin ) + Amin);
let AccessedChar = Access[Arand]
console.log(AccessedChar);

//Use console.log() and escape characters to print the following pattern.

/* 1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125   */

let numArrange = '1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125'
console.log(numArrange)

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let  phrase2 = 'You cannot end a sentence with because because because is a conjunction'
let firstINDX = phrase2.search('because');

let slicing = phrase2.substr(firstINDX, 23)
console.log(slicing)
//level 3

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let lovingIsHard = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let loveIsAll = /love/gi
let loveCounts = lovingIsHard.match(loveIsAll);
console.log(loveCounts);

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let becauseof = 'You cannot end a sentence with because because because is a conjunction'
let Becausewill = /because/gi
let BecauseCounts = becauseof.match(Becausewill);
console.log(BecauseCounts);

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

  let punctuationFree = sentence.replace(/[^\w\s]|_/g, "");

//punctuations hae been removed

let wordings = punctuationFree.split(/\s/);
//array of words and for preventing whitespaces

let wordOccur = new Map();
wordings.forEach((word) => {
    if(!wordOccur.has(word)){
        wordOccur.set(word, 1)
    }
    else{
        wordOccur.set(word, wordOccur.get(word)+1);
    }
});

let MAXoCCUR = Math.max(...wordOccur.values());
//finds max occurence of any word

let wordsOccuringFrequently = Array.from(wordOccur.keys()).filter((word) => {
    return wordOccur.get(word) === MAXoCCUR;
}
);
console.log(wordsOccuringFrequently);


//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let totalAnnualIncome;
let IncomePerMonth = 5000;
let AnnualBonus = 10000;
let OnlineIncome = 15000;
let no_of_month = 12

totalAnnualIncome = Math.floor((IncomePerMonth * no_of_month) + AnnualBonus + (OnlineIncome * no_of_month));

console.log(`He earns ${totalAnnualIncome} euros per year`)