// let data = [{
//     name: "Ana Britto",
//     handle: "ana_britto",
//   },
//   {
//     name: "Ricardo Costa",
//     handle: "ricardocosta",
//   },
//   {
//     name: "Tiago Montana",
//     handle: "tiagomontana",
// }];



function searchContact() {  
    var input, filter, ul, li, i;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    filter.length <= 0 ? document.getElementById("showing-contacts").style.display = "none" : document.getElementById("showing-contacts").style.display = "";
    ul = document.getElementById("contact-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (li[i].textContent.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function comecaSite(){  

    lPessoas.forEach(contato => {
        var novoElemento = document.createElement("li");
        lHTML.appendChild(novoElemento);

        var novaDiv = document.createElement("div");
        var divBtn = document.createElement("div");
        divBtn.className = "btnC";
        novaDiv.className = "dContato";
        novoElemento.appendChild(novaDiv);

        var novop = document.createElement("p");
        var nota1 = document.createTextNode(contato.name);
        var nota2 = document.createTextNode(contato.handle);
        var espaco = document.createElement("br");
        var espaco2 = document.createElement("br");

        novop.className = "novoP";

        novop.appendChild(nota1);
        novop.appendChild(espaco);
        novop.appendChild(nota2);
        novaDiv.appendChild(novop);

        novoElemento.appendChild(espaco2);


        var edita = document.createElement("img");
        var exclui = document.createElement("img");
        var bEdita  = document.createElement("button");
        var bExclui  = document.createElement("button");

        edita.src = "icons/pencil.svg";
        exclui.src = "icons/cancel.svg";

        edita.className = "imgC";
        exclui.className = "imgC";
        
        //aEdita.href = "createcontact.html";
        //aEdita.class = "aEdita";
        //bExclui.type = "button";
        bExclui.id = "d" + i;
        bEdita.id = "e" + i;

        bExclui.className = "btnC";
        bEdita.className = "btnC";
        console.log("1 " + bEdita.class);
        console.log("2 " + bExclui.class);

        bExclui.onclick = function (){
            //console.log(bExclui.id);
            var btnDId = bExclui.id;
            numDId = btnDId[1];
            //console.log('2' + numDId);
            // console.log('3' + lPessoas[numDId]);
            var retirado = lPessoas.splice(numDId, 1); 
            console.log(retirado);
            localStorage.setItem("pessoas", JSON.stringify(lPessoas));
            // i++;
            window.location.href = "index.html";
        }

        bEdita.onclick = function (){
            var btnEId = bEdita.id; //ficar de olho pra ver se tá passando como int ou str -> problema na hora de usar pra ind
            //console.log(btnEId);
            //console.log(btnEId[1]);
            numEId = btnEId[1];
            //console.log(lPessoas[numEId]);
            localStorage.setItem("confere", JSON.stringify(true));// quando confere for true, é pq é paraeditar um contato já xistente, e não criar um novo
            localStorage.setItem("pEditar", JSON.stringify(numEId)); // guarda o item a ser editado
            // i++;
            window.location.href = "createcontact.html";
        }

        bEdita.appendChild(edita);
        bExclui.appendChild(exclui);

        //bEdita.class = "bEdita";
        //bExclui.class = "bExclui";
        novaDiv.appendChild(divBtn);
        divBtn.appendChild(bEdita);
        divBtn.appendChild(bExclui);
        i++;
        
    })
}

function reload(){
    window.location.href = "index.html";
}

var lHTML = document.getElementById("contact-list");

localStorage.setItem("confere", JSON.stringify(false));
if (localStorage.getItem("pessoas") == null){
    localStorage.setItem("pessoas", JSON.stringify([]));
}
var lPessoas = JSON.parse(localStorage.getItem("pessoas"));
console.log(lPessoas);
var i = 0;
var numDId;
var numEId;
var lupa = document.getElementById("lupa");
var timer;
var bVoltar = document.getElementById("voltar");
const searchInput = document.getElementById("search-input");


comecaSite();
searchInput.onkeyup = searchContact;
//bVoltar.onclick = reload;
//timer = setInterval(searchContact, 50);
