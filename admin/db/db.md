## Base de datos



## tablas
la base de datos esta conformada por 6 tablas hasta el momento.

### noticias 
Es la tabla principal por ser la que contiene todos los datos del post. Esta conformada por los siguientes campos:
 
 1. id
 2. titulo
 1. bajada
 1. cuerpo
 1. imagen
 1. fecha
 1. id_seccion
    
    Esta clave foranea hace referencia a la tabla **seccion**

    1. id_seccion
    1. seccion 
 1. id_redactor

    Esta clave foranea hace referencia a la tabla **administrador**

    1. id
    2. nombre
    3. usuario
    1. contra
    1. email
    1. direccion
    1. localidad
    1. telefono
    1. rango
 1. id_estado

     Esta clave foranea hace referencia a la tabla **estado** 
   
    1. id_estado
    1. estado 
 1. id_posicion
 Esta clave foranea hace referencia a la tabla **posicion**
    1. id_posicion
    1. posicion 

En la tabla noticias se hacen las insersiones en [post_action_submit.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_action_submit.php) y en el resto de los archivos **post_action_** se hacen modificaciones al post previamente cargado.


