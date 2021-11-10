const users = [
    {nombre: 'Pepe', email:'1'},
    {nombre: 'Lisa', email:'2'},
    {nombre: 'John', email:'3'},
    {nombre: 'Emilio', email:'4'},
    {nombre: 'Dulceida', email:'5'},
    {nombre: 'Pedro', email:'6'},
] 
const nuevoArray = users.forEach((users) =>
    
    console.log (`El email de ${users.nombre} es ${users.email}`));


const nuevoArray2 = users.map((users) =>
    
   (`El email de ${users.nombre} es ${users.email}`));

 console.log(nuevoArray);
 console.log(nuevoArray2);