////////////////LOGIN/////////////////////////
function hideLogin() {
    var x = document.getElementById("logIn");
    var y = document.getElementById("signUp");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function previewImage(event){
    var reader = new FileReader();
    var imageField = document.getElementById("image-field")

    reader.onload = function(){
        if(reader.readyState == 2){
            imageField.src = reader.result;
        }
    }

    reader.readAsDataURL(event.target.files[0]);
}

function validarContraseña(){
    var inputPassword = document.getElementById("password").value;
    var invalid = document.getElementsByClassName('invalid')[0];

    invalid.style.display = "none";

    if (inputPassword.length < 8) {
        invalid.style.display = "block";
        invalid.innerHTML = "Debe de haber almenos 8 caracteres";
        return false;
    }
    
    var numeros="0123456789";
    var caracteres="@¡”#$%&/=’?¡¿:;,.-_+*{][}";
    var tieneNumeros = false;
    var tieneCaracteres = false;
    for(i = 0; i < inputPassword.length; i++){
        if (numeros.indexOf(inputPassword.charAt(i),0) != -1){        
            tieneNumeros = true;
        }
        if (caracteres.indexOf(inputPassword.charAt(i),0) != -1){
            tieneCaracteres = true;
        }
    }

    if(tieneNumeros == false){
        invalid.style.display = "block";
        invalid.innerHTML = "Debe de haber almenos un caracter numerico";
        return false;
    }
    if(tieneCaracteres == false){
        invalid.style.display = "block";
        invalid.innerHTML = "Debe de haber un caracter especial";
        return false;
    }

    return true;
}


/////////////////ADDPRODUCT
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

//////////////////BUY COURSE
function hideCardInfo(opcion) {
    var x = document.getElementById("creditCard-box");
    var y = document.getElementById("debitCard-box");
    var z = document.getElementById("paypal-box");
    if (opcion.value == 0) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    if(opcion.value == 1){
        y.style.display = "block";
    }else{
        y.style.display = "none";
    }

    if(opcion.value == 2){
        z.style.display = "block";
    }else{
        z.style.display = "none";
    }
}