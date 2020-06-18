
var today = new Date();
var year = today.getFullYear();
var birthdate = new Date('Sept 17, 1999 01:00:00');

var age = today.getTime() - birthdate.getTime();
age = Math.floor(age / 31556900000);

document.getElementById("info").innerHTML = '<p>My age is: ' + age + ' years old </p>';


document.getElementById("foot").innerHTML = '<p>Copyright &copy ' + year + '</p>';

document.getElementById("time").innerHTML = '<p>' + today + '</p>';
