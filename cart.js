const items = $('.col.col-xs-12.col-md-6.col-lg-4');
console.log(items);
for (var i=0;i<items.length;i++){
    const item = $('<a style="color:red;cursor:pointer;"></a>');
    item.text('Add to cart');
    items.eq(i).append(item);
    item.on('click',addHandler);
}

function addHandler() {
    console.log("hi");
}

//items.append('<p>');
//const itemsP = $('.row .row div p');
//console.log(itemsP);