function Set(){
    var items= {}
    this.has = function(val){
        return items.hasOwnProperty(val)
    }
}