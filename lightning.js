// yoda_quote.splice(3, 0, ', ')
// console.log('yoda_quote',yoda_quote);
// document.write(yoda_quote.join(""));

let yoda_quote = ["the ", "greatest ", "teacher", "failure ", "is "];
yoda_quote.map( (word) => {
    if(word === "the")
    word = word.slice(0, 1).toUpperCase() + word.slice(1);
    if(word === "teacher")
        word = word + ","
        return word
}).join(" ")