const { stringify } = require("querystring");

// 1. String létrehozása: 
	const string1 = 'valami';
    const string2 = "valami2";
    const string4 = `anything`;
    const string3 = new String('valami');

    console.log("1.: ", string1, string2, string4, string3);

// 2. String hosszanak megallapitasa:

    console.log("2.: ", string1.length);

// 3. Milyen értékre cast-olódik az üres string ha cél típus boolean?
   // false
    const string = '';

// 4. Hogyan tudunk új sort jelezni string-en belül?
        //2 fele modon: 
    'valami meg valami' +
    "cica es valami"

    // or
    "valami \
    valami."

    console.log("4.: valami meg valami" + "cica es valami");

// 5. Hogyan tudunk \ -t írni a string-en belül?
    console.log("5.: \\");   

// 6. Hogyan tudunk egy tetszőleges karakterre rámutatni?
    const character = 'valami2'.charAt(1);   
    const character2 = 'valami'[0]; 

    console.log("6.: ", character, "\n", character2);

// 7.Hogyan tudjuk egy karakter kódlap azonosítóját elkérni (ascii kódját)? Az ‘A’ az a 65-ös.
    let charCode0 = "ABC".charCodeAt(0); //A
    let charCode1 = "ABC".charCodeAt(1); //B

    console.log("7.: ", charCode0);
    console.log(charCode1);

// 8. Hogyan tudjuk egy kód alapján elkérni a karaktert? (65-ös pl az ‘A’)
    const charCode = String.fromCharCode(65, 66, 67);  

    console.log("8.: ", charCode);

// 9. Hogyan tudjuk egy szöveg elejéről, illetve végéről eltávolítani a felesleges whitespace-eket (szóközöket, tabulátorokat)?
    console.log("9.:  string  ".trim());

// 10. Hogyan tudunk egy szöveget teljesen kisbetűssé alakítani?
    console.log("VAlami".toLowerCase());

// 11. Hogyan tudunk egy szövetet teljesen nagybetűssé alakítani?
    console.log("valami".toUpperCase());

// 12. Hogyan tudunk egy számot szöveggé alakítani? (legalább 2 féle módon)
   console.log(`{5 + 3}`);
    //vagy
   console.log(String('5 + 3'));

// 13. Hogyan tudunk egy szöveget szóközök mentén tömbbé alakítani?
    const fruits = 'apple, orange, pear';
    const array = fruits.split(', ');
    
    console.log('13.: ', array);

// 14. Hogyan tudunk egy tömb-öt szöveggé alakítani?
    const tmb = ["vlami", "valami", "mas"];
    console.log('14.: ', tmb.join());

// 15. Hogyan tudjuk ellenőrizni, hogy egy szöveg egy adott szövegrészlettel kezdődik-e?
    const szoveg = 'Valami per valami contains vmit.'
    console.log('15.: ', szoveg.startsWith('Valami'));

// 16. Hogyan tudjuk ellenőrizni, hogy egy szöveg részlet megtalálható-e egy másik szövegben (bárhol)?
    const kiiras = "ezt a szot keresem".includes("szot");
    console.log('16.: ', kiiras);

// 17. Hogyan tudjuk ellenőrizni, hogy egy szöveg részlet megtalálható-e egy másik szöveg végén?
    const szovege = "ezt a szot keresem".endsWith("sem");
    console.log('17.: ',szovege);

// 18. Hogyan tudunk két szöveg részletet összefűzni? Mutasd be legalább 3 féle módon!
    "lksdgf" + "jfoigjd"
    "gsdgtrt".concat("sfdsf");
    const val = "valami";
    const val2 = "vakama";
    `${val} ${val2}`;

// 19. Hogyan tudunk egy szövegben egy adott részletet kicserélni egy másikra?
    let str = "valami kek valami mas";
    let sz2 = str.replace("kek", "piros");
    let sz3 = str.replace(/valami/g, "vmi");

    console.log("19.: " ,sz2, "\n", sz3);

// 20. Hogyan tudjuk ellenőrizni, hogy két szöveg egyenlő-e?
    let str1 = "szek";
    let str2 = "szek";
    let n = str1.localeCompare(str2);

    console.log("20.: ", n);

// 21. Hogyan tudjuk egy szövegben előforduló másik szövegrészlet kezdő karakterének pozicíóját megtalálni?
    let str4 = 'Hi Dear, how are you today? :)'
    let indexOf = str4.indexOf('Dear');

    console.log('21.: ', indexOf);

// 22. Hogyan tudunk egy szöveg közepéből tetszőleges másik szöveget kimásolni? Legalább 3 féle módon!
    let str5 = 'Szivecske';
    let newStr5 = str5.substr(0);
    let newStr6 = str5.substr(1, 9);
    
    let newStr7 = str5.substring(0, 4);

    let newStr8 = str5.slice(3, 11);

    console.log("22.: ", newStr5, newStr6, newStr7, newStr8);

// 23. A feladat:
// Adott az alábbi köszöntések. A feladat ebből kivenni a személyek neveit, majd felsorolni a képernyőn.
// Adatok:
// Kedves Áron. Köszöntjük nálunk!
// Tisztelt Irén. Ezúton üdvözöljük.
// Üdvözölljük Tibor. Reméljük tetszett önnek a szolgáltatásunk.

let greetings = [
    'Kedves Áron. Köszöntjük nálunk!',
    'Tisztelt Irén. Ezúton üdvözöljük.',
    'Üdvözölljük Tibor. Reméljük tetszett önnek a szolgáltatásunk.',
];

//let firstGreeting = greetings[0];
//let aron = firstGreeting.split(' ')[1];

greetings
    .map((element) => element.split(' ')[1].replace('.',''))
    .forEach(it => console.log(it));

let arrays =[
    ['Kedves Áron. Köszöntjük nálunk!'],
    ['Tisztelt Irén. Ezúton üdvözöljük.'], 
    ['Üdvözölljük Tibor. Reméljük tetszet önnek a szolgáltatásunk.']
];


//let aron = 
//arrays[0][1].replace('.', '');

//console.log(aron);

