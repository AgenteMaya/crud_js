var novoNome = document.getElementById("name");
var novoHandle = document.getElementById("handle");
var add = document.getElementById("add");

function verificaN(listaP){
    let verifica = true;
    for (let i = 0; i < listaP.length; i++){ // criar uma funcao para validar o nome, assim dá pra colocar varios validadores
        if (novoNome.value == listaP[i].name || novoNome.value == " " || novoNome.value == ""){
            verifica = false;
        }
    }
    return verifica;
}

function adicionaPessoa(){
    //mudar para não aceitar nome vazio e nem nome repetido
    
    novaPessoa = {
        name: novoNome.value,
        handle: novoHandle.value
    }
    var lPessoas = JSON.parse(localStorage.getItem("pessoas"));


    let verifica = verificaN(lPessoas);
    
    if (verifica == true){
        if (confira){
            id = JSON.parse(localStorage.getItem("pEditar"));
        
            lPessoas[id].name = novoNome.value;
            lPessoas[id].handle = novoHandle.value;    
        }
        else{
           lPessoas.push(novaPessoa); 
        }   
        
        localStorage.setItem("pessoas", JSON.stringify(lPessoas));
        localStorage.setItem("confere", JSON.stringify(false));
    }
    else{
        console.log("Não foi");
        window.alert("Por favor, insira um texto");
    }
}
//localStorage.setItem("pessoas", "[]");
var confira = JSON.parse(localStorage.getItem("confere"));

add.onclick = adicionaPessoa;
