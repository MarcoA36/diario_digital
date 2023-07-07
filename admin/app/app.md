# /app
         
* [index.js](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/index.js) se encarga de iniciar la aplicación en el archivo raiz index.html. 

      document.addEventListener('DOMContentLoaded', App)

Cuando carga el documento se ejecuta la funcion App().

* [App()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/App.js) obtinen el div con `id=”root”`, y le inserta mediante `appendChild()` El formulario para loguearse o la pagina de inicio dependiendo del estado de la variable de session “sesion-iniciada”, que al momento de iniciar la pagina no esta definida y por lo tanto es seteada en **false**. 

## Formulario para loguearse
Si la sesion no esta iniciada se añade el componente [PageLogin()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PageLogin.js), que retorna un formulario con los input para que complete el usuario y el boton **iniciar sesión** que ejecuta [loguear()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/js/session_start.js) donde se envian los datos a [session_start.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/session_start.php) para que verifique si hay coincidencia en la base de datos. En caso de que encuentra una, crea las siguientes variables de sesion:
        
    $validacion = true;
    $_SESSION['id_usuario'] = $datos['id'];
    $_SESSION['usuario'] = $datos['usuario'];
    $_SESSION['nombre'] = $datos['nombre'];       
    $_SESSION['rango'] = $datos['rango']; 
y las devuelve en un `echo json_encode` para ser utilizadas en la respuesta de la consulta **fetch** 
          
    if (respuesta.validacion == true) {
       sessionStorage.setItem('sesion-iniciada', true)
       sessionStorage.setItem('id_usuario', respuesta.id_usuario)
       sessionStorage.setItem('usuario', respuesta.usuario)
       sessionStorage.setItem('rango', respuesta.rango)
       window.location.reload()
       }

Donde ademas de setear los datos recibidos en `sessionStorage`, se hace un `reload()` con el fin de que se vuelva a ejecutar **App()**, que esta vez añade la **pagina de inicio** que esta conformada por **Panel()** y **Content()**.

    if (JSON.parse(sessionStorage.getItem('sesion-iniciada')) === false) {
            $root.appendChild(PageLogin())
        } else {
            $root.appendChild(Panel())
            $root.appendChild(Content())
        }

## Pagina de inicio


### Panel de administracion
* [Panel()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Panel.js) crea el contenedor y le añade 
  * [Logo()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Logo.js)
  * [PanelUser()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PanelUser.js)
  * [PanelMessages()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PanelUser.js)
  * [PanelMenu()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PanelMenu.js) conformado por [LinkMenu()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Button.js)
                                                                                                        
                                                    
## Router
Cada boton del **panel** cambia el **hash**, haciendo que se ejecute **Router()**

    window.addEventListener('hashchange', Router)
 en **index.js**. 

[Router()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/js/Router.js) detecta el hash con `location.hash` y dependiendo cual sea presenta las distintas vistas en [Content()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Content.js) .                   


### Lista de entradas
[ContainerCard()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/ContainerCard.js) 
Crea un div container y hace una peticion fetch a alguno de estos archivos:
* [post_get_my-posts.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_get_my-posts.php) obteniedo el total de las entradas cargadas por el usuario.
* [post_get_pending.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_get_pending.php) obteniendo las entradas con **id_estado == 2** que representa las entradas que estan a la espera de ser revisadas y publicadas.
* [post_get_published.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_get_published.php) obteniendo las entradas con **id_estado == 3** que son las entradas publicadas.
   
