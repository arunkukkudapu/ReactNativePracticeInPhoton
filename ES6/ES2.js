// Implement function called calculatePrice that simulates named parameters concept. calculatePrice takes 3
//  params named price, tax and discount, out of which discount is default with 10. 
// Logic to use:
// taxablePrice = price - (price * (discount / 100))
//     	priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));

// Concepts to use:
// Block scoping
// Arrow functions
// Destructuring

let calculatePrice = (price,tax,discount)=>{
    let taxablePrice = price - (price * (discount / 100));
    let priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));
    console.log(priceWithTax);
}

calculatePrice(200,2,10);