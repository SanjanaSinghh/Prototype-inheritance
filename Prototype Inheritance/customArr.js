arr = [1, 2, 3, 4]

Array.prototype.print = function () {
    s = ''
    this.forEach(e => {
        s += e + " "
    })
    console.log(s)
}

Array.prototype.push = function (x) {
    this[this.length] = x
}

Array.prototype.pop = function () {
    this.length = this.length - 1
}

Array.prototype.top = function () {
    var x = this[this.length - 1]
    return x
}

Array.prototype.printReverse = function () {
    s = ''
    for (var i = this.length - 1; i >= 0; i--) {
        s += this[i] + " "
 }
    console.log(s)
}

Array.prototype.size = function () {
return this.length
}
arr.push(6)

arr.pop()
console.log(arr.size())
arr.printReverse()