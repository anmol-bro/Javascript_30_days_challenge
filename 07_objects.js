const book= {}
book.title="Murder Mystry";
book.price= 199;
book.author="Chetan Bhagat";

book.getInfo  = function(){
    return (`${this.title} ${this.author}`)
}

console.log(book);
//console.log(book.price , book.author)
console.log(book.getInfo())