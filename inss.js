var salar = parseFloat(prompt("digite seu salario"));
var ir = 0.0;
var salarioliquido = 0.0;
var inss
debugger;

if (salar <= 1045.00) {
    inss = salar * 0.075;
} else if (salar <= 2089.60) {
    inss = salar * 0.09;
} else if (salar <= 3134.40) {
    inss = salar * 0.12;
} else if (salar <= 6101.10) {
    inss = salar * 0.14;
} else {
    inss = 713.10;
}
alert("seu desconto do inss sera de" + " " + inss)
if (salar <= 1903.98) {
    ir = 0
}
else if (salar <= 2826.65) {
    ir = salar * 0.075
} else if (salar <= 3751.05) {
    ir = 0.15 * salar
} else if (salar <= 4664.68) {
    ir = salar * 0.0225
} else if (salar > 4664.69) {
    ir = salar * 0.275
} salarioliquido = salar - inss - ir
alert("seu salario liquido sera de" + " " + salarioliquido)