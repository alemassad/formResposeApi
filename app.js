

var form=document.getElementById("formulario")

    form.addEventListener('submit', e =>{
        const inputNombre =document.getElementById("nombre").value;
        const inputApellido=document.getElementById("apellido").value;
        const inputMail=document.getElementById("email").value;
        const inputGenero=document.getElementById("genero").value;
        console.log(inputNombre,inputApellido,inputMail);
        function verificarNombre(){
            //const inputNombre =document.getElementById("nombre").value;
            if(inputNombre.length<3||inputNombre.length==""){
                document.getElementById("errorNombre").style.display ="block";
                rojo("nombre");              
                console.log("ingrese un Nombre verdadero "+!isNaN(inputNombre));
                document.getElementById("errorNombre").style.display ="block";
                rojo("nombre");
                return false;        
            }else if(!isNaN(inputNombre)){
                document.getElementById("errorNombre").style.display ="block";
                rojo("nombre");   
                return false;     
            }else{
                document.getElementById("errorNombre").style.display="none";
                verde("nombre");
                console.log("nombre es: "+inputNombre);     
                nombreValido=inputNombre;   
                return true;
            } 
        }  
        function verificarApellido(){
            
            if(inputApellido.length<3||inputApellido.length==""){
                document.getElementById("errorApellido").style.display ="block";
                rojo("apellido");              
                console.log("ingrese un Apellido valido "+(inputApellido));
                document.getElementById("errorAoellido").style.display ="block";
                rojo("apellido");
                return false;        
            }else if(!isNaN(inputApellido)){
                document.getElementById("errorApellido").style.display ="block";
                rojo("apellido");
                return false;        
            }else{
                document.getElementById("errorApellido").style.display="none";
                verde("apellido");
                console.log("el Apellido es: "+inputApellido);
                apellidoValido=" "+ inputApellido;
                return true;
            } 
        } 
        function verificarCorreo(){
            //const inputMail=document.getElementById("email").value;
            var regexEmail= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
            if(!regexEmail.test(inputMail)){
                console.log("entrar un mail valido");
                rojo("email");
            }else{
                document.getElementById("errorCorreo").style.display ="none";
                verde("email");
                console.log("Email es: "+inputMail);
                correoValido=" "+inputMail;
                return true;
            }
        }

        if ( verificarNombre() && verificarApellido() && verificarCorreo()){
 
        const peticion = async()=>{
        try{
            console.log("Dentro del TRY");
        const respuesta= await fetch(`https://curso-dev-2021.herokuapp.com/newsletter?name=${inputNombre}&surname=${inputApellido}&email=${inputMail}&genero=${inputGenero}`);
        
        const datos= await respuesta.json();
        console.log(datos);
        document.getElementById("contenido1").style.display ="block";

        var nombre=document.getElementById("H5nombre");        
        nombre.innerHTML= "Nombre: "+datos.name;

        var apellido=document.getElementById("H5apellido");
        apellido.innerHTML= "Apellido: "+datos.surname;

        var email=document.getElementById("H5mail");
        email.innerHTML= "Email: "+datos.email;

        var genero=document.getElementById("H5genero");
        genero.innerHTML= "Genero: "+datos.genero;

        }catch(error){
            console.log(error);
        }
    }
        peticion();
        formulario.reset();
        e.preventDefault();
    }else{
        e.preventDefault();
    }
});
function rojo(e){
    document.getElementById(e).style.background = "rgb(255, 4, 2, 0.5)";    
}
function verde(e){
    document.getElementById(e).style.background = "rgb(157, 230, 188, 0.7)";
}
let btnCerrar=document.getElementById("cerrar");
btnCerrar.addEventListener("click",cerrar);
    function cerrar(){   
        document.getElementById("email").style.background = "white";
        document.getElementById("apellido").style.background = "white";
        document.getElementById("nombre").style.background  = "white";
        document.getElementById("contenido1").style.display ="none";
        formulario.reset();    
    }


