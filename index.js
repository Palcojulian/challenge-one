class AlfabetoUno{
    array;
    constructor(){
        this.array = ["a","e","i","o","u"];
    }  
    getArray(index){
        return this.array[index];
    }
}

class AlfabetoDos{
    array;
    constructor(){
        this.array = ["enter","imes","ai","ober","ufat"];
    }
    getArray(index){
        return this.array[index];
    }
}

let alfabetoUno = new AlfabetoUno();
let alfabetoDos = new AlfabetoDos();

for(let i = 0; i<5; i++){
    console.log(alfabetoUno.getArray(i)+" encriptado=> "+ alfabetoDos.getArray(i));
}