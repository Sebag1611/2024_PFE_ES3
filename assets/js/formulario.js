function procesarFormulario(evento) {
    evento.preventDefault()
    const usuario = document.getElementById("nombre_usuario").value
    const peso = document.getElementById("peso").value
    const tiempo = document.getElementById("tiempo").value
    const actividad = document.getElementsByName("inlineRadioOptions")
    const resultado = document.getElementById("resultado")
    let met = 3.5


    for (let i = 0; i < actividad.length; i++) {
        if (actividad[i].checked) {
            // Muestra el valor del radio button seleccionado
            if (document.getElementById("caminar") == actividad[i]) {
                met = 3.5
            } else {
                met = 8.0
            }
            break;
        }
    }
    let calorias = met * 3.5 * peso * (tiempo / 200)

    if (peso >= 1 && peso <= 120 && tiempo >= 5 && tiempo <= 150) {
        resultado.innerHTML = `
        <div class="col-12 mt-3">
           <div class="alert alert-info" role="alert" id="resultado">
             Estaras quemando ${calorias}
           </div>
        </div>
        `
    } else {
        resultado.innerHTML = `
        <div class="col-12 mt-3">
           <div class="alert alert-warning" role="alert" id="resultado">
             Verifique los datos
           </div>
        </div>
        `
    }
}