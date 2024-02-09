<?php
include 'conexion.php';
include 'query_categories.php';
include 'query_editors.php';
include 'validations.php';

$id_seccion = $_POST['seccion'];

$mensaje = "SELECT * from noticias where id_estado = 3 and id_seccion = $id_seccion and id_posicion = 1";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
        $noticias[] = array('id' => $res[0], 'titulo' => $res[1], 'bajada' => $res[2], 'cuerpo' => $res[3], 'imagen' => $res[4],'fecha'=>$res[5],'seccion'=>$res[6],'nombre_seccion'=> $seccion[$res[6]-1]['seccion'],'redactor' => $res[7],'nombre_redactor'=> $redactor[$res[7]-1]['nombre'], 'estado'=>$res[8]);
    }
    
    $ultimas = array_slice($noticias, -3, 3);
}else{
    respuesta(false, 'fallo la consulta: ' + $mensaje);
}

    
mysqli_close($con);

echo json_encode(array('noticias' => $ultimas));
