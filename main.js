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

//feels like it could be simplified from nested for loops

function mappingCheck(array1, array2){  
    //this for loop iterates through array1    
    for(let ind = 0; ind < array1.length ; ind++){
        let indexArr=[];
        indexArr.push(ind);
        // this for loop checks for duplicates and pushes them to
        // indexArr
        for(let repeat=ind+1; repeat<array1.length; repeat++){
            if(array1[repeat] === array1[ind]){
                indexArr.push(repeat)
            }
        }
        // if indexArr has duplicates, it checks the corresponding
        // mapped values in array2. if they're different, return false.
        if(indexArr.length > 1){
            for(let check= 0; check < indexArr.length-1; check++){
                if(array2[indexArr[check]] != array2[indexArr[check+1]]){
                    console.log('FALSE');
                    return false;
                }
            }
        }
    }
    console.log('true')
    return true;
}

// takes two strings, standardizes them, splits into arrays
// calls mappingCheck to see if the character mapping is correct;
function kargo (s1, s2){
    const arr1 = args1.toLowerCase().split('');
    const arr2 = args2.toLowerCase().split('');
    if (arr1.length !== arr2.length){
        console.log('false')
        return false
    }
    else{
        mappingCheck(arr1, arr2);
    }
}

//passing in command line arguments
const args1 = process.argv[2];
const args2 = process.argv[3]
kargo(args1, args2);