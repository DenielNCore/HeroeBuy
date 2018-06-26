function GoodsList(options) {
    let goods = options.goods;
    let parent = options.parent;
    let addItem = options.addItem;
    let $el = $('<div class="goods-list"/>').appendTo(parent);
    let $good = $(`<div class="GoodBig hide"/>`).appendTo(parent);
    console.dir($good);

    spawnAll();
    $(`nav`).on(`click`, event => {
        if ($(event.target).hasClass(`allHeroes`)) {
            $(`.goods-list`).children().remove();
            spawnAll();
        }
        if ($(event.target).hasClass(`marvelSort`)) {
            $(`.goods-list`).children().remove();
            spawnBrand('marvel');
        }
        if ($(event.target).hasClass(`dcSort`)) {
            $(`.goods-list`).children().remove();
            spawnBrand('dc');
        }

    });

    function spawnBrand(brand) {

        goods.forEach(function(good) {
            if(brand===good.brand) {

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
            }
        });
    }

    function spawnAll() {

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
    }

    function createGood() {

        let z = $(`<div class="goodContent">
                <div class="miniPhotos">
                    <img src="img/heroes/marvel/deadpool1.png">
                    <img src="img/heroes/marvel/deadpool2.png">
                    <img src="img/heroes/marvel/deadpool3.png">
                </div>
                <div class="bigPhoto">
                    <div>Deadpool</div>
                    <img src="img/heroes/marvel/deadpool1.png">
                    <div class="itemInfo">
                        <div class="itemPrice">
                            <span>${{price}}</span>
                        </div>
                        <div class="itemLike">
                            <img src="img/big1.png">
                        </div>
                        <div class="itemCart">
                            <img src="img/bigCart1.png">
                        </div>
                    </div>
                </div>
                <div class="closeGood">Закрыть</div>
            </div>
            <div class="goodInfo">
                <span class="goodText">      897</span>
            </div>`).appendTo(`.GoodBig`);
        console.dir(z)
    }


    $el.on(`click`, `.itemImg`, event => {

        $(`.GoodBig`).removeClass(`hide`);
        createGood();
    });

    $(`.GoodBig`).on(`click`, `.closeGood`, event => {
        $(`.GoodBig`).addClass(`hide`);
    });


    $el.on(`click`, `.toggleToCart`, event => {
       let id = $(event.target).closest(`.goods`).attr(`id`);


        $(event.target).attr('src',"img/bigCart2.png" );
     //   console.dir($(event.target));

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