function formatPrice(num) {
    const str = num.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');


    return str;
}

console.log( '1', formatPrice(99) === '99', formatPrice(99) );
console.log( '2', formatPrice(1599) === '1 599', formatPrice(1599) );
console.log( '3', formatPrice(21599) === '21 599', formatPrice(21599) );
console.log( '4', formatPrice(121599) === '121 599', formatPrice(121599) );