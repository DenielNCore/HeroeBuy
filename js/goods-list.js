function GoodsList(options) {
    let goods = options.goods;
    let parent = options.parent;
    let addItem = options.addItem;
    let $el = $('<div class="goods-list"/>').appendTo(parent);
    console.dir(goods);
    goods.forEach(function(good) {

            $(`<figure class="goods" id="${good.id}">
                <div class="itemName">${good.name}</div>
                <img class="itemImg" src="img/heroes/${good.photo1}" alt="heroe">
                <figcaption class="itemInfo">
                    <div class="itemPrice">
                        <span>$${good.price}</span>
                    </div>
                    <div class="itemLike">
                        <img src="img/big1.png">
                    </div>
                    <div class="toggleToCart">
                        <img src="img/bigCart1.png">
                    </div>
                </figcaption>
            </figure>`).appendTo('.goods-list');
    });

    $el.on(`click`, `.toggleToCart`, event => {
       let id = $(event.target).closest(`.goods`).attr(`id`);
       let item = getById(+id);
       addItem(item);
    });
    
    function getById(id) {
        for(let i = 0; i < goods.length; i++) {
            if(goods[i].id=== id)
                return goods[i];
        }

    }
}