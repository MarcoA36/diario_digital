    <aside class="sidebar">
            <?php
            $params = array(
                'titulo' => 'Principales',
                'id_seccion' => 1
            );
            require('section-category.php');

            $params = array(
                'titulo' => 'Deportes', 
                'id_seccion' => 2
                );
            require('section-category.php');
            ?>
    </aside>