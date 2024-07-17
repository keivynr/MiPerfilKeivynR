function validarEmail(){
                
	// Get our input reference.
	var correo = document.getElementById('Correo');
	
	// Define our regular expression.
	var validar =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if(!validar.test(correo.value)){
		alert('Correo Electronico inválido, ingreselo correctamente');
        correo.value = "";
        return false;
	}
    return true;
} 

function Vacio(le){
    if(le.value == ""){
        alert('Error, debe llenar este espacio');
    }
}

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var nombre = document.getElementById('Nombre');
    var correo = document.getElementById('Correo');
    if(validarEmail() || nombre.value != "" || correo.value != ""){
        var form = e.target;
        var formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('respuesta').innerHTML = "Datos enviados correctamente"
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }else{
        alert('Error, debe llenar todos los espacios');
    }
    
});