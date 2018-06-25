/**
 * Created by Deniel on 23.06.2018.
 */
$(".toggleCart").click(() => {
    let $cart = $('.cartContent');
    let $main = $('.mainCart');
    let z=0;
    if($main.height()===163&&z===0) {
        $cart.height(0);
        z=1;
    }
    if($cart.height()===0&&z===0) {

        $cart.height(110);
    }
    z=1;


    /*
    let z=0;
    if($cart.height()===110&&z===0) {
        $cart.height(0);
        z=1;
    }
    if($cart.height()===0&&z===0) {

        $cart.height(110);
    }
    z=1; */
});