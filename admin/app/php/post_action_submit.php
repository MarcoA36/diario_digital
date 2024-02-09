<?php
session_start();
include 'conexion.php';
include 'validations.php';
header("Access-Control-Allow-Origin: *");

validarSesionIniciada();

$validaciones_ok = true;

//TITULO
if (isset($_POST['titulo'])) {
    $titulo = $_POST['titulo'];

    // $validacionLongitud = validarLongitud($titulo, 10, 50);
    // $validacionCaracteres = validarCaracteres($titulo, '/^[a-zA-Z0-9\s]+$/');

    if (empty($titulo)) {
        $validaciones_ok = false;
        respuesta(false, 'El titulo no cumple los requisitos');
        return;
        // die()
        // exit()
    }
} else {
    $validaciones_ok = false;
    respuesta(false, 'No se recibió el campo título');
    return;
}

//ENCABEZADO
if (isset($_POST['bajada'])) {
    $bajada = $_POST['bajada'];

    // $validacionLongitud = validarLongitud($bajada, 50, 120);
    // $validacionCaracteres = validarCaracteres($bajada, '/^[a-zA-Z0-9\s]+$/');

    if (empty($bajada)) {
        $validaciones_ok = false;
        respuesta(false, 'El encabezado no cumple con los requisitos.');
        return;
    }
} else {
    $validaciones_ok = false;
    respuesta(false, 'No se recibió el campo bajada.');
    return;
}

// CUERPO
if (isset($_POST['cuerpo'])) {
    $cuerpo = $_POST['cuerpo'];
    // $validacionLongitud = validarLongitud($cuerpo, 300, 3000);

    if (empty($cuerpo)) {
        $validaciones_ok = false;
        respuesta(false, 'El contenido principal no cumple con los requisitos.');
        return;
    }
} else {
    $validaciones_ok = false;
    respuesta(false, 'No se recibió el campo cuerpo.');
    return;
}


//IMAGEN
if (isset($_FILES['imagen'])) {
    $img = $_FILES['imagen'];
    $imgName = $_FILES['imagen']['name'];
    $imgTmp = $_FILES['imagen']['tmp_name'];

    $allowedFormats = array('jpg', 'jpeg', 'png', 'gif', 'webp');

    if (validarFormatoImg($imgName, $allowedFormats)) {
        // $destinoImg = 'img-cargadas/' . $imgName;
        $destinoImg = '../../api/img/' . $imgName;
        move_uploaded_file($imgTmp, $destinoImg);
    } else {
        $validaciones_ok = false;
        respuesta(false, 'El formato de imagen no está permitido');
        return;
    }

} else {
    // $destinoImg = 'img-cargadas/img-remplazo2.jpg';
    $destinoImg = '../../api/img/img-remplazo.jpg';
}


//SECCION
if (isset($_POST['seccion'])) {
    $seccion = $_POST['seccion'];
} else {
    $validaciones_ok = false;
    respuesta(false, 'No se recibió el campo sección');
    return;
}


//FECHA
if (isset($_POST['fecha'])) {
    $fecha = $_POST['fecha'];
    $validacionFormato = preg_match('/^\d{4}-\d{2}-\d{2}$/', $fecha);

    if (empty($fecha) || !$validacionFormato) {
        $validaciones_ok = false;
        respuesta(false, 'la fecha no cumple con el formato requerido');
        return;
    }
} else {
    $validaciones_ok = false;
    respuesta(false, 'No se recibió el campo fecha');
    return;
}

//REDACTOR
if (isset($_SESSION['id_usuario'])) {
    $redactor = $_SESSION['id_usuario'];
} else {
    $validaciones_ok = false;
    respuesta(false, 'No se recibió el campo redactor');
    return;
}

$estado_noticia = 1;

if ($validaciones_ok) {
    if ($_POST['accion'] == 'cargar') {
        $sql = "INSERT INTO noticias (titulo, bajada, cuerpo, imagen, fecha, id_seccion, id_redactor, id_estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    } else if ($_POST['accion'] == 'editar') {

        if (isset($_POST['id'])) {
            $id_post = validarSeguridad($_POST['id']);
            // $id_post = mysqli_real_escape_string($con, $_POST['id']);
            if (!is_numeric($id_post)) {
                respuesta(false, 'El id recibido no es un numero');
                return;
            }
            if (!buscarEnTabla($id_post, 'noticias', $con)) {
                respuesta(false, 'El id recibido no se encuentra en la tabla');
                return;
            }
        }
        

        $sql = "UPDATE noticias SET titulo = ?, bajada = ?, cuerpo = ?, imagen = ?, fecha = ?, id_seccion = ? WHERE id = ?";
    }

    $stmt = mysqli_prepare($con, $sql);
    if (!$stmt) {
        // Error al preparar la consulta
        respuesta(false, 'Error en la consulta');
        return;
    }

    // Vincular los parámetros
    if ($_POST['accion'] == 'cargar') {
        mysqli_stmt_bind_param($stmt, 'ssssssss', $titulo, $bajada, $cuerpo, $destinoImg, $fecha, $seccion, $redactor, $estado_noticia);
    } else if ($_POST['accion'] == 'editar') {
        mysqli_stmt_bind_param($stmt, 'ssssssi', $titulo, $bajada, $cuerpo, $destinoImg, $fecha, $seccion, $id_post);
    }

    if (mysqli_stmt_execute($stmt)) {
        $respuesta = array('estado' => true, 'mensaje' => 'Operación exitosa.');
        echo json_encode(($respuesta));
    } else {
        $respuesta = array('estado' => false, 'mensaje' => 'fallo la operación.');
        echo json_encode(($respuesta));
    }
    mysqli_stmt_close($stmt);
    mysqli_close($con);
}



/*
https://www.youtube.com/@CodersFree/videos

https://www.youtube.com/watch?v=3e1IsZJuYAw&list=PLZ2ovOgdI-kWWS9aq8mfUDkJRfYib-SvF&ab_channel=CodersFree

https://www.youtube.com/watch?v=KhIDv-ViHBU&list=PLZ2ovOgdI-kWShYbJSN5RiLzpQEm0nEVx&ab_channel=CodersFree

*/