Luego renderiza el array recibido en formato JSON usando un foreach y creando un **PostCard()** por cada elemento.
   * [PostCard()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostCard.js) 
     * [PostInfo()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostInfo.js) 
     * [ButtonGroup()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/ButtonGroup.js) 
       * [Button()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Button.js) Estos botones reciben como parametro la funcion que deben ejecutar del archivo [post-actions.js](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/js/post-actions.js), y la infromacion del post que sera seteada como atributo **data**.
             
             $btn.setAttribute('data-id', id)
             $btn.setAttribute('data-estado', estado)
             $btn.setAttribute('data-posicion', posicion)
         * **ENVIAR** ejecuta **sendPost()** que cumple la funcion de enviarle a [post_action_change-state.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_action_change-state.php) el nuevo **_id_estado = 2_** para que se actualice en la base de datos.
         * **EDITAR** ejecuta **editPost()** que cambia el hash
 con `window.location.hash = '#/editar'`
   haciendo que se ejecute **Router()** añadiedo el formulario de carga. luego se hace una peticion fetch al archivo [post_get_post.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_get_post.php) para traer los datos del post a editar y carga los valores del mismo en los campos correpondientes.
         * **ELIMINAR** ejecuta **deletePost()** que envia el **id** del post seleccionado a [post_action_delete.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_action_delete.php) para que sea removido de la base de datos. 
         * **RECHAZAR** ejecuta **rejectPost()** que al contrario de **sentPost()** cambia el **id_estado = 1** a travez de [post_action_change-state.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_action_change-state.php) .
         * **PUBLICAR** ejecuta **publishPost()** que ademas de actualizar el **_id_estado = 3_** envia el **_id_posicion_** (seleccionado por el usuario) a [post_action_publish.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_action_publish.php) donde se actualizan los valores y se reorganizan las posiciones.
         * **DESPUBLICAR** ejecuta **unpublishPost()** que actualiza los valores de estado y posicion, y le pasa el **id_posicion** actual (recibido del atributo **_data_**) a  [post_action_unpublish.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_action_unpublish.php) donde se actualizan los valores y se reorganizan las posiciones.  
***
### vista del post seleccionado

 Al dar click en **PostInfo()** se ejecuta [openPost()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/js/post-open.js) que se encarga de setear la informacion del post seleccionado en variables de **_localStorage_** y le agrega un parametro al hash
 
    window.location.hash += '#ver#'+post.titulo

  provocando que se ejecute `Router()` que en este caso añade el componente  [PostContent()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostContent.js) donde se obtiene la informacion seteada previamente y se muestra en formato de post. 
   
  
   Abajo se agrega mediante **apendChild**
   *  PostDetails() o PostPanel() dependiendo de la ruta pasada por parametro. Si la ruta es “en-revision” se inserta [PostPanel()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostDetails.js), con las opciones adicionales para publicar, sino se insterta [PostDetails()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostDetails.js) que solo muestra los detalles del articulo.
Por ultimo se añade 
   * **ButtonGroup()** con los **Button()** correspondientes.

***
### Cargar entrada
 [PostForm()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostForm.js) crea un formulario al que le añade el componente 

   * [PostEditor()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Editor.js) para brindar herramientas basicas de edicion al contenido principal de la entrada.

Tambien se le agrega el componente 
   * [Select()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Select.js) que se encarga de crear un elemento select y le agrega como options los resultados obtenidos de la consulta a [get_categories.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/get_categories.php).              
 Por ultimo se añade
   *  ButtonGroup() 
       * Button()
         * **CARGAR** ejecuta [submitPost()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/js/post-submit.js) que toma los datos cargados del formulario y los envia a [post_action_submit.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/post_action_submit.php) para que sean cargados en la base de datos si las validaciones estan aprovadas.


***
### Enviar mensaje
[MessageForm()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/MessageForm.js) crea un formulario y le añade 
   * **Select()** que consulta a la tabla de redactores en [get_editors.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/get_editors.php).

***
### Lista de mensajes       
[MessageItem()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/MessageItem.js) se agrega por cada elemento del objeto JSON recibido en la consulta a [message_get_sent.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/message_get_sent.php)  o [message_get_recived.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/message_get_recived.php)

***

### Leer mensaje
[MessageContent()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/MessageContent.js) al igual que PostContent(), usando `localStorage` toma los datos del item seleccionado y los muestra en forma oragnizada.