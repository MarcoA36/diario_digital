<?php
include 'conexion.php';
include 'query_categories.php';
include 'query_editors.php';
include 'validations.php';

$id_seccion = $_POST['seccion'];

$todas = "SELECT * from noticias where id_estado = 3 and id_seccion = $id_seccion ORDER BY id DESC";
$ejecutar = mysqli_query($con, $todas);

if ($ejecutar) {
    if (mysqli_num_rows($ejecutar) > 0) {
        while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
            $todas_noticias[] = array('id' => $res[0], 'titulo' => $res[1], 'bajada' => $res[2], 'cuerpo' => $res[3], 'imagen' => $res[4],'fecha'=>$res[5],'seccion'=>$res[6],'nombre_seccion'=> $seccion[$res[6]-1]['seccion'],'redactor' => $res[7], 'nombre_redactor'=> $redactor[$res[7]-1]['nombre'],  'estado'=>$res[8]);
        }
        
        $ultimas_noticias = array_slice($todas_noticias, 0, 2);
        $todas = array_slice($todas_noticias, 2);
    }else{
        respuesta(false, 'no se encontraron noticias');
    }
}else{
   respuesta(false, 'fallo la consulta');
}


mysqli_close($con);

echo json_encode(array('ultimas_noticias' => $ultimas_noticias, 'todas_noticias' => $todas));

?>