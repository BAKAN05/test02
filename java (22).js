const year = 2025;

if(year % 4 === 0 && (year % 400 === 0 || year % 100 !==0)){
    console.log(`El año ${year} es bisiesto`)

}else {
    console.log(`El año ${year} NO es bisiesto`)
}