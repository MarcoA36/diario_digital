
# /api
Esta carpeta contiene los archivos encargados de obtener informacion de la [base de datos](https://github.com/MarcoA36/diario_digital/blob/main/admin/db/diario_digital.sql) para ser utilizada por el frontend (nota principal, nota secundaria, notas principales, notas por categoria, nota seleccionada)

### /img
* En la carpeta **/img** se guardan las imagenes al momento de cargar una nueva entrada en la base de datos mediante el metodo `move_uploaded_file()` en el archivo [post_action_submit.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_action_submit.php).

### post_get_
* Los archivos **post_get_** hacen una consulta determinada a la base de datos y devuelven los resultados en formato JSON a través de la función `echo json_encode()`. 

  * [post_get_category.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/post_get_category.php) obtiene todas las noticias publicadas (estado 3) de una categoria especifica, que es determinada por el id_seccion recibido.

        $id_seccion = $_POST['seccion'];
  * [post_get_location-category.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/post_get_location-category.php) obtiene las 3 ultimas entradas de la categoria recibida por $_POST con **_id_posicion == 1_**. Estas entradas son usadas en el frontend para mostrar las **notas principales de cada seccion**.
  * [post_get_location-primary.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/post_get_location-primary.php) obtinen la unica entrada con **_id_posicion == 3_** para ser usada como **entrada principal** en el front.
  * [post_get_location-secondary.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/post_get_location-secondary.php) obtiene las 4 entradas con **_id_posicion == 2_** que seran usadas como las notas que acompañan a la nota principal antes mencionada para conformar la seccion de principales.
  *  [post_get_search.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/post_get_search.php) toma el valor recibido del buscador y busca en la base de datos las entradas en la que se encuentre este valor.
> Estos archivos son usados en las consultas fetch de diario_digital_js

### post_query_
* Los archivos **post_query_**, al igual que post_get hacen una consulta, pero no devuelven el objeto JSON. 
  * [post_query_category.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/post_query_category.php)
  * [post_query_location-category.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/post_query_location-category.php)
  * [post_query_location-featured.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/post_query_location-featured.php) aqui se hacen la consulta para obtener la **nota principal** y las cuatro **notas secundarias**
  * [post_query_post.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/post_query_post.php) obtiene el **id** del post seleccionado y busca la informacion del mismo en la base de datos.

> Estos archivos son incluidos en diario_digital_php

### query_
* Los archivos **query_** consultan informacion de las distintas tablas estaticas para ser usada en las consultas **post_**.

  * [query_categories.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/query_categories.php) 
  * [query_editors.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/query_editors.php)
  * [query_states.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/api/query_states.php)
 
           