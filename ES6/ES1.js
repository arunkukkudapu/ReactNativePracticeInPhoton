let arrObj = [
    {text: "ES6 is awesome", type: "p"},
    {text: "ES6 is significant update in JS history", type: "li"},
    {text: "const creates immutable variables", type: "li"},
    {text: "Block scoping via let and const", type: "li"},
    {text: "ES6 was released in 2015", type: "h3"}
];

let abc = ()=>{
    for(let a of arrObj){
        a.type == "li" ? console.log(`Element type is  ${a.type} with text ${a.text}`) : ''; 
    }
}
abc();

