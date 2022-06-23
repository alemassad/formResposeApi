# formResposeApi
Descripción del problema a resolver
 
La problemática de la semana consiste en extender el formulario para que al presionar el botón “enviar” se envien los datos cargados en el formulario a un servidor web mediante una llamada HTTP desde JavaScript.
 
En caso de que la validación de datos sea correcta, se deben enviar todos los datos del formulario a la siguiente URL: http://curso-dev-2021.herokuapp.com/newsletter y al recibir la respuesta se debe mostrar un cartel (modal) con un mensaje indicando si la suscripción al newsletter fue exitosa o falló. 
 
En caso de ser exitosa, el modal debe mostrar también los datos recibidos como respuesta de la llamada HTTP. 
 
Subir todos los cambios a Github y responder la problemática con la URL de la página de Github Pages con el formulario funcionando.


Pasos a seguir:
 
1. NUEVO REPOSITORIO (NO USAR EL DEL PARCIAL!)
2. Continuando con el formulario ya realizado, en la función que maneja el evento click del botón “enviar”, recolectar todos los datos del formulario y verificar que pase la validación.
3. Enviar dichos datos al servidor mediante método GET, con los valores de los campos utilizando query params.
Ejemplo: http://curso-dev-2021.herokuapp.com/newsletter?nombre=Juan&apellido=Perez
1. Asegurarse de que todos los datos del formulario se encuentren en la url para recibir una respuesta satisfactoria.
2. Crear las funciones que manejan el éxito y fracaso del envío de datos.
3. Crear un modal con HTML y CSS que esté por encima del resto de la página y se muestre delante de todo.
4. Ocultar el modal utilizando clases CSS y agregar los manejadores de eventos JavaScript necesarios para hacerlo aparecer y desaparecer según corresponda.
5. Hacer commits con el progreso y subir todos los cambios siempre verificando que se vea correctamente en Github Pages.

ENTREGA
Responder a la Problemática con el link de Github Pages y también el link del repositorio creado.
