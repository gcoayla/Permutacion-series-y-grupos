const key = document.getElementById("key")
const cifrado = document.getElementById("textarea")
const error = document.getElementById("error")
const resultado = document.getElementById("resultado")

const descifrar = (e) => {
  e.preventDefault();

  if(key.value === '' || key.value.length < 4) {
    error.replaceChildren("la llave no es lo suficientemente larga")
    return
  }

  for (let i = 1; i <= key.value.length ; i++) {
    if(!key.value.includes(i.toString()) ) {
      error.replaceChildren("la llave tiene valores incomplatibles")
      return
    }
  }
  
  if(cifrado.value === '') {
    error.replaceChildren("Ingrese texto a descifrar")
    return
  }
  error.replaceChildren("")
  const keyLength = key.value.length

  var parts = []
  for (var i = 0, charsLength = cifrado.value.length; i < charsLength; i += keyLength) {
    parts.push(cifrado.value.substring(i, i + keyLength));
  }

  var result = []

  for (let i = 0; i < parts.length; i++) {
    let tmp = new Array(keyLength)
    for (let j = 0; j < keyLength; j++) {
      tmp[key.value[j]-1] = parts[i][j]
    }
    result.push(tmp.join(''))
  }

  resultado.value = result.join('')

}