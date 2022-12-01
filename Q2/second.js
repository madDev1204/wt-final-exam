  function inAscOrder(arr){
    var arrcopy = JSON.parse(JSON.stringify(arr));
    arrcopy.sort((a,b)=> a - b);
    
    var err = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]!== arrcopy[i]){
            err = 1;
        }
    }
    if(err == 0){
        return true;
    }
    return false;
  }


  console.log(inAscOrder([1,2,4,7,19]));
  console.log(inAscOrder([1,2,3,4,5]));
  console.log(inAscOrder([1,6,10,18,2,4,20]));
  console.log(inAscOrder([9,8,7,6,5,3,2,1]));

