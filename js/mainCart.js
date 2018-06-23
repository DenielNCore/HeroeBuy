/**
 * Created by Deniel on 23.06.2018.
 */
$(".toggleCart").click(() => {
    let $cart = $('.cartContent');
    let z=0;
    if($cart.height()===110&&z===0) {
        $cart.height(0);
        z=1;
    }
    if($cart.height()===0&&z===0) {
        $cart.height(110);
    }
    z=1;
});