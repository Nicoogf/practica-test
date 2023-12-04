class product {
    constructor(precio){
        this.precio = precio
    }

    getPrecio(){
        return this.precio
    }
}


class productoConDescuento extends product {
    constructor(precio , descuento) {
        super( precio )
        this.descuento = descuento
    }

    getPrecio(){
        return this.descuento *this.precio
    }
       
}
