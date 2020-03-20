// Question:
// Determine whether a one-to-one character mapping exists from 
// one string, s1, to another string, s2.
// -------------------------------------------------


// passing in command line arguments
const args1 = process.argv[2];
const args2 = process.argv[3];

// map s1 characters as keys
// map corresponding s2 characters as values
// if an s1 character repeats
// check if associated s2 value is consistent

function mappingIt (s1, s2){
    const mappedChars = {};

    if(s1.length !== s2.length){
        console.log('false');
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
    };
    console.log('true');
    return true
};
};

mappingIt(args1, args2)