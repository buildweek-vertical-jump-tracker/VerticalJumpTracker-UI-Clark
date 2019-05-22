// taking each element with '.quote', building a new instance of Quote for each quote
//  set all quotes to display: none; take active quote and toggle.remove display none off it
// after 20sec, cycle through to next quote
        // .setInterval()

class Quote {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.quoteNum;
        this.element.addEventListener('animationend', events => {
            if(event.animationName === 'quoteReverse'){
                this.element.classList.remove('quote-selected', 'quote-remove');
            }
        })
    };
    toggle() {
        if(this.element.classList.contains('quote-selected')){
            this.element.classList.add('quote-remove');
        }
        else {
            this.element.classList.add('quote-selected');
        }
    }
}
class Quotes {
    constructor(element, root) {
        this.element = element;
        this.quotes = Array.from(this.element).map(quoteElement => new Quote(quoteElement));
        this.current = this.quotes[0];
        this.root = root;
        this.root.addEventListener('animationend', event => {
            if(event.animationName === 'quoteReverse'){
                this.current = this.quotes[this.current.data];
                this.current.toggle();
            }
        })
    }
    swap() {
        this.current.toggle();
       
    }
}
let quotes = new Quotes(document.querySelectorAll('.quote'), document.querySelector('.quotes'));
// quotes.forEach(eachQuote => new Quote(eachQuote));
window.setInterval(quotes.swap.bind(quotes) , 20000);
