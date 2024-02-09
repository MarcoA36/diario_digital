<?php
include 'conexion.php';
include 'query_editors.php';
include 'validations.php';

if (isset($_POST['id'])) {
    $id = validarSeguridad($_POST['id']);

    if (!is_numeric($id)) {
        respuesta(false, 'El id recibido no es un numero');
    }
    if (!buscarEnTabla($id, 'noticias', $con)) {
        respuesta(false, 'El id recibido no se encuentra en la tabla');
    }
}else{
    respuesta(false, 'no se encontro el campo');
}

$mensaje = "select * from noticias where id = '$id'";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    if (mysqli_num_rows($ejecutar) > 0) {
        while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
            $post = array('id' => $res[0], 'titulo' => $res[1], 'bajada' => $res[2], 'cuerpo' => $res[3], 'imagen' => $res[4],'fecha'=>$res[5],'seccion'=>$res[6],'redactor' => $res[7],'nombre_redactor'=> $redactor[$res[7]-1]['nombre'], 'estado'=>$res[8]);
        }
        
        mysqli_close($con);
        echo json_encode($post);
    }else{
        respuesta(false, 'no se encontraron post');
    }
}else{
    respuesta(false, 'fallo la consulta');
}
?>


