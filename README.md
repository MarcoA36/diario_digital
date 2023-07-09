# Diario digital
Este proyecto está diseñado para crear y administrar un diario digital en línea. Proporciona una plataforma para publicar y gestionar noticias. El frontend es una clonacion de la [pagina oficial de la BBC](https://www.bbc.com/) y esta desarrollado tanto en [js](https://github.com/MarcoA36/diario_digital/tree/main/diario_digital_js) como en [php](https://github.com/MarcoA36/diario_digital/tree/main/diario_digital_php). 
***
---

## Panel de administracion
Al panel se ingresa a travez de la **pagina de login** en donde el administrador completa los campos usuario y contraseña que previamentes fueron guardados (manualmente) en la tabla **administrador** de la base de datos.

hay dos **rangos** de administradores. 
 1. el rango 1 solo tiene acceso a cargar post y a enviarlos (no a publicarlos).
1. el rango 2 tiene acceso a cargar y publicar sus posts, y los post recibidos por el administrador rango 1.

Al momento de publicar , el administrador puede seleccionar la posicion que desea que ocupe el card en la portada. (nota principal, nota secundaria, en seccion, portada). una vez cargado el resto de las card es reorganizada.



* **/admin**: Contiene los archivos relacionados con el panel de administración del sistema. 
  * **/api**: Contiene los archivos PHP que manejan las peticiones y consultas a la base de datos. [ver documentacion](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/api.md)
  * **/app**: Contiene los archivos relacionados con la interfaz de usuario y la lógica del cliente. [ver documentacion](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/app.md)
    * **/componentes**: contiene los distintos componentes que conforman la interfaz de usuario.
    * **/css**: Contiene los estilos CSS utilizados en la interfaz.
    * **/js**: Contiene los scripts JavaScript utilizados para la funcionalidad del sistema.
    * **/php**: Contiene los archivos php que modifican y obtienen informacion de la base de datos.
  * **/db**: Contiene la base de datos del proyecto. [ver documentacion](https://github.com/MarcoA36/diario_digital/blob/main/admin/db/db.md) 

## Frontend
El frontend es una clonacion de la [pagina oficial de la BBC](https://www.bbc.com/) y esta desarrollado tanto en [js](https://github.com/MarcoA36/diario_digital/tree/main/diario_digital_js) como en [php](https://github.com/MarcoA36/diario_digital/tree/main/diario_digital_php). 

La portada esta dividada en 
 * Notas principales: que es el grupo de las cinco que aparecen justo debajo del header. A su vez se divide en

    * Nota principal a la izquierda
    * Notas secundarias, el grupo de las cuatro que acompañan a la nota principal.
  * En seccion: es la fila de tres que aparece debajo de las principales. Cada categoria del diario tiene las tres ultimas noticias publicadas en la portada.



  

* **/diario_digital_js**
    
  * **/app**
       * **/componentes**:
       * **/config**:
       * **/css**:
       * **/img**:
       * **/js**:
  * **index.html**




En diario_digital_php simplemente se divide en varios archivos con codigo html y php que representan las distintas secciones de la pagina.
* **/diario_digital_php**

    * **/assets**
          
      * **/css**
      * **/js**
    * **/config**
    * **/img**
    * **/js**
    * **/modules** 
  * **index.php**




## Instalación
1. Configura la base de datos MySQL y asegúrate de tener los datos de conexión necesarios.

2. Importa el archivo SQL provisto en la carpeta database para crear la estructura de la base de datos.

3. Actualiza los archivos de configuración (como config.php) con los datos de conexión a tu base de datos.

4. Abre el proyecto en tu servidor local o en el navegador y comienza a usar el sistema

### Uso
Proporciona ejemplos o instrucciones claras sobre cómo utilizar el proyecto. Esto puede incluir comandos de línea de comandos, funciones o métodos específicos que se pueden utilizar, y cualquier otra información relevante para que otros desarrolladores comprendan cómo interactuar con tu proyecto.

### Carpetas y Archivos
Explora la estructura de carpetas y archivos clave en tu proyecto. Puedes incluir una descripción breve de cada carpeta y archivo relevante y su función en el proyecto.

### Contribución
Si deseas que otros contribuyan a tu proyecto, describe cómo pueden hacerlo. Puedes explicar cómo los desarrolladores pueden enviar solicitudes de extracción, informar problemas o sugerir mejoras.

### Licencia
Indica la licencia bajo la cual se distribuye el proyecto. Esto es importante para que otros desarrolladores comprendan los términos y condiciones de uso del proyecto.

### Créditos
Si utilizaste librerías, recursos o inspiración de otros proyectos, es una buena práctica dar créditos y enlaces a dichas fuentes.

### Contacto
Proporciona información de contacto (como correo electrónico o enlaces a tus perfiles en redes sociales) para que otros desarrolladores puedan comunicarse contigo en caso de preguntas o colaboraciones.

Recuerda que el README debe ser claro, conciso y fácil de entender. Incluye la información esencial para que los desarrolladores puedan comprender rápidamente tu proyecto y comenzar a trabajar con él.
