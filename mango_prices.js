//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free



// option 1
function mango2(quantity, price) {
    let freeMangos = Math.floor(quantity / 3);
    return (quantity - freeMangos) * price;
}

// option 2
function mango3(quantity, price) {
    let totalCost = 0;
    while (quantity > 0) {
        if (quantity > 2) {
            quantity -= 3;
            totalCost += 2 * price;
        } else {
            totalCost += price;
            quantity -= 1;
        }
    }
    return totalCost;
}