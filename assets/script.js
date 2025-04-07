/* Função para verificar se os campos foram preenchidos, e se o campo "Email" foi preencido corretamente */
function clicado(){
    /* Coleta de valores dos campos */
    let nome = window.document.getElementById("nome").value;
    let email = window.document.getElementById("email").value;
    let motivo = window.document.getElementById("motivo").value;

    /* Verificacão referente ao oque foi digitado e se foram preencidos */
    if(nome !="" && email != ""&& email.indexOf("@") !== -1 && email.indexOf(".") !== -1 && motivo != ""){
        alert("Enviado com Sucesso!");
    }else{
        alert("Preencha todos os campos corretamente e tente novamente.")
    }
    
}

/* Função para a pagina não fica recarregando ao dar erro no preenchimento do formulario */
function form(event){
    event.preventDefault();
}



