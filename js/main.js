let nombreyapellido = false
let nombreApellidoBuscado = ""

for (let i = 0; i < 100 && nombreyapellido == false; i++) {

    nombreApellidoBuscado = prompt("Ingrese su nombre y apellido")
    if (nombreApellidoBuscado == "Enrique Diaz") {
        nombreyapellido = true
        alert("Nombre y apellido encontrado en base de datos")
    } else {
        alert("Nombre y apellido no encontrado, vuelva a intentar")
    }
}

let numeroDeDni = 26818901
let dni = Number(prompt("Ingresa tu numero de DNI"))

if (dni === numeroDeDni) {
    alert("Ingresaste al sistema, Bienvenido!!!")
} else {
    alert("Usuario no encontrado, intente nuevamente")
}

function calcularTotal(arr){
    let resultado = 0;
    arr.forEach( producto => {
        resultado += producto.precio * producto.cantidad
    })
    return resultado;
}

const carritoDeCompra = []
const listaProductos = [{ id: 1, nombre: "Lapiz", precio: 100, tipoInsumo: "Marcadores", cantidad: 0 },
{ id: 2, nombre: "Lapicera", precio: 150, tipoInsumo: "Marcadores", cantidad: 0 },
{ id: 3, nombre: "fibra", precio: 300, tipoInsumo: "Marcadores", cantidad: 0 },
{ id: 4, nombre: "Lapices de colores", precio: 500, tipoInsumo: "Marcadores", cantidad: 0 },
{ id: 5, nombre: "Ceritas", precio: 750, tipoInsumo: "Marcadores", cantidad: 0 },
]


listaProductos.forEach(el => {
    console.log(el.id)
    console.log(el.nombre)
    console.log(el.precio)
    console.log(el.tipoInsumo)

})


let mostrarProductos = ""

listaProductos.forEach( producto => {

mostrarProductos += "id: "+ producto.id +"producto:  " + producto.nombre +" precio: $" + producto.precio+"\n"

})

alert(mostrarProductos)

do {
    let id = prompt("Ingrese el Numero de producto", 1)

    if (!isNaN(id)) {

        console.log("entramos al if")

        if (listaProductos.some(producto => producto.id == id)) {

            let cantidad = prompt("Cuantos va a adquirir?")
            const producto = listaProductos.find(producto => producto.id == id)
            producto.cantidad = cantidad;
            carritoDeCompra.push(producto)
        } else {
            console.log("el dato ingresado es inexistente.")
        }
    }

    rta = prompt("Desea seguir comprando? S/N")
} while (rta != "n")

alert("El total de la compra es de: "+calcularTotal(carritoDeCompra))



