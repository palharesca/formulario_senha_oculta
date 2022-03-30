// o que eu quero?
// que ao clicar no ollho, mude a imagem para olho aberto e mude o type do input de password para text
//queryselector = pesquisa seletor, ele linka o que eu colocar no valor a minha variável

let imagem = document.querySelector("img");
let hidden = "./img/hidden.png";
let view = "./img/view.png";
let input = document.querySelector("#senha");

imagem.addEventListener("click", troca);

function troca(){
    if(input.type == "password"){ //se input for do tipo pass
        input.type = "text";
        imagem.src = view; 
    }else{
        input.type = "password";
        imagem.src = hidden;

    }
}
