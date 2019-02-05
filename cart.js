const items = $('.col.col-xs-12.col-md-6.col-lg-4');
var cost = 0;

const newP = $('<h2>Total: $0</h2>');
$('.cart').append(newP);

for (var i=0;i<items.length;i++){
    const item = $('<a style="color:red;cursor:pointer;"></a>');
    item.text('Add to cart');
    items.eq(i).append(item);
    item.on('click',addHandler);
}

function addHandler() {
    const parent = $(this).parent();
    const costP = parent.find('p').eq(1).text();
    cost += parseFloat(costP.replace("$",""));
    console.log("Total: $" + cost);
    newP.text("Total:  $" + Math.round(cost *100)/100);
}

//items.append('<p>');
//const itemsP = $('.row .row div p');
//console.log(itemsP);