function isAnagram(str1, str2) {
    
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// test cases
console.log(isAnagram("Astronomer", "Moon starer")); 
console.log(isAnagram("School master", "The classroom")); 
console.log(isAnagram("The Morse Code", "Here come dots")); 
console.log(isAnagram("hello", "world")); 
console.log(isAnagram("eleven plus two", "twelve plus one"));
console.log(isAnagram("debit card", "bad credit"));
console.log(isAnagram("dormitory", "dirty room")); 
console.log(isAnagram("listen", "silent")); 
 
