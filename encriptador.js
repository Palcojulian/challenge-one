const alfabetos = {
    vocales:['a','e','i','o','u'],
    encriptados:["ai","enter","imes","ober","ufat"]
}

const encriptador = (vocales,encriptados,word) => {
    let newWord = "";
    for(let i = 0; i<word.length; i++){
        let flag = true;
        for(let j = 0; j < vocales.length; j++){
            if(word.charAt(i)==vocales[j]){
                newWord = newWord + encriptados[j];
                flag = false;
                j = vocales.length;
            }
        }
        if(flag){
            newWord = newWord + word.charAt(i);
        }   
    }
    return newWord;
}

let word = 'gaitober';
//console.log(encriptador(alfabetos.vocales, alfabetos.encriptados, word))

for(let i = 0; i<alfabetos.encriptados.length; i++){
    for(let j = 0; j<alfabetos.encriptados[i].length; j++){
        console.log(alfabetos.encriptados[i].charAt(j));
    }
    console.log('');
}