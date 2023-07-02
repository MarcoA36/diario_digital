<?php

    if($con = mysqli_connect("localhost", "root", "", "diario_digital")){
        $ok = "ok";
    }else{
        echo "error";
    }

    ?>