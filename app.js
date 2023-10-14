/* Maps and Sets Exercise */

/*  **Quick Question #1**
    What does the following code return?
    new Set([1,1,2,2,3,4])
*/

//  Set(4) {1, 2, 3, 4}


/*  **Quick Question #2**
    What does the following code return?
    [...new Set("referee")].join("")
*/

//  'ref'


/*  **Quick Question #3**
    What does the Map m look like after running the following code?
    let m = new Map();
    m.set([1,2,3], true);
    m.set([1,2,3], false);
*/

//  Map(2) {[1,2,3] => true, [1,2,3] => false}


/*  **hasDuplicate**

    Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

*/

const hasDuplicate = (arr) => arr.length !== new Set(arr).size;


/*  **vowelCount**

    Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

*/

const vowelCount = (str) => {
    let vowelCountObj = {};
    [...str.toLowerCase()].filter(function(char){   
        if('aeiou'.indexOf(char) !== -1) vowelCountObj[char] = (vowelCountObj[char] + 1) || 1 ;
    })
    return new Map(Object.entries(vowelCountObj));
}
