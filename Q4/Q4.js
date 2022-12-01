function capitalizeLetters(mystring){
    let arr = mystring.split(' ');
    for (let i in arr){
        var newitem = arr[i].substr(0,1);
        newitem = newitem.toUpperCase();
        var rest = arr[i].substring(1);
        arr[i] = newitem.concat(rest);
    }
    
    const newstring = arr.join(" ");
    return newstring;
}

console.log(capitalizeLetters("i love javascript"));


function reverseInteger(myint){
    let mystr = myint.toString();
    let myarr = mystr.split('');
    if(myarr[0] != '-'){
        myarr = myarr.reverse();
        let mystr2 = myarr.join('');
        return parseInt(mystr2);
    }
    else{
        var newstr = mystr.substring(1);
        var newarr = newstr.split('');
        newarr = newarr.reverse();
        newarr.unshift(['-']);
        let mystr3 = newarr.join('');
        return parseInt(mystr3);
    }
    }
    
console.log(reverseInteger(-134));
console.log(reverseInteger(134));


UserCart = [
    {productId: 1, productName: "Mobile", price: 70000},
    {productId: 2, productName: "Laptop", price: 100000},
    {productId: 3, productName: "Airpods", price: 26900},
    {productId: 4, productName: "Watch", price: 30000},
    {productId: 5, productName: "Shoes", price: 35000},
    {productId: 6, productName: "Bag", price: 10000}
];

const sum = UserCart.reduce(function(prev,current){
    return prev + current.price;
},0);

console.log(sum);

const ascendingSorted = UserCart.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});

console.log(ascendingSorted);

const descendingSorted = UserCart.sort(function(a, b) {
    return parseFloat(b.price) - parseFloat(a.price);
});

console.log(descendingSorted);