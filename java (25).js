const player = {
    name: "Mario",
    edad: 45,
    bigote: true,
    infoFlecha: () => console.log(this),
    info: function () {
        console.log(this,arguments); 
    },

}