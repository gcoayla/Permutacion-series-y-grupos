function isPrime(n)
{
    if (n <= 1)
        return false;  
    
    for (var i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0)
            return false;
  
    return true;
}

let cadena = document.getElementById("texto");

let resultado = document.getElementById("resultado");



const series_encriptar = (e) => {
  	e.preventDefault();

	
	//REMUVE LOS ESPACIONES EN BLANCO
	console.log(cadena.value);
	cadena = cadena.value.replace(/\s+/g, '');
	
	cadena = cadena.split('');

	var n = cadena.length;
	// console.log(cadena.length);

	// console.log(cadena);

	/*
	1-> par
	2-> impar
	3-> primos
	*/

	// console.log(cadena);
	
	let index;
	let clave = [];

	for(let i=1; i<=n; i++){
		if(isPrime(i)){
			clave.push(i);
		}
	}

	for(let i=4; i<=n; i++){
		if((i % 2) == 0){
			clave.push(i);
		}
	}

	for(let i=1; i<=n; i++){
		if(!clave.includes(i))
			clave.push(i);
	}
	
	// console.log(clave);

	let array_encriptado = new Array(n);
	for(let i=0 ; i<n; i++){
		array_encriptado[i] = cadena[clave[i]-1];
	}
	
	// console.log(cadena);
	// console.log(array_encriptado.toString());
	// return array_encriptado;

	let ans = array_encriptado.join('');
	console.log(ans);
	resultado.value = ans;

}




// series_encriptar(a);
// series_encriptar(a,1);
// series_encriptar(a,2);

// console.log(array_encriptado2.toString());
// alert(a);