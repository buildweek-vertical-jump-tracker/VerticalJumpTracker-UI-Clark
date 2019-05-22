// taking each element with '.quote', building a new instance of Quote for each quote
//  set all quotes to display: none; take active quote and toggle.remove display none off it
// after 20sec, cycle through to next quote
class Quote {
    constructor(domElement) {
        this.domElement = domElement;
        // .setInterval()
        

    }

}


let quotes = document.querySelectorAll('.quote');
quotes.forEach(eachQuote => new Quote(eachQuote));