let hashFunction = function(keyString, maxSize){
    keyString.split("").map(function(item){
        item.charCodeAt()
    }).reduce(function(a,b){a+b}) % maxSize
}

let duplicateFunction = function (myArray) {

    let result = [];
    let duplicate,handled;
    let j,k;
    for (let i = 0; i < myArray.length; i++) {
        duplicate = false;
        handled = false;
        j = i;
        while (j < myArray.length - 1 && !duplicate) {
            if (myArray[i] === myArray[j + 1]) {
                duplicate = true;
            }
            j++;
        }
        if (duplicate) {
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
    this.maxSize =10
}

HashTable.prototype.set = function(key, value){
    if(this.hashStore.hasOwnProperty(key)){
        throw new Error("Item Already Exist")
    }else{
        this.hashStore[key] = value
        this.size += 1
        return this.hashStore
    }
}

HashTable.prototype.add = function(key, value){
    let index = hashFunction(key, this.maxSize)
    let bucket = this.hashStore[index]
    if(!bucket){
        bucket = []
        this.hashStore[index] = bucket
    }
    for(var i = 0; i < bucket.length; i++){
        let item = bucket[i]
        if(item[0] === key){
            item[1] === value
        }else{
            bucket.push([key, value])
            this.size ++
        }
        if(this.size > this.max * .80){
            this.resize(this.max * 2)
        }
    }
}

// HashTable.prototype.resize = function(newSize){
    let prevHashStore = this.hashStore
    this.maxSize = newSize
    this.size = 0
    this.hashStore = []

    prevHashStore.forEach(function(bucket){
        if(!bucket){
            return
        }
        for(let i = 0; i < bucket.length; i++){

        }
    })
}

HashTable.prototype.duplicate = function(key){
    if(!this.hashStore.hasOwnProperty(key)){
        throw new Error("Array Does Not Exist")
    }else{
    let arrayDuplicate = duplicateFunction(key)
    return arrayDuplicate
    }
}

let hashTable = new HashTable
const theArray = ["yaniv",3,3,3,"yaniv",0,,false,"Yaniv",null,true,,false,6,,34,"asd",1,1,1,null,1,1,"yaniv",34.34,5324,0.000001,9,9,true];

console.log(hashTable.set("test", theArray));
// console.log(hashTable.duplicate(key.value));
