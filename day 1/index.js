//findAreaofRectangle
let length = 15;
let width = 10;

let area = (length*width);

console.log(area);

//findPerimeterOfRectangle
length = 15;
width = 10;

area = (2*length) + (2*width);

console.log(area);

//findDiameter,circumference,andAreaOfACircle

var r = 14;
var d = r*2;
console.log(d)

var d = 28;
var  circumference = 3.14*d;
console.log(circumference)

var r = 14;
area = 3.14*r*r;
console.log(area)

//findAnglesOfTriangleIfTwoAnglesAreGiven

var angle = 180;
var angle1 = 60
var angle2 = 60
var angle3 = angle - (angle1+angle2);
console.log(angle3)

//GetDifferenceBetweenDatesInDays

let date_1 = new Date('12/10/2020');
let date_2 = new Date('10/10/2020');
let difference = date_1.getTime() - date_2.getTime();
console.log(difference)

let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
console.log(TotalDays)

//
console.log(Math.floor(400/365))
console.log(Math.floor(400%365/30));
console.log(Math.floor(400%365%30));