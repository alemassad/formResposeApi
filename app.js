

var form=document.getElementById("formulario")

    form.addEventListener('submit', e =>{
        const inputNombre =document.getElementById("Nombre").value;
        const inputApellido=document.getElementById("Apellido").value;
        const inputMail=document.getElementById("Correo").value;
        const inputGenero=document.getElementById("genero").value;
        console.log(inputNombre,inputApellido,inputMail);
        formulario.reset();
        e.preventDefault();
        function verificarNombre(){
            
            if(inputNombre.length<3||inputNombre.length==""){
                document.getElementById("errorNombre").style.display ="block";
                rojo("Nombre");              
                console.log("ingrese un Nombre verdadero "+!isNaN(inputNombre));
                document.getElementById("errorNombre").style.display ="block";
                rojo("Nombre");
                return false;        
            }else if(!isNaN(inputNombre)){
                document.getElementById("errorNombre").style.display ="block";
                rojo("Nombre");   
                return false;     
            }else{
                document.getElementById("validoNombre").style.display="block";
                verde("Nombre");
                console.log("nombre es: "+inputNombre);     
                nombreValido=inputNombre;   
                return true;
            } 
        }  
        function verificarApellido(){
            
            if(inputApellido.length<3||inputApellido.length==""){
                document.getElementById("errorApellido").style.display ="block";
                rojo("Apellido");              
                console.log("ingrese un Apellido valido "+(inputApellido));
                document.getElementById("errorApellido").style.display ="block";
                rojo("Apellido");
                return false;        
            }else if(!isNaN(inputApellido)){
                document.getElementById("errorApellido").style.display ="block";
                rojo("Apellido");
                return false;        
            }else{
                document.getElementById("validoApellido").style.display="block";
                verde("Apellido");
                console.log("el Apellido es: "+inputApellido);
                apellidoValido=" "+ inputApellido;
                return true;
            } 
        } 
        function verificarCorreo(){
            
            var regexEmail= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
            if(!regexEmail.test(inputMail)){
                console.log("entrar un mail valido");
                document.getElementById("errorCorreo").style.display ="block";
                rojo("Correo");
            }else{
                document.getElementById("validoCorreo").style.display ="block";
                verde("Correo");
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
        
       
    }else{
        e.preventDefault();
    }
    
});
    function rojo(e){
        document.getElementById(e).style.background = "rgb(255, 4, 2, 0.5)";
        document.getElementById("valido"+e).style.display ="none";
    }
    function verde(e){
        document.getElementById(e).style.background = "rgb(157, 230, 188, 0.7)";
        document.getElementById("error"+e).style.display="none";
    }
    let btnCerrar=document.getElementById("cerrar");
    btnCerrar.addEventListener("click",cerrar);
    function cerrar(){   
        document.getElementById("Correo").style.background = "white";
        document.getElementById("Apellido").style.background = "white";
        document.getElementById("Nombre").style.background  = "white";
        document.getElementById("contenido1").style.display ="none";
        formulario.reset();    
    }


