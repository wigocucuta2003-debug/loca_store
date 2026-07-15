export default

class api_modelo {  
    
    gueardar_cliente(lista_clienete, obj_cliente){
        //get --> toma la informacion de localStorage
        localStorage.setItem(lista_clienete, JSON.stringify([]));
        const lista = JSON.parse(localStorage.getItem(lista_clienete));
        lista.push(obj_cliente);
        //set --> guarda la informacion en localStorage
        localStorage.setItem(lista_clienete, JSON.stringify(lista));
    }


    inprimir_cliente(){
        const info = localStorage.getItem('lista_clientes');
        console.log(info);
    }
}