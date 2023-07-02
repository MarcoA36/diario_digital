import { ajax } from "../js/ajax.js"

export function Select(ruta, consulta, callback) {
    const $select = document.createElement('select')
    $select.id='cargar-'+consulta
    ajax({
        ruta:ruta,
        cbSuccess:(options)=>{
             options[consulta].forEach(option => {
                const $option = document.createElement('option');
                $option.value = option.id;
                $option.text = option[consulta];
                $select.appendChild($option);
             });
            console.log(options)
            if (callback) {
                callback() // llama a la función de callback si se proporciona
              }
        }
    })

    return $select
}

