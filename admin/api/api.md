
## /api
Esta carpeta contiene los archivos encargados de obtener informacion de la [base de datos](https://github.com/MarcoA36/diario_digital/blob/main/admin/db/diario_digital.sql) para ser utilizada por el frontend (nota principal, nota secundaria, notas principales, notas por categoria, nota seleccionada)
* En la carpeta **/img** se guardan las imagenes al momento de cargar una nueva entrada en la base de datos mediante el metodo `move_uploaded_file()` en el archivo [post_action_submit.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_action_submit.php).
* Los archivos **post_get_** hacen una consulta determinada a la base de datos y devuelven los resultados en formato JSON a través de la función `echo json_encode()`. 
> Estos archivos son usados en las consultas fetch de diario_digital_js
* Los archivos **post_query_**, al igual que post_get hacen una consulta, pero no devuelven el objeto JSON. 
> Estos archivos son incluidos en diario_digital_php 
* Los archivos **query_** consultan informacion de las distintas tablas estaticas para ser usada en las consultas **post_**.
 
            -/img
            - conexion.php
            - post_get_category.php
            - post_get_location-category.php
            - post_get_location-primary.php
            - post_get_location-secondary.php
            - post_get_search.php
            - post_query_category.php
            - post_query_location-category.php
            - post_query_location-featured.php
            - post_query_post.php
            - query_categories.php
            - query_editors.php
            - query_states.php
            - validations.php

         