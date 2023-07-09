# Base de datos



## tablas
La base de datos esta conformada por 6 tablas hasta el momento.


La tabla **noticias** es la que contiene todos los datos de las entradas y esta directamente relacionada con la tabla **seccion**, **administrador**, **posicion**, **estado** a travez de la clave foranea **id**. Esta conformada por los siguientes campos:
 
 1. id
 2. titulo
 1. bajada
 1. cuerpo
 1. imagen
 1. fecha
 1. id_seccion
    
    Esta clave foranea hace referencia a la tabla **seccion**

    id_seccion | seccion
      -- | --
    1 | principales
    2 | deportes
    3 | tecnologia
    4 | cultura
    5 | espectaculo
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

     Esta clave foranea hace referencia a la tabla **estado** . 

    El id_estado determina en que parte del proceso de publicacion se encuentra la noticia. 
    
    id_estado | estado
      -- | --
    1 | cargada
    2 | en revision
    3 | publicada

     * Cuando la entrada es cargada, se le asigna el id_estado = 1.
     * Cuando se le da al boton **ENVIAR** cambia a id_estado = 2
   
    una vez que la entrada esta _en revisión_ el administrador tiene dos opciones.
      * **RECHAZAR** vuelve a id_estado = 1.
      * **PUBLICAR** cambia el id_estado = 3. 

 1. id_posicion
 
    Esta clave foranea hace referencia a la tabla **posicion**.

    id_posicion | posicion
      -- | --
    1 | en portada(3 por seccion)
    2 | nota secundaria(4)
    3 | nota principal(1)
    4 | en seccion
     
     El id_posicion determina que lugar de la pagina ocupa el post. Como indica la tabla, el sistema esta diseñado de manera que **solo pueda haber 1 nota principal 4 secundarias y 3 en portada por categoria**. Haciendo que cada vez que se agregue o quite una entrada, el resto se reorganize para que la portada siempre este completa y actualizada. 

Las inserciones se hacen a traves de [post_action_submit.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_action_submit.php). Este recibe los datos de [post-action-submit.js](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/js/post-action-submit.js), que toma los valores que el usuario ingresa en los campos del formulario [PostForm()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostForm.js). 

 En el resto de los archivos **post_action_** se hacen modificaciones al post previamente cargado.
