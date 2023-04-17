/*
    Clase "AlfabetoUno"
    En esta clase se define un atributo en donde se van-
    a guardar la vocales, va ser en un arreglo. Se puede-
    acceder a una vocal de acuerdo a su indice.
*/
class AlfabetoUno{
    array;
    /*
        Constructor en donde se inicializa el arreglo de- 
        vocales, estas se guardan ordenamente.  
    */
    constructor(){
        this.array = ["a","e","i","o","u"];
    }
    //Metodo para obtener un vacal del arreglo.
    getArray(index){
        return this.array[index];
    }
    //Metodo para obtener la longitud/tamaño del arreglo
    getLenArray(){
        return this.array.length;
    }
}

/*
    Clase "AlfabetoDos"
    En esta clase se define un atributo en donde se va guardar-
    el valor de cada vocale encriptada, va ser en un arreglo- 
    podemos accedear a cada una mendiante un indice.
*/
class AlfabetoDos{
    array;
    /*
        Constructor en donde se inicializa el valor de cada vocal -
        encriptada.    
    */
    constructor(){
        this.array = ["ai","enter","imes","ober","ufat"];
    }    
    //Metodo para obtener un valor del arreglo.
    getArray(index){
        return this.array[index];
    }
    //Metodo para obtener la longitud/tamaño del arreglo
    getLenArray(){
        return this.array.length;
    }
}

/*
    Funcion encriptar
    Se definen 3 parametros de entrada, alfabetoUno(objeto-
    de la clase AlfabetoUno), alfabetoDos(objeto de clase-
    AlfabetoDos) y word(entrada del usuario, que se va encriptar)
*/
function encriptar(alfabetoUno, alfabetoDos, word){
    /*
        Se declara una variable "newWord", que va guardar-
        la palabra encriptada
    */    
    let newWord = "";
    /*
        "for" exterior
        Se recorre cada letra de la palabra que ingrese- 
        el usurio.    
    */
    for(let i=0; i<word.length;i++){
        /*
            Se declara "flag", nos servira como bandera-
            al momento concatenar letras de acuerdo a su-
            estado. 
        */
        let flag = true;

        /*
            "for" interno
            En donde se va recorrer cada el arreglo con-
            vocales del alfabeto uno.
        */
        for(let j=0; j<alfabetoUno.getLenArray(); j++){
            /*
                "if" en donde se compara la letra alojada en-
                la posicion i de word(entrada del usuario)-
                con la vocal alojada en la poscion j del-
                alfabetoUno(vocales que se definien es su-
                clase), si estas coinciden se realiza la- 
                encriptacion, de acuerdo a la vocal y se-
                concatenan en "newWord", la bandera cambia-
                de estado, se le asigna a j el tamaño del
                arreglo del objeto "alfabetoUno", con el-
                fin de cortar el ciclo interno. 
            */
            if(word.charAt(i)==alfabetoUno.getArray(j)){
                newWord = newWord + alfabetoDos.getArray(j);
                flag = false;
                j = alfabetoUno.getLenArray();
            }
        }
        /*
            "if" si el estado de la bandera es verdadero-
            esta va concatenar una letra exluye la vocal,-
            no contatena vocales, ya que de acuerdo a la-
            validacion dentro del for interno, la vocal-
            se contcateno pero encriptada y el estado-
            de la bandera cambio falso.

        */
        if(flag){
            newWord = newWord + word.charAt(i);
        }   
    }

    /*
        Una vez se teminen de ejecutar el for interno y-
        externo se obtendra la palabra encriptada, que
        sera retornada.
    */
    return newWord;
}


let alfabetoUno = new AlfabetoUno();
let alfabetoDos = new AlfabetoDos();

let word = prompt("Igresa una palabra");

console.log(encriptar(alfabetoUno, alfabetoDos, word));
