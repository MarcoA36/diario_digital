
export function validarLongitud(campo, min, max) {
  if (campo.length < min || campo.length > max) {
    let mensaje = `Este campo debe tener entresadas ${min} y ${max} caracteres`;
    return {
      valido: false,
      mensaje: mensaje
    }
  }
  return {
    valido: true
  }
}

export function validarLongitudPalabra(campo) {
  const palabras = campo.split(' ');
  const palabraLarga = palabras.find(palabra => palabra.length > 30);

  if (palabraLarga) {
    return {
      valido: false,
      mensaje: `No se admiten palabras con mas de 30 caracteres`
    };
  }

  return {
    valido: true
  };
}



export function validarCaracteres(campo) {
  var regex = /^[a-zA-Z0-9\s]+$/;
  let mensaje = 'solo se permiten letras numeros y espacios';
  if (!regex.test(campo)) {
    return {
      valido: false,
      mensaje: mensaje
    }
  }
  return {
    valido: true
  }
}

export function validarFormatoImg(campo) {
  var formatos = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/tiff', 'image/webp', 'image/svg+xml'];
  let mensaje = 'El formato de imagen no es permitido'
  if (!formatos.includes(campo.type)) {
    return {
      valido: false,
      mensaje: mensaje
    }
  }
  return {
    valido: true
  }
}


