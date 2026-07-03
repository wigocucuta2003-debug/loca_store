//zona de codigo principal
function hacer_bucle() {
    for (let i = 0; i < 1000000000; i++) {
        console.log(i);
    }   

async function hacer_saludo() {
    const info = await hacer_bucle();
    console.log("Hola, mundo!");
}


const info_cliente = {
    nombre: "william",
    apellido: "gomez",
    rol: "admin"
};

const boton_enviar = document.getElementById("registrar");
console.log(boton_enviar);

boton_enviar.addEventListener("click", () => {
    const info_strong = localStorage.getItem("cliente");
    console.log(info_strong)

    localStorage.setItem("info_cliente", JSON.stringify(info_cliente));
    localStorage.setItem("info_token", JSON.stringify([]));
    localStorage.setItem("info_api", JSON.stringify([]));
    localStorage.setItem("info_producto", JSON.stringify([]));

    hacer_saludo();
});
