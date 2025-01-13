function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value
    // para encurtar o codigo cria uma variavel que chama o html
    // usar const quando for chamar um elemento html pelo id pois id nao muda
    const mensagem = document.getElementById("mensagem")

    if (inputTarefa.value.trim() == ""){
        mensagem.style.color = "#A34743";
        let mensagemErro = "Pfv esceva uma tarefa!"
        mensagem.textContent = mensagemErro;
    }
    else{
        mensagem.style.color = "#28A745";
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        const listaTarefas= document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
        }

        inputTarefa.value = "" 
    
    } 
