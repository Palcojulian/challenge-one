const alfabetos = {
    vocales:['a','e','i','o','u'],
    encriptados:["ai","enter","imes","ober","ufat"]
}

const wordEncriptada = (a,b,c) => {
    let newWord = "";
    for(let i = 0; i<c.length; i++){
        let flag = true;
        for(let j = 0; j < a.length; j++){
            if(c.charAt(i)==a[j]){
                newWord = newWord + b[j];
                flag = false;
                j = a.length;
            }
        }
        if(flag){
            newWord = newWord + c.charAt(i);
        }   
    }
    return newWord;
}

console.log(wordEncriptada(alfabetos.vocales, alfabetos.encriptados, 'Bienvenidos estudiantes'))

// const wordEncriptada = (word) => {return `hola ${word}`}

// console.log(wordEncriptada('JULIAN'));

// const suma = () => 2+2*2;

// console.log(suma())


