const valor = document.querySelectorAll("#t1 td")

valor[0] = num1;
valor[1] = num2;
valor[2] = num3;

if(num1>num2 && num1>num3){
    maior = num1;
    if(x2>x3){
        meio = num2
        menor = num3
    }
}
else if(num2>num1 && num2>num3){
    maior = num2;
    if(num1>num2){
        meio = num1
        menor = num2}
  }else if (num3>num1 && num3>num2){
    maior = num3
    if(num1>num2){
        meio = num1
        menor = num2
    }
  }


valor[0] = menor;
valor[1] = meio;
valor[2] = maior;