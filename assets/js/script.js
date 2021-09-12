class Propietario{
    constructor(nombre, direccion,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario(){
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el numero telefonico de contacto: ${this.telefono}`;
    }
}

class Animal extends Propietario{
    constructor(nombre, direccion,telefono, tipo){
        super(nombre, direccion,telefono)
        this._tipo = tipo;
    }

    get tipo(){
        return this._tipo;
    }
}

class Mascota extends Animal{
    constructor(nombre, direccion,telefono, tipo, nombre_mascota, enfermedad){
        super(nombre, direccion,telefono, tipo)
        this._nombre_mascota = nombre_mascota;
        this._enfermedad = enfermedad;
    }

    get nombre_mascota(){
        return this._nombre_mascota
    }

    set nombre_mascota(nombre_mascota){
        this._nombre_mascota = nombre_mascota;
    }

    get enfermedad(){
        return this._enfermedad
    }

    set enfermedad(enfermedad){
        this._enfermedad = enfermedad;
    }
}

let btn = document.getElementById('btn-agregar');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    //owner
    let owner_name = document.getElementById('propietario').value;
    let owner_phone = document.getElementById('telefono').value;
    let owner_address = document.getElementById('direccion').value;
    //pet
    let pet_name = document.getElementById('nombreMascota').value;
    let pet_type = document.getElementById('tipo').options[tipo.selectedIndex].text
    let pet_disease = document.getElementById('enfermedad').value;
    
    clean();

    if (pet_type == 'Perro'){
        let perro = new Mascota(owner_name, owner_address, owner_phone, pet_name, pet_type, pet_disease);
        datosAgregados(perro);
    }
    else if(pet_type == 'Gato'){
        let gato = new Mascota(owner_name, owner_address, owner_phone, pet_name, pet_type, pet_disease);
        datosAgregados(gato);
    }
    else{
        let conejo = new Mascota(owner_name, owner_address, owner_phone, pet_name, pet_type, pet_disease);
        datosAgregados(conejo);
    }
})

const datosAgregados = (mascota) => {
    let result = document.getElementById('resultado');
    let node = document.createElement("LI");  
    let textnode = document.createTextNode(mascota.datosPropietario());
    node.appendChild(textnode);
    result.appendChild(node);

    let node1 = document.createElement("LI");  
    textnode = document.createTextNode(`El tipo de Animal es un: ${mascota.tipo}, mientras que el nombre de la mascota es: ${mascota.nombre_mascota} y la enfermedad es: ${mascota.enfermedad} `);
    node1.appendChild(textnode);
    result.appendChild(node1);
}

const clean = () => {
        //owner
        document.getElementById('propietario').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('direccion').value = '';
        //pet
        document.getElementById('nombreMascota').value = '';
        document.getElementById('enfermedad').value = '';
        //result
        document.getElementById('resultado').innerHTML = '';
}