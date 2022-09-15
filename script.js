let num1, num2, num3;

num1 = (Math.random() * 99).toFixed(2);
num2 = (Math.random() * 99).toFixed(2);
num3 = (Math.random() * 99).toFixed(2);

const valor = document.querySelectorAll("#t1 td")

valor[0].innerHTML = num1;
valor[1].innerHTML = num2;
valor[2].innerHTML = num3;