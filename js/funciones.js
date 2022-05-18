import  Citas from './clases/Citas.js';
import UI from './clases/UI.js';
import {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario
} from './selectores.js'

const ui = new UI();
const administrarCitas = new Citas();

let editando = false;

//OBJETO CON INFORMACION DE LA CITA
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora:'',
    sintomas:''
};

// AGREGA DATOS AL OBJETO DE CITA
export function datosCitas(e){
    citaObj[e.target.name] = e.target.value;
};

export function nuevaCita(e){
    e.preventDefault();

    const {mascota,propietario,telefono,fecha,hora,sintomas} = citaObj;

    // validar
    if(mascota === ''|| propietario === ''|| telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligarotios', 'error');

        return
    }
    if(editando){
        ui.imprimirAlerta('Editado correctamente')

        //Pasar el objeto de la cita a edicion
        administrarCitas.editarCita({...citaObj});

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        //Quitar modo edicion
        editando = false
    }else{
        citaObj.id = Date.now();
    
        //Creando una nueva cita
        administrarCitas.agregarCita({...citaObj});
        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agrego correctamente')
    }

    //reiniciar el objeto
    reiniciarObjeto();

    //reiniciar el formulario
    formulario.reset();

    //Imprimir HTML
    ui.imprimirCitas(administrarCitas);
}

export function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
};

export function eliminarCita(id){
    administrarCitas.eliminarCita(id);
    ui.imprimirAlerta('La cita se elimino correctamente');
    ui.imprimirCitas(administrarCitas);
};


//Carga los datos y modo edicion

export function cargarEdicion(cita){
    const {mascota,propietario,telefono,fecha,hora,sintomas, id} = cita;

    //Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;


    //Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //Cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
    editando = true
};