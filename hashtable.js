let hashFunction = function(keyString, maxSize){
    hash = keyString.split("").map(item => item.charCodeAt())
    .reduce((a,b) =>  a+b ) * Math.round(maxSize,(Math.random(0,9)))

    return hash
}

let HashTable = function(){
    this.hashStore = []
    this.size = 0
    this.maxSize = 1
}

HashTable.prototype.set = function(key, value){
    let index = hashFunction(key, this.maxSize)
    console.log("index: " + index)
    if(this.hashStore.hasOwnProperty(index)){
            throw new Error(`index already taken, Change Key Of: 
            Key: ${key}, Value: ${value}`)
        }else{
            this.hashStore[index] = {
                index: index,
                key: key,
                value: value
            }
            this.size += 1
            console.log("hash store: " + this.hashStore)
            console.log("size: " + this.size)
            console.log("max Size: " + this.maxSize)

            
            if(this.size > this.maxSize * 900){
                this.resize(this.maxSize + 1, this.size)
            }
    
            return this.hashStore
        }
}

HashTable.prototype.get = function(key){
    let index = hashFunction(key, this.maxSize)    
    if(!this.hashStore.hasOwnProperty(index)){
        throw new Error(`Item Does Not Exist, Use set Method To add 
        { Key: , Value: }`)
    }else{
        return this.hashStore[index]
    }
}

HashTable.prototype.resize = function(newMaxSize, newSize){
    this.maxSize = newMaxSize
    this.size = newSize
}

HashTable.prototype.delete = function(key){
    let index = hashFunction(key, this.maxSize) 
    if(this.hashStore.hasOwnProperty(index)){
        delete this.hashStore[index]
        this.size -= 1
        return this.hashStore
    }

}

HashTable.prototype.include = function(key){
    let index = hashFunction(key, this.maxSize) 
    if(this.hashStore.hasOwnProperty(index)){
        return true
    }else{
        return false
    }
}

HashTable.prototype.tableSize = function(){
    let tableSize = this.size
    return tableSize
}

HashTable.prototype.clear = function(){
    this.size = 0
    this.hashStore = []
    return this.hashStore
}


let hashTable = new HashTable

console.log(`SET ITEM
------------------------------------------------`)

const theArray = ["yaniv",3,3,3,];
console.log(hashTable.set("temi", theArray))
console.log(hashTable.set("temitayo", "achi"))
console.log(hashTable.set("mayowa", 1759))
console.log(hashTable.set("liverpool", "game"))
console.log(hashTable.set("poto", "ionio"))
console.log(hashTable.set("lavi", "save"))
console.log(hashTable.set("oyom", "sweet"))
console.log(hashTable.set("sdgf", "love"))
console.log(hashTable.set("gjyk", "hate"))
console.log(hashTable.set("omojrt", "love"))
console.log(hashTable.set("iuljotuy", "email: argaf@gmail.com, phone: 09094636525"))
console.log(hashTable.set("tkjsrgbemi", theArray))
console.log(hashTable.set("temefgbitayo", "achi"))
console.log(hashTable.set("masfgbvyowa", 1759))
console.log(hashTable.set("linrhedgbverpool", "game"))
console.log(hashTable.set("sfgefgbhju", "ionio"))
console.log(hashTable.set("ldvfavi", "save"))
console.log(hashTable.set("ofgyom", "sweet"))
console.log(hashTable.set("styddgf", "love"))
console.log(hashTable.set("gwjyk", "hate"))
console.log(hashTable.set("otjkm,mojrt", "love"))
console.log(hashTable.set("iuefgbljotuy", "email: argaf@gmail.com, phone: 09094636525"))


console.log(`GET ITEM
---------------------------------------`)

console.log(hashTable.get("temi"))
console.log(hashTable.get("temitayo"))
console.log(hashTable.get("mayowa"))
console.log(hashTable.get("liverpool"))
console.log(hashTable.get("poto"))
console.log(hashTable.get("lavi"))
console.log(hashTable.get("oyom"))
console.log(hashTable.get("sdgf"))
console.log(hashTable.get("gjyk"))
console.log(hashTable.get("omojrt"))
console.log(hashTable.get("iuljotuy"))

console.log(`DELETE ITEM
-----------------------------------------------`)

console.log(hashTable.delete("mayowa"))

console.log(`TABLE SIZE
-----------------------------------------------`)

console.log(hashTable.tableSize())

console.log(`INCLUDE ITEM
-----------------------------------------------`)

console.log(hashTable.include("mayowa"))
console.log(hashTable.include("liverpool"))
console.log(hashTable.include("poto"))
console.log(hashTable.include("lavi"))
console.log(hashTable.include("oyom"))
console.log(hashTable.include("ldvfavi"))
console.log(hashTable.include("ofgyom"))
console.log(hashTable.include("styddgf"))

console.log(`CLEAR TABLE
------------------------------------------------`)

console.log(hashTable.clear())

console.log(`INCLUDE ITEM
------------------------------------------------`)

console.log(hashTable.include("ldvfavi"))
console.log(hashTable.include("ofgyom"))
console.log(hashTable.include("styddgf"))

console.log(`TABLE SIZE
------------------------------------------------`)

console.log(hashTable.tableSize())

