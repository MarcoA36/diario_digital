<?php
include 'conexion.php';
include 'query_categories.php';
include 'query_editors.php';
include 'validations.php';

$mensaje = "select * from noticias where id_estado = 3 and id_posicion = 3";
$ejecutar = mysqli_query($con, $mensaje);

    if ($ejecutar) {
        $noticias = array();
        // Verificar si se encontraron noticias
        if (mysqli_num_rows($ejecutar) > 0) {
            while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
                $noticias[] = array(
                    'id' => $res[0],
                    'titulo' => $res[1],
                    'bajada' => $res[2],
                    'cuerpo' => $res[3],
                    'imagen' => $res[4],
                    'fecha' => $res[5],
                    'seccion' => $res[6],
                    'nombre_seccion' => $seccion[$res[6] - 1]['seccion'],
                    'redactor' => $res[7],
                    'nombre_redactor' => $redactor[$res[7] - 1]['nombre'],
                    'estado' => $res[8]
                );
            }
            $ultima = array_slice($noticias, -1, 1);
        } else {
            respuesta(false, 'no se encontraron noticias');
        }
    } else {
        respuesta(false, "Error al ejecutar la consulta: " . mysqli_error($con));
    }

mysqli_close($con);
echo json_encode(array('noticias' => $noticias));

