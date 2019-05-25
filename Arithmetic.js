
var sum = require('./Addition.js');
function Multiply(a,b)
{
	return a*b;
}
function Add(x,y)
{
	return sum.addNumber(x,y);
}
exports.Multiply = Multiply;
exports.Add = Add;

