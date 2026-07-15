export default class cliente_modelo {
    constructor(nombre, apellido, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }

    pasar_a_api_modelo(){
        return {
            nombre: this.nombre,
            apellido: this.apellido,
            rol: this.rol
        };
    }
}