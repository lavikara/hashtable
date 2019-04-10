let hashFunction = function (myArray) {

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

let HashTable = function(){
    this.hashStore = []
    this.size = 0
    this.maxSize =100000
}

HashTable.prototype.set = function(key, arr){
    if(this.hashStore.hasOwnProperty(key)){
        throw new Error("Array Already Exist")
    }else{
        this.hashStore[key] = arr
        this.size += 1
        return this.hashStore
    }
}

HashTable.prototype.duplicate = function(key){
    if(!this.hashStore.hasOwnProperty(key)){
        throw new Error("Array Does Not Exist")
    }else{
    let arrayDuplicate = hashFunction(key)
    return arrayDuplicate
    }
}

let hashTable = new HashTable
const theArray = ["yaniv",3,3,3,"yaniv",0,,false,"Yaniv",null,true,,false,6,,34,"asd",1,1,1,null,1,1,"yaniv",34.34,5324,0.000001,9,9,true];

console.log(hashTable.set("test", theArray));
console.log(hashTable.duplicate("test"));
