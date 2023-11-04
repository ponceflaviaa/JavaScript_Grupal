document.getElementById("resumen").addEventListener("click", function(){totalAPagar()});

let carrito = [];

function totalAPagar(){

    const valor = 200;
    let resultado = 0;

    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;

    console.log(cantidad);
    console.log(categoria);

    switch(categoria){
        case "estudiante":
            resultado = (200 * 0.8) * cantidad;
            console.log(resultado);
            break;
        
        case "trainee":
            resultado = (valor * 0.5) * cantidad;
            break;
    
        case "junior":
            resultado = (valor * 0.15) * cantidad;
            break;
    }

    document.getElementById("totalAPagar").innerHTML = "Total a pagar: $" + resultado;
}