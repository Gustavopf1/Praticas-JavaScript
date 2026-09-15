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

export const buscarTarefaPorID = (id) => {
    const resultado = tarefas.find((tarefa) => tarefa.id === Number(id));

    return resultado;
}

export const concluirTarefa = (id) => {
    const tarefa = buscarTarefaPorID(id);

    if (tarefa === undefined) {
        return;
    }
    tarefa.concluida = true;
    return tarefa;
}