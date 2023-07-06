# /app
         
* [index.js](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/index.js) se encarga de iniciar la aplicación en el archivo HTML principal, index.html. 

      document.addEventListener('DOMContentLoaded', App)
      window.addEventListener('hashchange', Router)

Al momento de iniciar la pagina se ejecuta la funcion App().

* [App()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/App.js) obtinen el div con `id=”root”`, y le inserta mediante `appendChild()` El formulario para loguearse o la pagina de inicio dependiendo del estado de la variable de session “sesion-iniciada”, que al momento de iniciar la pagina no esta definida y por lo tanto es seteada en **false**. 

## Formulario para loguearse
Si la sesion no esta iniciada renderiza el componente [PageLogin()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PageLogin.js).


## Pagina de inicio
Cuando el usuario se regitra, cambia la variable de 'sesion-iniciada' a **true** y se recarga la pagina, por lo que cuando se vuelve a ejecutar App() añade la **pagina de inicio** que esta conformada por **Panel()** y **Content()**.

### Panel de administracion
* [Panel()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Panel.js) crea el contenedor y le añade 
  * [Logo()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Logo.js)
  * [PanelUser()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PanelUser.js)
  * [PanelMessages()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PanelUser.js)
  * [PanelMenu()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PanelMenu.js) conformado por los [LinkMenu()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Button.js)
                                                                                                        
                                                    
## Router
Cada boton del **menu** cambia el **hash**, haciendo que se ejecute Router() debido al `window.addEventListener('hashchange', Router)` de **index.js**. 

[Router()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/js/Router.js) detecta el hash con `location.hash` y dependiendo cual sea presenta las distintas vistas en [Content()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Content.js) .                   


### Contenido mostrado
1. [ContainerCard()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/ContainerCard.js) 

   Crea un div container, hace una peticion fetch pasandole como parametro la ruta de la api, y renderiza el array recibido en formato JSON usando un foreach y creando un PostCard() por cada elemento.
   * [PostCard()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostCard.js) esta conformado por
     * [PostInfo()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostInfo.js) que muestra la informacion de la entrada y 
     * [ButtonGroup()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/ButtonGroup.js) añade los 
       * [Button()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Button.js) que correspondan según la ruta pasada por parametro.

1. [PostContent()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostContent.js) 
 
   obtiene toda la informacion del aritculo seleccionado a travez de localStorage y la muestra organizada.
   Abajo se agrega mediante apendChild
   *  PostDetails() o PostPanel() dependiendo de la ruta pasada por parametro. Si la ruta es “en-revision” se inserta [PostPanel()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostDetails.js), con las opciones adicionales para publicar, sino se insterta [PostDetails()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostDetails.js) que solo muestra los detalles del articulo.
Por ultimo se añade 
   * **ButtonGroup()** con los **Button()** correspondientes.

 3. [PostForm()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/PostForm.js) 
 
    crea un formulario al que le añade el componente 
    * [PostEditor()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Editor.js) para brindar herramientas basicas de edicion al contenido principal de la entrada.
Tambien se le agrega el componente 
    * [Select()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/Select.js) que se encarga de crear un elemento select y le agrega como options los resultados obtenidos de la consulta pasada por parametro. En este caso [get_categories.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/get_categories.php).              
 Por ultimo se añade
    *  ButtonGroup() 
       * Button()

4. [MessageForm()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/MessageForm.js) crea un formulario y le añade 
   * **Select()** que consulta a la tabla de redactores en [get_editors.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/get_editors.php).
                         
5. [MessageItem()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/MessageItem.js) se agrega por cada elemento del objeto JSON recibido en la consulta a [message_get_sent.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/message_get_sent.php)  o [message_get_recived.php](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/php/message_get_recived.php)

6. [MessageContent()](https://github.com/MarcoA36/diario_digital/blob/main/admin/app/componentes/MessageContent.js) al igual que PostContent(), usando `localStorage` toma los datos del item seleccionado y los muestra en forma oragnizada.