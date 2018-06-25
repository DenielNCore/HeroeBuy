function Cart(items, parent, onChange) {
    let self = this;
    let $el = createTemplate();
    this.items = items.slice();

//////////////////////////////
    bindEvents();

    items.forEach(renderItem);
    updateState();

    this.add = addItem;

    function createTemplate () {
        return $(`<div class="price">$100</div>
        <div class="buyNumber">{{1}}</div>
        <div class="toggleCart"></div>
<div class="cartContent empty">
                    <h2 class="empty-massage"> Корзина пуста...</h2>
                </div>`).appendTo(parent);
    }

    function addItem(item) {
        self.items.push(item);
        renderItem(item);
        updateState();
       onChange(self.items);
    }

    function removeItem(id) {
        removeById(id);
        updateState();
        onChange(self.items);
    }


    function renderItem(item) {
        $(`<div class="cart-item">
                <div class="cartPhotoes"><img alt="hero" src="img/heroes${item.photo1}"></div>
                <div class="deleteGood">Убрать</div>
            </div>`).appendTo(`.cartContent`);
    }




    function updateState() {
        let items = $el.find(`.cart-item`);

        if(items.length > 0) {
            $el.removeClass(`empty`);
        } else {
            $el.addClass(`empty`);
        }
        $el.find(`price`).text('$' + getTotal());
    }



    function removeById(id) {
        let index = -1;

        for (let i = 0; i < self.items.length; i++) {
            if (self.items[i].id === id) {
                index = i;
                break;
            }
        }

        if (index >= 0) {
            self.items.splice(index, 1);
        }
    }


    function bindEvents() {
        $el.on('click', `.deleteGood`, event => {
            let $tar = $(event.target).closest(`.cart-item`);
     //       console.dir($tar);
            let id = $tar.data(`id`);
            $tar.remove();

            removeItem(id)
        });
    }


    function getTotal() {
        return self.items.reduce(function(prev, item) {
            return prev + item.price;
        }, 0);
    }
}