function findDuplicate(myArray) {

    let result = [];
    let dup,handled;
    let j,k;
    for (let i = 0; i < myArray.length; i++) {
        dup = false;
        handled = false;
        j = i;
        while (j < myArray.length - 1 && !dup) {
            if (myArray[i] === myArray[j + 1]) {
                dup = true;
            }
            j++;
        }
        if (dup) {
            k = 0;
            while (k < result.length && !handled) {
                if (myArray[i] === result[k]) {
                handled = true;
                }
                k++;
            }
            if (!handled) {
                result.push(myArray[i]);
            }
        }
    }
    return result;
}
const array = ["yaniv",3,3,3,"yaniv",0,,false,"Yaniv",null,true,,false,6,,34,"asd",1,1,1,null,1,1,"yaniv",34.34,5324,0.000001,9,9,true];
console.log(findDuplicate(array));