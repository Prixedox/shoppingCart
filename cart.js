const items = $('.col.col-xs-12.col-md-6.col-lg-4');
var cost = 0;
var state = {
            "apple":0,
            "banana":0,
            "orange":0,
            "lemon":0,
            "watermelon":0,
            "strawberry":0};

const newP = $('<h2>Total: $0</h2>');
$('.cart').append(newP);

const appleItem = $('<h4></h4>');
const bananaItem = $('<h4></h4>');
const orangeItem = $('<h4></h4>');
const lemonItem = $('<h4></h4>');
const watermelonItem = $('<h4></h4>');
const strawberryItem = $('<h4></h4>');

let appleDisplay = false;
let bananaDisplay = false;
let orangeDisplay = false;
let lemonDisplay = false;
let watermelonDisplay = false;
let strawberryDisplay = false;

for (var i=0;i<items.length;i++){
    const item = $('<a style="color:red;cursor:pointer;"></a>');
    item.text('Add to cart');
    items.eq(i).append(item);
    item.on('click',itemHandler);
    item.on('click',priceHandler);
}

function itemHandler() {
    const item = $('<h3></h3>')
    const itemName = $(this).parent().find('h2').eq(0).text();
    item.text(itemName);
    state[itemName]+=1;

    appleItem.text("Apple: " + state.apple);
    bananaItem.text("Banana: " + state.banana);
    orangeItem.text("Orange: " + state.orange);
    lemonItem.text("Lemon: " + state.lemon);
    watermelonItem.text("Watermelon: " + state.watermelon);
    strawberryItem.text("Strawberry: " + state.strawberry);

    if (state.apple && !appleDisplay) {
        $('.cart').append(appleItem);
        appleDisplay = true;
    }
    if (state.banana && !bananaDisplay) {
        $('.cart').append(bananaItem);
        bananaDisplay = true;
    }
    if (state.orange && !orangeDisplay) {
        $('.cart').append(orangeItem);
        orangeDisplay = true;
    }
    if (state.lemon && !lemonDisplay) {
        $('.cart').append(lemonItem);
        lemonDisplay = true;
    }
    if (state.watermelon && !watermelonDisplay) {
        $('.cart').append(watermelonItem);
        watermelonDisplay = true;
    }
    if (state.strawberry && !strawberryDisplay) {
        $('.cart').append(strawberryItem);
        strawberryDisplay = true;
    }
}

function priceHandler() {
    const parent = $(this).parent();
    const costP = parent.find('p').eq(1).text();
    cost += parseFloat(costP.replace("$",""));
    newP.text("Total:  $" + Math.round(cost *100)/100);
}

//items.append('<p>');
//const itemsP = $('.row .row div p');
//console.log(itemsP);