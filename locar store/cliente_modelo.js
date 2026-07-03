class cliente_modelo {
    constructor(nombre, apellido, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }

    //este metodo es para obtener el nombre del cliente
    getNombre() {
        return this.nombre;
    }
    //este metodo es para obtener el apellido del cliente
    getApellido() {
        return this.apellido;
    }
    //este metodo es para obtener el rol del cliente
    getRol() {
        return this.rol;
    }
 
    //este metodo es para establecer el nombre del cliente
    setNombre(nombre) {
        this.nombre = nombre;
    }
    //este metodo es para establecer el apellido del cliente
    setApellido(apellido) {
        this.apellido = apellido;
    }
    //este metodo es para establecer el rol del cliente
    setRol(rol) {
        this.rol = rol;
    }
}