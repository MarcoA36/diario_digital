# Diario digital
***
---

## Panel de administracion
Al panel se ingresa a travez de la **pagina de login** en donde el administrador completa los campos usuario y contraseña que previamentes fueron guardados (manualmente) en la tabla **administrador** de la base de datos.

hay dos **rangos** de administradores que se definen al momento de hacer el registro. 
 1. el rango 1 solo tiene acceso a cargar noticias y enviarlas a revisión. Pero no tiene acceso a publicar, ni a ver noticias cargadas por otro administrador.
1. el rango 2 tiene acceso a cargar y publicar sus noticias, y las noticias recibidos por el/los administrador/res rango 1.

Al momento de publicar , el administrador puede seleccionar la **posicion** que desea que ocupe el post en la portada. (nota principal, nota secundaria, en seccion, portada). una vez cargado el resto de las card es reorganizada.


### Los archivos se organizan de la siguiente manera:

* **/admin** 
  * **/api**: Contiene los archivos PHP que manejan las peticiones y consultas a la base de datos. [ver documentacion](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/api.md)
  * **/app**: Contiene los archivos relacionados con la interfaz de usuario y la lógica del cliente. [ver documentacion](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/app.md)
    * **/componentes**: contiene los distintos componentes que conforman la interfaz de usuario.
    * **/css**: Contiene los estilos CSS utilizados en la interfaz.
    * **/js**: Contiene los scripts JavaScript utilizados para la funcionalidad del sistema.
    * **/php**: Contiene los archivos php que modifican y obtienen informacion de la base de datos.
  * **/db**: Contiene la base de datos del proyecto. [ver documentacion](https://github.com/MarcoA36/diario_digital/blob/main/admin/db/db.md) 

## Frontend
Desde el frontend se consulta a los archivos de **admin/api** para obtener las noticias y mostrarlas en la seccion que corresponda.

 * Notas principales: que es el grupo de las cinco que aparecen justo debajo del header. A su vez se divide en

    * Nota principal a la izquierda
    * Notas secundarias, el grupo de las cuatro que acompañan a la nota principal.
  * En seccion: es la fila de tres que aparece debajo de las principales. Cada categoria del diario tiene las tres ultimas noticias publicadas en la portada.



 ### En JS se organizan los archivos de la siguiente manera:

* **/diario_digital_js**
    
  * **/app**
       * **/componentes**: contiene las distintas **partes de la pagina** creada a partir de **funciones js**.
       * **/config**: contiene las configuraciones generales de la pagina
       * **/css**: contiene los estilos de la pagina en general. En el archivo **estilo.css** se inportan todos los archivos de **/modules**.
       * **/img**: Contienen las imagenes que se usan para crear la interfaz.
       * **/js**: Contiene las funcionalidades.
       * **App.js**: este archivo contiene el total de la aplicacion.
       * **index.js**: este es el archivo que se carga en **index.html** y que ejecuta la aplicacion (App()) y el router(Router()) en cada cambio de hash.
  * **index.html** Aqui se crea el _div_ **id='root'**, que es donde renderiza el contenido de la pagina. Para eso se incluye los archivos **estilos.css** y **index.js**.



 ### En PHP 
En diario_digital_php cada seccion de la pagina se controla en un archivo diferente.
* **/diario_digital_php**

    * **/assets**
      * **/css**
      * **/js**
    * **/config**
    * **/img**
    * **/js**
    * **/modules** 
  * **index.php** pagina principal.
   * **page-category.php** En este archivo se muestran todas las noticias de una categoria en especifico (que se pasa por parametro. Ej: deportes, cultura, espectaculo). 
    * **page-login.php** Pagina para loguearse.
    * **page-search.php** Pagina con el buscador.  
    * **page-single.php** Esta pagina muestra la noticia (que se pase el id como parametro) completa.




## Instalación
1. Configura la base de datos MySQL y asegúrate de tener los datos de conexión necesarios.

2. Importa el archivo SQL provisto en la carpeta [**admin/db/diario_digital.sql**](https://github.com/MarcoA36/diario_digital/blob/main/admin/db/diario_digital.sql)  para crear la estructura de la base de datos.

3. Actualiza los archivos de configuración con los datos de conexión a tu base de datos.
  * **admin/api/conexion.php**
  * **admin/app/php/conexion.php**

4. Abre el proyecto en tu servidor local o en el navegador y comienza a usar el sistema


### Créditos
La unica fuente externa que se usa para este proyecto es **font awesone** para agregar algunos iconos.

### Contacto
marco_95_5@yahoo.com

