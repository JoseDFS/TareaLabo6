let arrayProductos = [];

function addproducto(codigo, descrip, tipo, precio_compra, precio_venta, stock) {
    arrayProductos.push({ codigo, descrip, tipo, precio_compra, precio_venta, stock })
}

addproducto(2020, "gomitas ricas", "dulces", 10, 15, 6);
addproducto(2021, "chocobitos culeros", "dulces", 20, 35, 10);

function modifyStock(id){
    var newStock = parseInt(prompt('Inserte el nuevo Stock'),10);
    var find=false;
    arrayProductos.forEach(e => {
        if(e.codigo == id){
           e.stock = newStock;
           find=true;
        }
    });
    if(find)
        return console.log('Se modifico el stock del porducto seleccionado');
    else
        return console.log('Nose encontro el producto');
    
}