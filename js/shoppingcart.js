var bag = [];
var i = 0
var items = ['Reversible Plaid', 'Fringed Plaid', 'Multi Color', 'Northern Lights', 'Ombre Infinity', 'Ashby Twill', 'Wool Cable Knit', 'Etro Paisley-Print Silk'];

function bagIt(items) {
    event.preventDefault();
    console.log("Product: " + items + " added to cart");
    var i = bag.indexOf(items);
}
if (i == -1) {
    bag.push(items);
    console.log(items.lenth);
} else {
    bag.splice(items,1);
    var index = bag.indexOf(items);
    console.log(items.lenth + " removed from cart");
}
