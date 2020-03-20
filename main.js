// Question:
// Determine whether a one-to-one character mapping exists from 
// one string, s1, to another string, s2.
// For example, given s1 = abc and s2 = bcd,

// print "true" into stdout since we can map each
// character in "abc" to a character in "bcd".

// Given s1 = foo and s2 = bar, print "false" 
// since the character ‘o’ cannot map to two characters.

// But given s1 = bar and s2 = foo, print "true" 
// since each character in "bar" can be mapped to a
// character in "foo".

// -------------------------------------------------

// takes the indeces of repeating characters in the first array
// and checks if the mapping of that character is consistent in the
// second array.
// returns false if mapping is inconsistent. 

//passing in command line arguments
const args1 = process.argv[2];
const args2 = process.argv[3]


function mappingIt (s1, s2){
    const mappedChars = {};

    if(s1.length !== s2.length){
        console.log('false')
        return false;
    }
    else{
    for(let x=0; x<s1.length; x++){
        let newKey = s1[x];
        let newValue = s2[x];

        if (!mappedChars[newKey]){
            mappedChars[newKey] = newValue;
        }
        else if (mappedChars[newKey] !== newValue){
            console.log("false");
            return false;
        }
    }
    console.log('true')
    return true
};
}
mappingIt(args1, args2)