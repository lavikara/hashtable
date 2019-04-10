function LaviHash(){
    this.size = 0
    this.store = []
}

LaviHash.prototype.size = function(){
    return this.size
}

LaviHash.prototype.clear = function(){
    this.size = 0
    this.store = []
    return this.store
}

LaviHash.prototype.duplicate = function(key){
    if(this.store.hasOwnProperty(key)){
        return true
    }else{
        return false
    }
}

LaviHash.prototype.delete = function(key){
    if(this.store.hasOwnProperty(key)){
        delete this.store[key]
        this.size -= 1
        return this.store
    }
}

LaviHash.prototype.set = function(key, value){
    if(this.store.hasOwnProperty(key)){
        throw new Error("Item Already Exist")
    }else{
        this.store[key] = value
        this.size += 1
        return this.store
    }
}

LaviHash.prototype.get = function(key){
    if(!this.store.hasOwnProperty(key)){
        throw new Error("Item Does Not Exist")
    }else{
        return this.store[key].value
    }
}

let lavihash = new LaviHash