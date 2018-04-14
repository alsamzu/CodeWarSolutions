//Implement a function that successfully adds two numbers together and returns their solution in binary. The conversion can be done before, or after the addition of the two
function addBinary( a, b ){
var sum = a + b,
  		binary = '';
  while ( sum > 0 ) {
    binary = ( sum % 2 ) + binary;
    sum = Math.floor( sum / 2 );
  }
                          return binary;}
 addBinary( );
