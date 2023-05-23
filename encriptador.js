const alfabetos = {
    vocales:['a','e','i','o','u'],
    encriptados:["ai","enter","imes","ober","ufat"]
}

const encriptador = (vocales,encriptados,c) => {
    let newWord = "";
    for(let i = 0; i<c.length; i++){
        let flag = true;
        for(let j = 0; j < vocales.length; j++){
            if(c.charAt(i)==vocales[j]){
                newWord = newWord + encriptados[j];
                flag = false;
                j = vocales.length;
            }
        }
        if(flag){
            newWord = newWord + c.charAt(i);
        }   
    }
    return newWord;
}

let word = 'gato'

console.log(encriptador(alfabetos.vocales, alfabetos.encriptados, word))
