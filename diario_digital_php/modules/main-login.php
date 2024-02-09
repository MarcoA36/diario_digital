<div class="container">

    <div class="container-left">
        <div class="form__wrapper">
            <?php
            if (isset($_GET['action']) && $_GET['action'] === 'register') { // Verificamos si se proporcionó el parámetro 'action' y tiene el valor 'register'
                include 'form-register.php';
            } else {
                include 'form-login.php';
            }
            ?>
            <div class="form__card">
                <p class="text">Don´t have a DDG account?</p>
                <a href="page-login.php?action=register">
                    <p class="text-sm">Register now</p>
                </a>
            </div>
        </div>
    </div>
    <div class="container-right">
        <div class="image-right">
            <img src="img/img-login.png" alt="">
        </div>

        <div class="button--close">
            <a href="index.php">
                <i class="fa-solid fa-xmark icon-close"></i>
            </a>
        </div>
    </div>

</div>