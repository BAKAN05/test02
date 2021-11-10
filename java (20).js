const a1 = 30;
const a2 = 45;
const a3 = 60;

const suma = a1 + a2 + a3;

if(suma ===180){
    console.log("Es un triangulo")
    if(a1 === a2 && a2 === a3){
        console.log("y es equilatero ")
    }else if(a1 === a2 || a2 === a3 || a1 === a3 ){
        console.log("y es isosceles")
    }else if(a1 === 90 || a2 === 90 || a1 === 90 ){
        console.log("y es rectagulo");}
}else {
    console.log("Esto no es un triangulo");
}