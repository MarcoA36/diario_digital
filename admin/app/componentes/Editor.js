export function PostEditor() {
    const $editor = document.createElement('div')
    $editor.classList.add('editor__wrapper')

    $editor.appendChild(editorMenu())
    $editor.appendChild(editorContent())

    return $editor;
}

function editorMenu() {
    const $editor_menu = document.createElement('div')
    $editor_menu.classList.add('editor__menu')

    //titulos
    const $titles = document.createElement('div')
    $titles.classList.add('editor__menu--titles')

    $titles.appendChild(editor_titles('h2', 'H2'))
    $titles.appendChild(editor_titles('h3', 'H3'))
    $titles.appendChild(editor_titles('h4', 'H4'))
    $titles.appendChild(editor_titles('h5', 'H5'))
    $titles.appendChild(editor_titles('p', 'Parrafo'))

    //justificado
    // const $justify = document.createElement('div')
    // $justify.classList.add('editor__menu--justify')
    // $justify.appendChild(editor_justify('right', 'right'))
    // $justify.appendChild(editor_justify('center', 'center'))
    // $justify.appendChild(editor_justify('left', 'left'))

    //fontStyle
    const $fontStyle = document.createElement('div')
    $fontStyle.classList.add('editor__menu--font-style')
    $fontStyle.appendChild(editor_fontStyle('bold', 'bold'))
    $fontStyle.appendChild(editor_fontStyle('italic', 'italic'))
    $fontStyle.appendChild(editor_fontStyle('normal', 'normal'))

    $editor_menu.appendChild($titles)
    // $editor_menu.appendChild($justify)
    $editor_menu.appendChild($fontStyle)
    return $editor_menu
}


function editorContent() {
    const $editor_content = document.createElement('div')
    $editor_content.classList.add('editor__content')
    $editor_content.id = "cargar-cuerpo"
    $editor_content.contentEditable = true;
    // $editor_content.textContent = "Escriba su texto aqui..."
    $editor_content.innerHTML = '<p>Escriba aquí...</p>'

    return $editor_content
}

function editor_titles(e, nombre) {
    const $element = document.createElement('button')
    $element.textContent = nombre
    $element.addEventListener('click', () => {
      event.preventDefault();
        console.log('dsas')
        tag(e)
    })

    return $element
}

function tag(tag) {
    // const editor = document.getElementById('editor');
    const selectedText = window.getSelection().toString();

    if (selectedText) {
        const $tag = document.createElement(tag);
        $tag.innerHTML = selectedText;

        const range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        range.insertNode($tag);
    }
}

function editor_fontStyle(nombre, style) {
    const $element = document.createElement('button')
    $element.type = 'button'
    $element.textContent = nombre
    $element.addEventListener('click', () => {
        fontStyle(style)
    })

    return $element
}

function fontStyle(style) {
  const selectedText = window.getSelection().toString();
  const range = window.getSelection().getRangeAt(0);
  const parentElement = range.commonAncestorContainer.parentElement;

  if (selectedText && parentElement.tagName === 'SPAN') {
    if (style === 'bold') {
      parentElement.style.fontWeight = style;
      parentElement.style.fontStyle = '';
    } else if (style === 'italic') {
      parentElement.style.fontStyle = style;
      parentElement.style.fontWeight = '';
    } else if (style === 'normal') {
      parentElement.style.fontWeight = '';
      parentElement.style.fontStyle = '';
    }
  } else {
    const span = document.createElement('span');
    if (style === 'bold') {
      span.style.fontWeight = style;
    } else if (style === 'italic') {
      span.style.fontStyle = style;
    } else if (style === 'normal') {
      // No se establece ningún estilo de fuente en el nuevo span
    }
    span.innerHTML = selectedText;
    range.deleteContents();
    range.insertNode(span);
  }
}

// function editor_justify(e, nombre) {
//     const $element = document.createElement('button')
//     $element.textContent = nombre
//     $element.addEventListener('click', () => {
//         justify(e)
//     })

//     return $element
// }

// function justify(justification) {

//     const selectedText = window.getSelection().toString();
//     const range = window.getSelection().getRangeAt(0);
//     const parentElement = range.commonAncestorContainer.parentElement;

//     if (selectedText && parentElement.tagName === 'SPAN') {
//         parentElement.style.textAlign = justification;

//         if (justification === 'center') {
//             parentElement.style.margin = 'auto';
//         } else if (justification === 'left') {
//             parentElement.style.marginRight = 'auto';
//         } else if (justification === 'right') {
//             parentElement.style.marginLeft = 'auto';
//         }
//     } else {
//         const span = document.createElement('span');
//         span.style.display = 'block';
//         span.style.textAlign = justification;

//         if (justification === 'center') {
//             span.style.margin = 'auto';
//         } else if (justification === 'left') {
//             span.style.marginRight = 'auto';
//         } else if (justification === 'right') {
//             span.style.marginLeft = 'auto';
//         }

//         span.innerHTML = selectedText;
//         range.deleteContents();
//         range.insertNode(span);
//     }
// }

