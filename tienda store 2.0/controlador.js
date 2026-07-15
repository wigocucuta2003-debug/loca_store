import cliente_modelo from "./cliente_modelo.js";
import api_modelo from "./api_modelo.js";
//

const api = new api_modelo();
const boton_registrar = document.getElementById("boton_registrar");
boton_registrar.addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const rol = document.getElementById("rol").value;
    const cliente = new cliente_modelo(nombre, apellido, rol);

    let obj_cliente= cliente.pasar_a_api_modelo();

    console.log(obj_cliente);

    

    api.gueardar_cliente('lista_clientes', obj_cliente);
    api.inprimir_cliente();

});