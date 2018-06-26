$(function() {
    const ITEMS_KEY = '.cartContent';

    let items = JSON.parse(localStorage.getItem(ITEMS_KEY) || null) || [];

    new GoodsList({
        goods: goods,
        parent: 'main',
        addItem: function(item) {
            cart.add(item);
        },
        items: items
    });


    let cart = new Cart(items, '.mainCart', (items) => {
        localStorage.setItem(ITEMS_KEY, JSON.stringify(items));

    });


});