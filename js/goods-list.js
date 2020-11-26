function GoodsList(options) {
    let goods = options.goods;
    let parent = options.parent;
    let addItem = options.addItem;
    let items = options.items;
    let cartIcon = ["img/bigCart1.png", "img/bigCart2.png"];

    let $el = $('<div class="goods-list"/>').appendTo(parent);

    $(`<div class="GoodBig hide"/>`).appendTo(parent);

    //console.dir(items);

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

    function cartMark(items,good) {
        let  ides ={};
        items.forEach((item) => {
             ides[item.id] = true;
        });
        let pic=0;
        for( let key in ides) {
            if (key==good.id) {
                pic=1;
            }
        }
       return pic;
    }

    function spawnBrand(brand) {

        goods.forEach(function(good) {
            let pic = cartMark(items, good);
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
                        <img src=${cartIcon[pic]}>
                    </div>
                </figcaption>
            </figure>`).appendTo('.goods-list');
            }
        });
    }

    function spawnAll() {

        goods.forEach(function(good) {
            let pic = cartMark(items,good);
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
                        <img src=${cartIcon[pic]}>
                    </div>
                </figcaption>
            </figure>`).appendTo('.goods-list');
        });
    }

    function createGood(good) {
        let pic = cartMark(items,good);
            $(`<div class="goodContent" id="${100+good.id}">

<a href="tel:+380637136341">+ 38 (063) <span>713 63 41</span> </a>
<a href="tel:+380637136341">+ 38 (063) 7136341 </a>


                <div class="miniPhotos">
                    <img src="img/heroes/${good.photo1}">
                    <img src="img/heroes/${good.photo2}">
                    <img src="img/heroes/${good.photo3}">
                </div>
                <div class="bigPhoto">
                    <div>${good.name}</div>
                    <img src="img/heroes/${good.photo1}">
                    <div class="itemInfo">
                        <div class="itemPrice">
                            <span>$ ${good.price}</span>
                        </div>
                        <div class="itemLike">
                            <img src="img/big1.png">
                        </div>
                        <div class="toggleToCart">
                            <img src=${cartIcon[pic]}>
                        </div>
                    </div>
                </div>
                <div class="closeGood">Закрыть</div>
            </div>
            <div class="goodInfo">
                <span class="goodText">${good.info}</span>
            </div>`).appendTo(`.GoodBig`);
    }


    $el.on(`click`, `.itemImg`, event => {
        let id = $(event.target).closest(`.goods`).attr(`id`);
        let $cont = $(`.GoodBig`);
        if($cont.children().length ===0) {
            $cont.removeClass(`hide`);
            createGood(goods[id - 1]);
        }
    });

    $(`.GoodBig`).on(`click`, `.closeGood`, event => {
        let $cont = $(`.GoodBig`);
        $cont.addClass(`hide`);
        $cont.children().remove();

    });


    $(`body`).on(`click`, `.toggleToCart`, event => {
       let id = $(event.target).closest(`.goods`).attr(`id`);
        let item;
        if(id === undefined) {
            id = $(event.target).closest(`.goodContent`).attr(`id`);
            item = getById(+id-100);
            addItem(item);
        }else {
            item = getById(+id);
            addItem(item);
        }

        $(event.target).attr('src',"img/bigCart2.png" );// картинка при выбраном
    });
    
    function getById(id) {
        for(let i = 0; i < goods.length; i++) {
            if(goods[i].id=== id)
                return goods[i];
        }

    }
}
