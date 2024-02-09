<?php
include 'conexion.php';
include 'validations.php';
include 'query_categories.php';
include 'query_editors.php';
include 'query_states.php';

$search_value = mysqli_real_escape_string($con, $_POST['search-value']); // Escapa caracteres especiales para prevenir inyecciones SQL
$mensaje = "SELECT * FROM noticias WHERE id_estado = 3 AND (titulo LIKE '%$search_value%' OR bajada LIKE '%$search_value%' OR cuerpo LIKE '%$search_value%')";

$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    if (mysqli_num_rows($ejecutar) > 0) {
        while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
            $noticias[] = array('id' => $res[0], 'titulo' => $res[1], 'bajada' => $res[2], 'cuerpo' => $res[3], 'imagen' => $res[4],'fecha'=>$res[5],'seccion'=>$res[6],'nombre_seccion'=>$seccion[$res[6]-1]['seccion'],'redactor'=>$res[7],'nombre_redactor'=>$redactor[$res[7]-1]['nombre'],'rango_redactor'=>$redactor[$res[7]-1]['rango'],'estado'=>$res[8],'nombre_estado'=>$estadoPost[$res[8]-1]['estado'],'posicion'=>$res[9]);
        }
        mysqli_close($con);
        echo json_encode(array('noticias' => $noticias));
    }else{
        respuesta(false, 'no se encontraron resultados');
    }
}else{
    respuesta(false, 'fallo la consulta');
}
?>




