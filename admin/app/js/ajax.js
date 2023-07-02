export function ajax(props) {
    let {ruta, cbSuccess} = props

    fetch(ruta)
      .then(res => res.ok? res.json() : Promise.reject(res))
      .then(json => cbSuccess(json))
      .catch(err => {
        let message = err.status
        if (!err.status) {
          message = "No se encontraron post";
        }
    console.log(message)
    console.log(err)
  })
} 

