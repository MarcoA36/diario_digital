
export function Button(nombre, accion, id, estado, posicion) {
  const $btn = document.createElement('div')
  $btn.classList.add('button__item')

  const name_may = nombre.toUpperCase()
  const name_min = nombre.toLowerCase()

  $btn.innerHTML = `<p>${name_may}</p>`

  $btn.id = `${name_min}-${id}`
  $btn.setAttribute('data-id', id)
  $btn.setAttribute('data-estado', estado)
  $btn.setAttribute('data-posicion', posicion)


  if (name_min == 'enviar' && estado != 1) {
    $btn.style.color = 'grey'
  }

  $btn.addEventListener('click', accion)
  return $btn
}


export function LinkMenu(name, hash, clase) {
  const $linkMenu = document.createElement('li');
  $linkMenu.innerHTML = `<a href=${hash}>${name}</a>`;
  $linkMenu.classList.add(clase);

  return $linkMenu;
}




// export function LinkMenu(name, hash, clase) {
//   const $linkMenu = document.createElement('li');
//   $linkMenu.innerHTML = `<a href=${hash}>${name}</a>`;
//   $linkMenu.classList.add(clase);

//   if (name === 'En revision') {
//     $linkMenu.classList.add('link__en-revision');
//     const num_notificacion = document.createElement('div');
//     num_notificacion.classList.add('link__notification');
//     $linkMenu.appendChild(num_notificacion);

//     // Función para actualizar el número de noticias en revisión
//     const updateNoticiasEnRevision = async () => {
//       const res = await fetch('app/php/post_get_pending.php');
//       const data = await res.json();
//       num_notificacion.innerHTML = data.numero_noticias;
//     };

//     // Observador de cambios utilizando MutationObserver
//     const observer = new MutationObserver(updateNoticiasEnRevision);
//     observer.observe(num_notificacion, { childList: true });
//     //El método observe() se utiliza para configurar 
//     // qué elementos del DOM se deben observar y qué tipos de 
//     // cambios se deben detectar. En este caso, se está observando el nodo 
//     // num_notificacion y se especifica { childList: true } como 
//     // opciones para indicar que se deben detectar cambios en los nodos hijos.

//     // Llamar a la función de actualización inicialmente
//     updateNoticiasEnRevision();
//   }

//   return $linkMenu;
// }



// export function LinkMenu(name, hash, clase) {
//   const $linkMenu = document.createElement('li');
//   $linkMenu.innerHTML = `<a href=${hash}>${name}</a>`;
//   $linkMenu.classList.add(clase);

//   if (name === 'En revision') {
//     $linkMenu.classList.add('link__en-revision');
//     const num_notificacion = document.createElement('div');
//     num_notificacion.classList.add('link__notification');
//     $linkMenu.appendChild(num_notificacion);
     
//     fetch('app/php/post_get_pending.php')
//       .then(res_j => res_j.json())
//       .then(res => {
//         num_notificacion.innerHTML = res.numero_noticias;
//         if (res.numero_noticias == 0) {
//           num_notificacion.style.display='none'
//         }
//       })
//   }

//   return $linkMenu;
// }