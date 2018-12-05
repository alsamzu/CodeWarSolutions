// Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function IsDivisible(n,x,y){

    if(n % x ==0 && n % y ==0){
        console.log(n+" is divisible by " +x+" and "+y)
       // return true;
    }
    else{
        console.log(n+" is not divisible by " +x+" and "+y)
       // return false;
    }
}
IsDivisible(12,5,4);
