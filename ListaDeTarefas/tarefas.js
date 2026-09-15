const tarefas = [];

export const criarTarefa = (titulo, prioridade) => {

    const tarefa = {
        id: tarefas.length + 1,
        titulo: titulo,
        prioridade: prioridade,
        concluida: false
    }
    tarefas.push(tarefa);

    return tarefa;
}

