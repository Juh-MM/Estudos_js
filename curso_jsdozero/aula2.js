
function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    
    //pegar esse elemento no documento html e por numa variavel
    let inputTarefa = document.getElementById("inputTarefa")
    //pegamos o valor (oq tá escrito) dessa primeira variavel e poe em outra variavel (tarefa)
    let tarefa = inputTarefa.value

    document.getElementById("mensagem").textContent = mensagem;

    //pegando o id do elemento ul e pondo en outra variavel para adicionar li's 
    let listaTarefas= document.getElementById("listaTarefas")
    //criando elemento e pondo em uma variavel
    let novaTarefa = document.createElement("li")
    //colocando no li oque foi escrito no input
    novaTarefa.textContent = tarefa
    //pega o ul e cria um elemento filho
    listaTarefas.appendChild(novaTarefa)

    //limpar o input
    inputTarefa.value = ""

    }

