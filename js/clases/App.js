import {datosCitas,nuevaCita} from '../funciones.js';
import {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario
} from '../selectores.js'
class App{
    constructor(){
        this.initApp();
    };

    initApp(){
        mascotaInput.addEventListener('input', datosCitas);
        propietarioInput.addEventListener('input', datosCitas);
        telefonoInput.addEventListener('input', datosCitas);
        fechaInput.addEventListener('input', datosCitas);
        horaInput.addEventListener('input', datosCitas);
        sintomasInput.addEventListener('input', datosCitas);
        formulario.addEventListener('submit', nuevaCita)
    };
};

export default App;